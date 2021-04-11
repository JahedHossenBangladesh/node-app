// function sayHello(name){
//     console.log("hi" +name)
// }
// // sayHello(" Jahed")
const log = require ("./logger.js")



// console.log(log);

const EventEmitter = require('events');
const emitter = new EventEmitter;

emitter.on('messageLogged',function(arg){
    console.log('listener called',arg);
})

emitter.emit('messageLogged',{id:1,url:'http://'})
emitter.emit("messageLogged", { log });