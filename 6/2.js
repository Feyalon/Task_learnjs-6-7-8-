function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
console.log( counter() ); // 0
console.log( counter() ); // 1
  
console.log( counter2() ); // 0
console.log( counter2() ); // 1

function counterm() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let cou = new counterm();
  
  console.log( cou.up() ); // 1
  console.log( cou.up() ); // 2
  console.log( cou.down() ); // 1

  function sum(a){
    return function(b){
       return a += b
    }
  }
  console.log(sum(1)(2))
  let arr = [1, 2, 3, 4, 5, 6, 7];
  function inBetween(a, b){
    return function(x){
        return x >= a && x <= b
    }
  }
  function inArr(arr){
    return function(x){
        return arr.includes(x)
    }
  }

  console.log(arr.filter(inBetween(3, 6)))
  console.log(arr.filter(inArr([1, 2, 10])))

  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  
  function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
  
  users.sort(byField('name'));
  users.forEach(user => console.log(user.name)); 
  
  users.sort(byField('age'));
  users.forEach(user => console.log(user.name));


  function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let j = i;
      let shooter = function() { // функция shooter
        console.log( j ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0]();
  army[5]();