const ent = require('ent')

exports.start = (session, io) => {
    io.on('connection', function(socket){
        socket.on('send-message', function (_message) {
            // Encode le message et le pseudo
            _message.message = ent.encode(_message.message)
            _message.pseudo  = ent.encode(_message.pseudo)

            socket.broadcast.emit(
                'receive-message', _message
            );
            
        });
    });
}