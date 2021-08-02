const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: "*"
  }
});

//we have to use mongo db adapter for the purpose of saving the chats
//which will pull the information from the socket and save that on db


//1. we are making the connection ready so that somebody can connect to our application
//2. once the connection is ready we are making a separate event known as chat
//3. on chat event who ever is listening  we are 

io.on('connection', (socket) => {

   console.log("what is socket", socket);
   console.log("socket is active to be connected");

   //listening to certain events so that we can pass out certain events with that
   socket.on('chat', (payload) => {
      console.log("what is payload", payload);
      //we recieve the event and broadcast
      io.emit("chat", payload)
   })
})

//sever is coming from create server and every thing is injected to the io
//you have to listen to some other port on the main port

server.listen(5000, () => {
  console.log("server is running")
});
