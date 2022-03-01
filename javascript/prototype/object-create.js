// Example prototype inheritance with Object Create
var Quadrangle = {
  sizeX: 10,
  sizeY: 10,
  increaseY(toPlus = 1) {
    this.sizeX += toPlus
  },
  increaseX(toPlus= 1) {
    this.sizeY += toPlus
  }
}

var Square = Object.create(Quadrangle)
Square.increase = function increase(toPlus) {
  this.increaseX(toPlus)
  this.increaseY(toPlus)
}

Square.increase(5)

// increaseY and increaseX only exists on prototype
console.log(Square)