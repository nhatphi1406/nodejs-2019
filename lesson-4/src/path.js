import path from 'path'

const path1 = path.resolve('src', 'src/','../user.json')
console.log('path1: ', path1)
console.log('__dirname: ', __dirname)
const path2 = path.join(__dirname, '../index.js')
console.log('path2: ',path2)

