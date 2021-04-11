const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged',(arg) => {
    console.log('listener called',arg);
})
const log = require('./logger');
log('messsage')























// function sayHello(name){
//     console.log("hi" +name)
// }
// // sayHello(" Jahed")
// const log = require ("./logger.js")



// console.log(log);
