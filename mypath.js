
const path = require('path')


// // возвращает имя файла 
// console.log(path.basename(__filename))

// // возвращает абсолютный путь
// console.log(path.dirname(__filename))

// // возвращает расширение
// console.log(path.extname(__filename))

// __filename — это глобальная переменная 
// в Node.js, которая содержит полный путь к текущему исполняемому файлу. Она предоставляет информацию о том, где находится файл, который в данный момент выполняется.
// console.log(__filename);

// console.log(__dirname);

// console.log(path.parse(__filename))

// генерирует путь указываем путь и его генерируем просто склеиваем пути
console.log(path.join(__filename,'test', 'myfile.txt'))

// генерирует путь указываем путь и его  относительный пуь где мы указываем /
console.log(path.resolve(__dirname,'./test', 'myfile.txt'))
