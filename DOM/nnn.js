console.log( "we are observing set time out by async")
setTimeout(()=> {
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
    if (items.name === "jayesh"){
        console.log("jayesh found")
    }
    
});
}, 2000);

console.log("please wait its being processed");