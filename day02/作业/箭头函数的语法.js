var fn = () => {
    setTimeout(() => {
        console.log('这是一个箭头函数');
    },2000);
    var a = (x) => console.log(x + 20);
    return a;
}
console.log(fn());
fn()(1);

