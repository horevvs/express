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
//  res.sendFile(path.resolve(__dirname, 'static', 'index.html')) отправляем с помощью данного метода статические файлы

app.use((req, res, next) => {
    console.log('Запрос получен:', req.url);
    next(); // Передаем управление следующему middleware
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

// app.use("/about", function (_, response) {
//     response.redirect("contact")
// });

app.use("/info", function (_, res) {
    res.sendFile(path.resolve(__dirname, 'static', 'about.html'))
});

app.get("/products/:productId", function (request, response) {
    response.send("productId: " + request.params.productId)
  });

// app.use("/info/:id", function (_, res) {
//     res.send("productId: " + res.params["id"])
//     // console.log(req.params.id)
//     // res.send()
//     // res.sendFile(path.resolve(__dirname, 'static', 'about.html'))
// });

// app.use("/info/:id", function (_, res) {
//     if(pr)

//     res.sendFile(path.resolve(__dirname, 'static', 'about.html'))
// });



app.get('/home', (req, res) => {
    res.send({ id: 6, name: "Tom" })
})

// app.use("/home/foo/bar", function (_, response) {
//     response.sendStatus(404)
// });

// app.use("/contact", function (_, response) {
//     response.redirect("https://tpu.ru")
// });

// app.use("/contact2", function (_, response) {
//     response.redirect("https://tpu.ru")
// });

// https://metanit.com/web/nodejs/4.13.php



app.listen(3000, () => {
    console.log(`Сервер работает'${PORT}`)
})