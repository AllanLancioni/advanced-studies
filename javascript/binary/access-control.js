const PERMISSION_READ = 4
const PERMISSION_WRITE = 2
const PERMISSION_EXECUTE = 1

const myPermission = 7

function hasReadPermission(permission) {
  validatePermission(permission)
  return permission & PERMISSION_READ
}

function hasWritePermission(permission) {
  validatePermission(permission)
  return permission & PERMISSION_WRITE
}

function hasExecutePermission(permission) {
  validatePermission(permission)
  return permission & PERMISSION_EXECUTE
}

function permissionToString(permission) {
  validatePermission(permission)
  const [x, w, r] = [...permission.toString(2)].reverse().map(x => +x)
  return `${r ? 'r' : '-'}${w ? 'w' : '-'}${x ? 'x' : '-'}`
}

function validatePermission(permission) {
  if (typeof permission !== 'number' || permission < 0 || permission > 7)
    throw new Error('Permission Invalid!')
}