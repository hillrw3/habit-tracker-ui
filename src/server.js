const path = require('path')
const express = require('express')
const port = (process.env.PORT || 8080)

function server() {
    const app = express()
    const indexPath = path.join(__dirname, './index.html')

    const publicPath = express.static(path.join(__dirname, '../public'))
    app.use('/public', publicPath)

    app.get('/', function (_, res) { res.sendFile(indexPath) })
    return app

}
const app = server()

app.listen(port)
console.log(`Listening at http://localhost:${port}`)