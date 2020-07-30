const { read } = require('fs');

const {readFile} = require('fs').promises;

async function main(){
    const data = await readFile(__filename);
    console.log('File Data is', data);
}

main();
console.log('TEST');