var say = () => {
    console.log('hellow world');
}
global.say = say;
global.say();
var demo1 = require('./模块1');
console.log(global.a);