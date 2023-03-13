function sumto(n){
    let result = 0
    for (let i = 1; i <= n; i++){
        result += i
    }
    return result
}

console.log(sumto(100))

function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }

console.log( sumTo(100) );


function fact(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
  
console.log( fact(5) );

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }
  
console.log( factorial(5) ); 




let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function find(list) {
    let prom = list;
  
    while (prom) {
      console.log(prom.value);
      prom = prom.next;
    }
  
  }
  
find(list);

  

function fibornaci(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}
  
console.log( fibornaci(3) );
console.log( fibornaci(7) ); 
console.log( fibornaci(77) ); 

function reversefind(list) {
  
    if (list.next) {
      reversefind(list.next);
    }
  
    console.log(list.value);
}
reversefind(list)