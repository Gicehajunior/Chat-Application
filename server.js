// instantiating the socket obeject
const io = require ('socket.io')(3000)

const Users = {}

io.on('connection', socket => {
    socket.on('New-User', username => {
        Users[socket.id] = username
        socket.broadcast.emit('User-Connected', username)
    })

    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', {
            message: message,
            username: Users[socket.id]
        })
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('User-Disconnected', Users[socket.id])
        delete Users[socket.id]
    })
})



