// Example direct prototype inheritance

function Quadrangle() {
  this.sizeX = 10
  this.sizeY = 10
}
Quadrangle.prototype.increaseX = function increaseX(toPlus = 1) {
  this.sizeX += toPlus
}
Quadrangle.prototype.increaseY = function increaseY(toPlus = 1) {
  this.sizeY += toPlus
}


var Square = new Quadrangle()

Square.increase = function increase(toPlus) {
  this.increaseX(toPlus)
  this.increaseY(toPlus)
}

Square.increase(5)

// increaseY and increaseX only exists on prototype
console.log(Square)