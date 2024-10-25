import next from 'next'
import * as dotenv from 'dotenv'
import {createServer} from 'http'
import {Server} from 'socket.io'

dotenv.config({path: '.env' })

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

const app = next({dev, hostname, port})
const handler = app.getRequestHandler()

app.prepare().then(() => {
    const httpServer = createServer(handler)
    const io = new Server(httpServer)

    io.on('connection', (socket) => {

        socket.on('editUser', (message) => {
            socket.broadcast.emit('editUser', message)
        })
    })

    httpServer.once('error', (err) => {
        console.log(err)
        process.exit(1)
    })
        .listen(port, () => {
            console.log(`Server started on http://${hostname}:${port}`)
        })
})