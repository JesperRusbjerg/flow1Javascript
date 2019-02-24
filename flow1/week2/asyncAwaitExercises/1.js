const fetch = require('node-fetch');

const URL = "https://swapi.co/api/people/";

async function fetchPerson(url) {
    const res = await fetch(url)
    return res.json()

}
async function printNames() {
    console.log("Before");
    const person1 = await fetchPerson(URL + 1);
    const person2 = await fetchPerson(URL + 2);
    console.log(person1.name);
    console.log(person2.name)
    console.log("After all");
}

printNames()


async function fetchPersons(url) {
    return new Promise(async function (resolve, reject) {
        const res = await fetch(url)
        const person = await res.json()
        resolve(person.name)
    })
}

const URL1 = "https://swapi.co/api/people/1";
const URL2 = "https://swapi.co/api/people/2";
const URL3 = "https://swapi.co/api/people/3";
const URL4 = "https://swapi.co/api/people/4";

const person1 = fetchPersons(URL1)
const person2 = fetchPersons(URL2)
const person3 = fetchPersons(URL3)
const person4 = fetchPersons(URL4)


Promise.all([person1, person2, person3, person4]).then((data) => {
    console.log(data)
})


async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
    return new Promise(async function (resolve, reject) {
    var char = {}

    const resName = await fetch('https://swapi.co/api/people/' + id)
    
    if(resName.status != 200){
        const json = await resName.json()
        reject(json)
        return;
    }

    const person = await resName.json()
    char.name = person.name


    const resFirstMovie = await fetch(person.films[0])
    const firstmovie = await resFirstMovie.json()
    char.firstmovie = firstmovie.title

    const resFirstSpieces = await fetch(firstmovie.species[0])
    const firstSpieces = await resFirstSpieces.json()
    char.firstspecies = firstSpieces.name

    const resHomeOfFirst = await fetch(firstSpieces.homeworld)
    const HomeOfFirst = await resHomeOfFirst.json()
    char.homeoffirstspicies = HomeOfFirst.name
        resolve(char)
    })  

  
}

async function tryCatch(){
    try {
    const data = await getPlanetforFirstSpeciesInFirstMovieForPersonAsync(9000)
        console.log(data)
    } catch (e) {
    console.log(e)
    }
}

tryCatch()
