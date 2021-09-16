var socketio = {}
var socket_io = require('socket.io')

socketio.getSocketio = (server) => {
    var io = socket_io(server)

    io.sockets.on('connection', (socket) => {
        io.emit('message', 'welcome')
        
        socket.on('message', (msg) => {
            console.log(msg)
            io.emit('message', `echo:` + msg)
        })
    })
}

module.exports = socketio