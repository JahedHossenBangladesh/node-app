const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger()



logger.on('messageLogged',(arg) => {
    console.log('listener called',arg);
})

logger.log('message')













// function sayHello(name){
//     console.log("hi" +name)
// }
// // sayHello(" Jahed")
// const log = require ("./logger.js")



// console.log(log);
