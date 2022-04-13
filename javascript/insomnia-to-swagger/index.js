fs = require('fs')
const file = JSON.parse(fs.readFileSync('./Insomnia_2022-04-11.json', { encoding: 'utf8', flag: 'r' }))

const URL_REGEXP = /\/[\w-_/]+$/

const paths = file.resources.reduce((ac, item) => {
  if (!item.url) return ac
  const match = URL_REGEXP.exec(item.url)
  const key = match ? match[0] : '/'
  ac[key] = ac[key] || {}
  item.method = item.method.toLowerCase()
  ac[key][item.method] = {
    summary: item.name,
    description: item.description,
    produces: [
      "application/json"
    ],
    responses: {
      200: {
        examples: {
          "application/json": ""
        }
      },
    },
    tags: [file.resources.find(resource => resource._id === item.parentId).name]
  }
  ac[key][item.method].parameters = []
  if (item.parameters.length) {
    ac[key][item.method].parameters.push(
      ...item.parameters.map(param => ({
        in: 'query',
        name: param.name,
        type: 'string'
      }))
    )
  }
  if (item.headers.length) {
    ac[key][item.method].parameters.push(
      ...item.headers
        .filter(p => p.name !== 'Content-Type')
        .map(p => ({
          in: 'header',
          name: p.name,
          type: 'string'
        }))
    )
  }
  if (item.body?.text) {
    let json
    try {
      json = JSON.parse(item.body.text)
    } catch (error) {
      return ac
    }
    ac[key][item.method].requestBody = {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: Object
              .entries(json)
              .reduce((ac, [k, v]) => ({
                ...ac,
                [k]: (() => {
                  switch (typeof v) {
                    case 'number':
                      return 'integer'
                    default:
                      return typeof v
                  }
                })()
              }), {})
          },
          example: json
        }
      }
    }
  }
  return ac
}, {})

const swagger = {
  openapi: "3.0.0",
  info: {
    title: "Sample API",
    description: "Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.",
    version: "0.1.9"
  },
  servers: [
    {
      url: "https://mtt-dev.herokuapp.com/",
      description: "Server"
    }
  ],
  consumes: [
    "application/json"
  ],
  paths
}


console.log(JSON.stringify(swagger, null, 4))