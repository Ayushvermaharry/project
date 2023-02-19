module.exports = {
    server: {
        port: process.env.PORT || 5000,
        secret: process.env.JWT_SECRET || 'Kismat@420'
    },
    db: {
        uri: process.env.MONGODB_URI || 'mongodb+srv://ayushvermaharry:Nrn8sdvssFHmP98Q@cluster0.s0p2pdu.mongodb.net/?retryWrites=true&w=majority'
    }
};
