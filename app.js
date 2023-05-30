const http = require("http")
const {readFile} = require('fs')

const server = http.createServer((req , res) => {

    if(req.url === '/')
    {res.write('Welcome to server')}


    if(req.url === '/about')
    {res.write('this is about us')}


    res.end()
})

server.listen(4000)



// const { readFile } = require('fs');
// const { result } = require('lodash');


// const getFile = (path) => {

//     return new Promise((reject, resolve) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })

//     })

// }


// getFile('./files/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))


