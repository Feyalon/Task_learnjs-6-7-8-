let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};
  
console.log( rabbit.jumps ); // true (1)
  
delete rabbit.jumps;
  
console.log( rabbit.jumps ); // null (2)
  
delete animal.jumps;
  
console.log( rabbit.jumps ); // undefined (3)

let head = {
    glasses: 1
};
  
let table = {
    pen: 3,
    __proto__: head
};
  
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
  
let pockets = {
    money: 2000,
    __proto__: bed
};
  
console.log( pockets.pen ); // 3
console.log( bed.glasses ); // 1
console.log( table.money );




let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
};
  
let speedy = {
    __proto__: hamster,
    stomach: []
};
  
let lazy = {
    __proto__: hamster,
    stomach: []
};
  
speedy.eat("яблоко");
console.log( speedy.stomach ); // яблоко
  
console.log( lazy.stomach ); // ничего нету