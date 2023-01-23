const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

const port = 3000;

io.on('connection', (socket) => {
  console.log('user connect')
  socket.on('join', (data) => {
    console.log('data',data)
    const roomName = data.roomName;
    socket.join(roomName);
    //socket.emit('new-user', data);
    socket.to(roomName).emit('new-user', data)

    socket.on('disconnect', () => {
      console.log(data)
      //socket.emit('bye-user', data);
      socket.to(roomName).emit('bye-user', data)
    })
  })
})


server.listen(port, () => {
  console.log(`Server running port ${port}`)
});
