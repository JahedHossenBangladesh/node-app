// const EventEmitter = require('events');
// const emitter = new EventEmitter;

// emitter.on('messageLogged',function(){
//     console.log('Listener called')
// })


// emitter.emit('messageLogged')






const EventEmitter= require('events');
const emitter = new EventEmitter();

emitter.on('message',function(){
    console.log('HI, I am Jahed Hossen')
})

emitter.emit('message');














