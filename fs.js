
const path = require('path')
const fs = require('fs')


// // создаем файл
// fs.mkdir(path.join(__dirname, 'notes2'), err => {
//     if (err) throw new Error(err)
//     console.log('папка создана')
// })

// // fs.mkdir('parent-directory/child-directory', { recursive: true }, (err) => {
// //     if (err) {
// //       return console.error('Ошибка при создании директорий:', err);
// //     }
// //     console.log('Вложенные директории созданы успешно!');
// //   });

// // в файле пишем информацию
// fs.writeFile(path.join(__dirname, 'notes2', 'mynotes.txt'), 'helloworld', err => {
//     if (err) throw new Error(err)
//     console.log('папка создана')
// })


// ktn

fs.appendFile(path.join(__dirname, 'notes2', 'mynotes.txt'),'new data', err => {
    if (err) throw new Error(err)
    console.log('  папка создана2')
}  )