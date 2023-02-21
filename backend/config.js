module.exports = {
    server: {
        port: process.env.PORT || 5000,
        secret: process.env.JWT_SECRET || 'Secret@420'
    },
    db: {
        uri: process.env.MONGODB_URI || 'mongodb+srv://FoxCoder:p7NKVoHglougtUVl@cluster0.ostcrbo.mongodb.net/?retryWrites=true&w=majority'
    }
};
