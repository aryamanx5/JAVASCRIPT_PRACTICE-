// setTimeout(() => {
//     console.log("four")
// }, 3999 );


// console.log("one")
// console.log("two")
// console.log("threer")

function getData (dataID, getnxtData) {
    setTimeout(()=>{ 
        console.log("data:", dataID)
         if (getnxtData){
         getnxtData();
    }
}, 2000);
}

getData(1, ()=>{
    getData(2, ()=> {
        getData(3, ()=>{
            getData(4)
        })
    });
});