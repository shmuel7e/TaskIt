
module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on('chat topic', topic => {
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            socket.myTopic = topic;
            
        })
        
        socket.on('user joined the board', userMessage => {
            io.to(socket.myTopic).emit('new user joined the board', userMessage);
        })
        socket.on('user changes', data => {
           // console.log(data)
            io.to(socket.myTopic).emit('user changes',data);
        })
        socket.on('user changes', data => {
            console.log(data)
            io.in(socket.myTopic).emit('user changes',data);
        })

    })
}

