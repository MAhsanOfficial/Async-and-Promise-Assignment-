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
// // // // Write a function fetchWithError that returns a Promise. It should randomly either
// // // resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// // // delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
fetchWithError()
    .then(message => {
    console.log(message);
})
    .catch(error => {
    console.error(error);
});
export {};
// function fetchWithError(){
//     return new Promise((resolve:any,reject:any)=>{
//         setTimeout(() => {
//             resolve("Data fetched successfully!")
//             reject("Data fetch failed!")
//         }, 1000);
//     })
// }
// fetchWithError().catch((rej:any)=>{
//       console.log(rej);
// })
