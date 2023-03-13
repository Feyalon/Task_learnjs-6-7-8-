function f() {
    alert( this ); // <--null
  }
  
  let profile = {
    g: f.bind(null)
};
  
profile.g();

function f() {
    console.log(this.name);
  }
  
  f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
  
f(); // Вася
function sayHi() {
    console.log( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
});
  
console.log( bound.test ); // undefined, bind не имеет свойство


function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Вася',
  
    loginOk() {
      console.log(`${this.name} logged in`);
    },
  
    loginFail() {
      console.log(`${this.name} failed to log in`);
    },
  
  };
  
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
function namePassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let names = {
    name: 'John',
  
    login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};
  
askPassword(() => names.login(true), () => names.login(false));