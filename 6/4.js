function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(() => {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
}
  
  // использование:
printNumbers(0, 10);

function consolenum(from, to) {
    let current = from;
  
    setTimeout(function go() {
      console.log(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
}
  
consolenum(5, 10);

let i = 0;

setTimeout(() => console.log(i), 100); // 100000000

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}