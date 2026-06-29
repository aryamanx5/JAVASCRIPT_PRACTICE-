// let promise = new Promise ((res, rej) =>{
//     //console.log("I am a programmer learning promise");
//     //rej("sorry some error found");
// })




// function getData (dataID, getnxtData) {
//     return new Promise((resolve, reject) =>{
//     setTimeout(()=>{ 
//          console.log("data:", dataID)
//          resolve ("success");
//          if (getnxtData){
//          getnxtData();
//      }
// }, 5000);
// });
// }



///promise.then and promise.catch
// .then is for resolve (result) 
// .catch is for reject 

//  const  getPromise = () => {
//    return new Promise ((res, rej) =>{
//     console.log("I am a programmer learning promise");
//     //res("1234");
//     //rej("error hai boss")
// });
// };
// let promise = getPromise()
// promise.then(()=>{
//     console.log("promise fullfilled")
// })

// promise.catch(()=>{
//     console.log("promise fullfill nahi ho paya")
// })  



// function asyncfunc_01 () {
//     return new Promise ((resolve, reject) =>{
//         setTimeout(()=>{
//         console.log("the data is fuck off")
//         resolve ("success")
//      }, 4000)
//     })
// }
// function asyncfunc_02 () {
//     return new Promise ((resolve, reject) =>{
//         setTimeout(()=>{
//         console.log("the data is sorry but yes fuck off")
//         resolve ("again success")
//      }, 4000)
//     })
// }

// console.log("fetching data kindly wait....")
//  asyncfunc_01().then((resolve) => {
//     console.log(resolve)
//     console.log("fetching data kindly wait...");
//     asyncfunc_02().then((resolve) => {
//         console.log(resolve)
//     });
//  });
 


//without using getnxtData like before in top


 function getData (dataID) {
    return new Promise((resolve, reject) =>{
    setTimeout(()=>{ 
         console.log("data:", dataID)
         resolve ("success");}, 2000);
});
}

// console.log("wait loading...");
//  getData(11).then((resolve)=>{
//     console.log(resolve)
//     console.log("wait loading...");
//     getData(22).then(() => {
//         console.log(resolve)
//         console.log("wait loading...");
//         getData(33).then(() => {
//             console.log(resolve)
//         })
//     })
//  })

 //OR


 getData(11)
     .then((resolve)=>{
        console.log(resolve)
        console.log("wait loading...");
        return getData(22);
     }).then((resolve) => {
                console.log(resolve)
                console.log("wait loading...");
                return getData(33);
     }).then((resolve) => {
                console.log(resolve)
                console.log("the end");
                
     })