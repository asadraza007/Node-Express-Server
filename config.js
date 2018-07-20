// if serverURL is empty it will serve as a system IP
module.exports = {
    development: {
        mongoUrl: "mongodb://127.0.0.1:27017/learningDB",
        serverUrl: "", // system IP or 127.0.0.1
        serverPort: 1234,
    },
    production: {
        mongoUrl: "mongodb://127.0.0.1:27017/epeople",
        serverUrl: "",
        serverPort: 3002,
    },
}