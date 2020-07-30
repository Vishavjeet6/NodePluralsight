const func = t => {
    console.log(`Hello after ${t} seconds`);
}


setTimeout(func, 4*1000,4);
setTimeout(func, 8*1000,8);

let counter = 0;
const func2 = setInterval(() => {
    console.log("Hello world");
    counter++;

    if(counter === 5){
        console.log("Done");
        clearInterval(func2);
    }
},1000)