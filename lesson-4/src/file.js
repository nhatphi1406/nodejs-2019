import fs from 'fs'

// convert a callback function to promise 
const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if(err) return reject(err)
      else return resolve(data)
    })
  })
}

export {
  readFile
}