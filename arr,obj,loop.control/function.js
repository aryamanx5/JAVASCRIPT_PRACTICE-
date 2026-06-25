//Functions//

function mathOps(a,b){
    obj = {
        sum: a+b,
        difference: a-b,
        product: a*b,
        quotient: a/b
    }
    return obj;
}

//console.log(mathOps(10,2));


function mergearrays(arr1, arr2){
    arr3 = [...arr1 , ...arr2]
    return arr3;
}

// console.log(mergearrays([1, 2, 3], [4, 5, 6]));

function username (user){
    if (user === undefined){
        console.log("please enter a username, no data"
        )
    }
    return `${user} just logged in`;
}
// console.log(username("Aryaman"));
let cx = username ("Harsh")
// console.log(cx);


function username (user="Guest"){
    if (!user){
        console.log("please enter a username, no data"
        )
    }
    return `${user} just logged in`;
}
// console.log(username());
// console.log(username("Aryaman"));

const aad = (num1, num2) => ({ username: "Guest", sum: num1 + num2 }); 

//console.log(aad(10, 20));


(function haha(naam) {
    console.log(`this is an IIFE function ${naam}`);
}); //('Aryaman');

//use ; at last warna chalte jayega

// ((name) => {
//     console.log(`this is an IIFE function ${name}`);
// })('Aryaman');
