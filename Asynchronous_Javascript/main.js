// // Promises
// const order=(avilable)=>{
//     return new Promise((resolve, reject) => {
//         if(avilable){
//             resolve("Groceries deliverd");
//         }
//         else{
//             reject("Out of stocks");
//         }
//     });
// }
// order(false)
// .then((message) => {
//     console.log(message);
// })
// .catch((error) => {
//     console.error(error);
// });

// // Async
// const fetchData=async()=>{
//     try{
//         const reponse=await fetch("https://emampel.com");
//         const data = await reponse.json();
//         console.log("weather data:", data);
//     }
//     catch(erro){
//         console.log("Error fetching data:", error);
//     }
// };
// fetchData();


// const nam= "Miriam";
// const greeting = `hello, my name is ${nam}`;
// console.log(greeting);

// function makeGreeting(nam){
//     return `helle, my name is ${nam}`;
// }
// const name = "Mariam";
// const greeting = makeGreeting(nam);
// console.log(greeting);

const MAX_PRIME = 1000000;
function isPrime(n){
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false
        }
    }
}

const random = (max) => Math.floor(Math.random() * max);
function generatePrimes(quota){
    const primes = [];
    while(primes.length < quota){
        const canditate = random(MAX_PRIME);
        if(isPrime(canditate)){
            primes.push(canditate);
        }
    }
    return primes;
}
const quota = document.querySelector("#quota");
const output = document.querySelector("#output");
document.querySelector("#generate").addEventListener("click", ()=>{
    const primes = generatePrimes(quota.value);
    output.textContent = `Finished generating ${quota.value} primes!`;
});
document.querySelector("#reload").addEventListener("click", ()=>{
    document.location.reload();
})

const log = document.querySelector(".event-log");
document.querySelector("#xhr").addEventListener("click", ()=>{
    log.textContent = "";
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("loadend", ()=>{
        log.textContent = `${log.textContent} finished with status: ${xhr.status}`;
    });
    xhr.open(
        "GET",
        "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",

    );
    xhr.send();
    log.textContent = `${log.textContent} started HXR request/n`;
    
});

document.querySelector("#reload").addEventListener("click", ()=>{
    log.textContent = "";
    document.location.reload();
});