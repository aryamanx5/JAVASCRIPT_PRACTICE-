// to check array is empty use array.length === 0 and for object use Object.keys(obj).length === 0


let arr =[]
let obj = {}

if (arr.length ===0){
    //console.log("empty array")
    if (Object.keys(obj).length === 0){
        //console.log("empty object")
    }
}
else {
    //console.log("not empty")
}

// let val = 5
// val = null ?? 10
// console.log(val)


//ternary operator
let iceprice = 100
// iceprice >= 50 ? console.log("icecream is expensive") : console.log("icecream is cheap")


switch (iceprice) {
    case 50:
        console.log("icecream is cheap");
        break;
    case 100:
        console.log("icecream is expensive");
        break;
    default:
        console.log("icecream is not available");
}
