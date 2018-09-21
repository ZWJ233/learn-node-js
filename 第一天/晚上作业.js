// let a = 10;
// const b = 20;
// console.log(b);
// let user={
//     name:'zs',
//     age:'20',
//     gender:'男',
//     say:()=>{
//         alert('hellow world');
//     }
// }

// const {name:username,age:userage,say:usersay,gender}=user;
// console.log(usersay);
// console.log(gender);
// console.log(username);
// console.log(userage);


// 箭头函数
let a = () => {
    console.log('这是一个箭头函数');
}
a();
let b = () => {
    console.log(this);
    setTimeout(()=>{
        console.log(this);
        console.log('箭头函数不改变函数内部的this指向');
    },1000)
}
b();
