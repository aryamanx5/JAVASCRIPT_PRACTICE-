//USING FOR OF LOOP. (object wont work here)

//important
// | Loop       | Arrays                  | Objects | Maps              | Sets | Strings                | Gives Index? | Returns              |
// |------------|-------------------------|---------|-------------------|------|------------------------|--------------|----------------------|
// | `for`      | ✅                      | ❌*     | ❌ (not directly) | ❌   | ✅                     | ✅           | Index (you control)  |
// | `for...of` | ✅                      | ❌      | ✅                | ✅   | ✅                     | ❌           | Values               |
// | `for...in` | ⚠️ (indexes as strings) | ✅      | ❌                | ❌   | ⚠️ (character indexes) | ✅           | Keys / Indexes       |

let arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num)
}


let ar = "aryaman singh"
for (const harsh of ar) {
    if (harsh === " "){
        continue
    }
    else{
        //console.log(`characters of ar is ${harsh}`)
    }
}


/// FOR MAP

let map = new Map([
    ["name", "aryaman"],
    ["age", 21],
])
//or
map.set("city" , "patna")
map.set("industry", "Artificial Intellegence")
// console.log(map)
// now running it in loop
for (const [key, value] of map) {
    // console.log(key, value)
}


// USING FOR IN LOOP (WORKS ON OBJECTS)
const obj = {
    js : "java script",
    cpp : "C++",
    py : "python",
}

for (const key in obj) {
    // console.log(`${key} => ${obj[key]}`)
}   


/// FOR EACH loop
const arrr = [1,2,3,4,5,6,7]
arrr.forEach(function (elements) {
    //console.log(elements)
});
//by arrow function
 arrr.forEach((item)=> {
    // console.log(item);
 } );

arrr.forEach((item, index, arrr)=> {
    //console.log(item,index,arr);
} )

const array1 = [
    {
        name: "aryaman",
        age: 21
    },
    {
        name: "yashasvi",
        age: 20
    },
    {
        name: "jayesh",
        age: 20
    }
]
array1.forEach((items) => {
    console.log(`name = ${items.name} age = ${items.age}`)
    
});

array1.forEach((items) => {
    console.log(`bla bla ${JSON.stringify(items)}`)
});
array1.forEach((items) => {
    console.log("hiii", items)
});
array1.forEach((items) => {
    console.log(`how you doin ${items}`)
});

arr = []
