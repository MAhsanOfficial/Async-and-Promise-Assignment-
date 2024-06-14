// // // // // ASSIGNMENT ASYNCHRONOUS AND PROMISSES >>>

// // // // Question # 1
// // // // //  Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout. 

// function fetchGreeting (){
//    return new Promise((res:any,rej:any)=>{
//     setTimeout(() => {
//         res("Hello, World!")
//     }, 2000);
//    })   
// };
// let promiseResult = fetchGreeting();
// promiseResult.then((ans)=>{
//     console.log(ans);
    
// });

 // // // //Question # 2
//  // // Write a function simulateTask that simulates a task by logging "Task started",
// // // waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

// function simulateTask(){
//     console.log("Task Started...");
//     setTimeout(() => {
//         console.log("Task Completed !");
        
//     }, 1000);
    
// }
// simulateTask()
 
// // // //Question # 3
// // // Write a function fetchData that returns a Promise which resolves with the string
// // // "Data fetched successfully!" after a delay of 1 second.

//   function fetchData(){
//       return new Promise((Resolve:any,Reject:any)=>{
//         setTimeout(() => {
//             Resolve("Data fetched successfully !")
//         }, 1000);
//       })
//   }



// // // // Question # 4
// // // // Write a function fetchWithError that returns a Promise. It should randomly either
// // // resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// // // delay of 1 second. Handle the rejection using .catch

// function fetchWithError(){
//     return new Promise((resolve:any, reject:any)=>{
//         setTimeout(() => {
//             if(Math.random() > 0.5){
//                 resolve("Data fetched successfully!")
//             }else{
//                 reject("Data fetch failed!")
//             }
//         }, 1000);
//     })
// }
// fetchWithError()
//     .then(message => {
//         console.log(message);
//     })
//     .catch(error => {
//         console.error(error);
//     });

 // // // // Question # 5
 // // // Write a function executeSequentially that executes two functions fetchData and
// // // processData sequentially using Promises, and logs the results in the order they are called.

// async function executeSequentially(fetchData:any, processData:any) {
//     try {
//       const data = await fetchData();
//       const processedData = await processData(data);
//       console.log("Fetched Data:", data);
//       console.log("Processed Data:", processedData);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
