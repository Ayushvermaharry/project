module.exports = {
    server: {
        port: process.env.PORT || 5000,
        secret: process.env.JWT_SECRET || 'Secret@420'
    },
    db: {
        uri: process.env.MONGODB_URI || 'mongodb+srv://rahulsingh897698:bzV58sOnsOiAZxUR@cluster0.3dnkyjj.mongodb.net/?retryWrites=true&w=majority'
    }
};
