// let vs var
// {
//      block space
// }


for(var i=0; i<10; i++){
}
console.log(i);

for(let j=0; j<10; j++){
}
console.log(j);


function sum(a,b){
    var result = a+b;
}

sum(2,3);
console.log(result);

const arr=42;
arr=41;

const number=[1,2,3];
number[0]=4;
console.log(number);