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

//filter

const nums = [1,2,3,4,5,6]
let ss = nums.filter((a) => a <=3 )
//console.log(ss)
let gg = nums.filter((b) => {
    return b > 5
})
// console.log(gg)

/////

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
  //console.log(userBooks)
  let userBoo = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  //console.log(userBoo);
  
  
//chaining

const abc = [1,2,3,5]
let hi = abc.map((bye) => bye * 10).map((bye)=>bye*10).filter((bye)=> bye > 300 && bye < 900);
//console.log(hi);

//Reduce

let hello = abc.reduce((accumulator, currentval) => { (accumulator + currentval)
    //console.log(`acc = ${accumulator} currentval = ${currentval}`)
    return accumulator + currentval;}, 0)

//console.log("final value =", hello);
 //or
 let jjj = abc.reduce((accumulator, currentval) => (accumulator + currentval), 0 )
//console.log("one more way to get final val = ", jjj);


let pills = [
    {headache: "saridon",
     price : 79
    },
    {fever: "dolo650",
     price : 150
    },
    {stomachache : "pan D",
     price : 108
    }
]
const total = pills.reduce((acc,meds) => acc+ meds.price, 0)
console.log(total)
const totalbill= pills.reduce((acc, meds) => {
    if (meds.price < 150){
        acc+=meds.price
    }
    return acc;
}, 0)
console.log(totalbill);



 



