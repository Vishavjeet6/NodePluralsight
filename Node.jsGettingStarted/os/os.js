const os = require('os');

console.log('OS platform:', os.platform());
console.log('OS CPU arch:', os.arch());
console.log('# of logical cpu cores:', os.cpus().length);
console.log('Home directory of current user:', os.homedir());
console.log('line 1' + os.EOL + 'line 2' + os.EOL + 'line 3');