var a = 10;
var b = 20;
var c = () => {
    console.log('hellow world');
}
const arr = {
    a,
    b,
    c
};
console.log(arr);
arr.c();
module.exports = arr;