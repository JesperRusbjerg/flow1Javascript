var http = require('http')
const fetch = require("node-fetch");

function combineBooks() {
    books = []
    return new Promise(function (resolve, reject) {

        fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                books.push(data)
                fetch('https://jsonplaceholder.typicode.com/photos?albumId=3')
                    .then((res) => {
                        return res.json()
                    })
                    .then((data) => {
                        books.push(data)
                        fetch('https://jsonplaceholder.typicode.com/photos?albumId=5')
                            .then((res) => {
                                return res.json()
                            })
                            .then((data) => {
                                books.push(data)
                                fetch('https://jsonplaceholder.typicode.com/photos?albumId=7')
                                    .then((res) => {
                                        return res.json()
                                    })
                                    .then((data) => {
                                        books.push(data)
                                        fetch('https://jsonplaceholder.typicode.com/photos?albumId=9')
                                            .then((res) => {
                                                return res.json()
                                            })
                                            .then((data) => {
                                                books.push(data)
                                                resolve(books)
                                            })
                                    })
                            })
                    })
            })

    })
}

function httpServerBooks() {
    const express = require('express')
    const app = express()

    app.get('/api/albumthreewords', function (req, res) {
        // res.header('Access-Control-Allow-Origin', '*');
        
        var editedBooks = []
        combineBooks()
            .then((data) => {
                data.forEach(element => {
                    var newArray = element.filter((e) => {
                        var split = e.title.split(" ")
                        return split.length === 3
                    })
                    editedBooks.push(newArray)

                });
                res.end(JSON.stringify(editedBooks))
            })
    });

    app.get('/api/albumthreewords/:words', function(req, res){
        var number = Number(req.params.words)
        var editedBooks = []
        combineBooks()
            .then((data) => {
                data.forEach(element => {
                    var newArray = element.filter((e) => {
                        var split = e.title.split(" ")
                        return split.length === number
                    })
                    editedBooks.push(newArray)

                });
                res.end(JSON.stringify(editedBooks))
            })
         
    })


    app.listen(8001,() => console.log("Express start on port 8001"))
}


httpServerBooks()
module.exports = { httpServerBooks }










var server = http.createServer(async function (req, res) {

    if (req.url === '/api/albumthreewords') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        var editedBooks = []
        combineBooks()
            .then((data) => {
                data.forEach(element => {
                    var newArray = element.filter((e) => {
                        var split = e.title.split(" ")
                        return split.length === 3
                    })
                    editedBooks.push(newArray)

                });
                res.end(JSON.stringify(editedBooks))
            })
    }

    if (req.url === 'api/albums/{words}') {
        console.log(req.params)


    }
})
server.listen(8000)