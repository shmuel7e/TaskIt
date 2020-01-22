
module.exports = connectSockets

function connectSockets(io) {
    console.log('initial connection')
    io.on('connection', socket => {
        socket.on('chat newMsg', msg => {
            // io.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            io.to(socket.myTopic).emit('chat addMsg', msg)
        })
        socket.on('chat topic', topic => {
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            socket.myTopic = topic;
        })
        socket.on('user joined the board', userMessage => {
            console.log('socket routs', userMessage);
            io.emit('new user joined the board', userMessage);
        })
        socket.on('user added task', data => {
            console.log(data);
            io.emit('when added task');
        })
        socket.on('user deleted topic', data => {
            console.log(data);
            io.emit('when deleted topic');
        })
        socket.on('user changed topic title', data => {
            console.log(data);
            io.emit('when title changed');
        })
        socket.on('user added new topic', data => {
            console.log(data);
            io.emit('when topic added');
        })
        socket.on('user changed cover', data => {
            console.log(data);
            io.emit('when cover changed');
        })
        socket.on('user changed bgColor', data => {
            console.log(data);
            io.emit('when bgColor changed');
        })
    })
}

