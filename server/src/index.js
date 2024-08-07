import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer,{
    cors : {
         origin : "https://localhost:3000",
         methods : [ "GET","POST"]
    }
});

io.on("connection", async(socket) => {

})

console.log("Listening to port.....");
httpServer.listen(process.env.PORT || 4000);

