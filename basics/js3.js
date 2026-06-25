//MATHS LIB
let x = 2.2
console.log(Math.round(x));
console.log(Math.ceil(x));
console.log(Math.floor(x));
console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
console.log(Math.abs(x));

let b = [1,2,3,4,5]
let c = [6,7,8,9,10]
// console.log(Math.max(...b));

 
let user = {
    name: "chai",
    age: 3,
    city: "Jaipur"
};
const { name, age, country = "India" } = user;
console.log(name);
console.log(age);
console.log(user.country);
console.log(user.city);