// 5 arguments
// considers each file as a function wrapped
// function(exports, module, require, __filename, __dirname){
//     file code
// return module.exports by default
// }

console.log(arguments);



function myArguments(){
    
    console.log(arguments);
}

myArguments(1,2,3);

