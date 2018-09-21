var a = 20;
global.a = a;
var demo2 = require('./模块2');
console.log(global.a);
console.log(global.say);
global.say();