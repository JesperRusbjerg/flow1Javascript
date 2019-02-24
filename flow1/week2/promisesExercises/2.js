const fetch = require("node-fetch");

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
    return new Promise(function (resolve, reject) {
        var char = {}

        fetch('https://swapi.co/api/people/1/')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                char.name = data.name
                fetch('https://swapi.co/api/films/2/')
                    .then((res) => {
                        return res.json()
                    })
                    .then((data) => {
                        char.firstmovie = data.title
                        fetch('https://swapi.co/api/species/6/')
                            .then((res) => {
                                return res.json()
                            })
                            .then((data) => {
                                char.firstspecies = data.name
                                fetch('https://swapi.co/api/planets/28/')
                                    .then((res) => {
                                        return res.json()
                                    })
                                    .then((data) => {
                                        char.homeoffirstspicies = data.name
                                        resolve(char)
                                    })
                            })
                    })
            })

    })



}


getPlanetforFirstSpeciesInFirstMovieForPerson(1).then((data) => {
    console.log(data)
})