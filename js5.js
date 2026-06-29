const http = require('http');
const server = http.createServer(function (req , res) {
    res.end("");

});
server.listen(3000);
console.log("to check open http://localhost:3000/");