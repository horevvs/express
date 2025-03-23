import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT ?? 3000


// как не делают
// app.get('/', (req, res) => {
//     res.send('<h1>Привет Вован <h1>')
// })


// читаем с файла 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})





app.listen(3000, () => {
    console.log(`Сервер работает'${PORT}`)
})