// streams are event emitter
const EventEmitter = require('events');

// creating object
const myEmitter = new EventEmitter();

// emitting
myEmitter.emit('TEST_EVENT');
setImmediate(() => {
    myEmitter.emit('TEST_EVENT');
});

// subscribing
myEmitter.on('TEST_EVENT', () =>{
    console.log('TEST_EVENT was fired')
});
myEmitter.on('TEST_EVENT', () =>{
    console.log('I can subscribe different callbacks')
});
myEmitter.on('TEST_EVENT', () =>{
    console.log('TEST_EVENT was fired')
});

// at this point nothing will print as emitted before subscribed

// so emitting again but this time it will print

myEmitter.emit('TEST_EVENT');

// or we can make the emit at line 8 to emit after the code see line 9