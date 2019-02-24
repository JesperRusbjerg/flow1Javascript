const fetch = require('node-fetch')

const url = "https://swapi.co/api/people/1223312"

fetch(url).then(function (res) {
    console.log(res.ok, res.status)
    if (res.status !== 200) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json()
})
    .then(function (data) {
        console.log("OK", data)
    })
    .catch(function (err) {
        if (err.status) {
            err.fullError.then((msg) => {
                console.log("UPS", msg)
            })
        } else {
            console.log("ERR", err)
        }
    })
    .finally(() => console.log('We finally got here'))


