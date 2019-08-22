var events = require('events').EventEmitter;
var emitter = new events.EventEmitter();

emitter.on('newEvent', printMessage)

emitter.on('newEvent', logUsername)

function logUsername(user){
  console.log(`Print the user name on event ${user}`);
}

function printMessage(){
  console.log('Looks like you can subscribe to the same event');
}

emitter.emit('newEvent', "AJ");