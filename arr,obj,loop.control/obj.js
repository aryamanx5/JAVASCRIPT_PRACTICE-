//OBJECTS//
let x = {a: 1, b:2}
let y = {b: 3, d:4}
//console.log({...x, ...y});
const rt = Object.assign( x, y)
// console.log(x)
// console.log(rt)
// console.log(rt === x)
// let z = {...x, ...y}
// console.log(z);

let user = {
    name: "chai",
    age: 3,
    city: "Jaipur"
};
const{ name: username, age, city} = user;
console.log(username);
console.log(age);
console.log(city);
