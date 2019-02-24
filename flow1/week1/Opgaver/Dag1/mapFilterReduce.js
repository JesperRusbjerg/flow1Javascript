Array.prototype.myFilter = function(callback){
    var filtered = []
    this.forEach(element => {
        if (callback(element)) {
            filtered.push(element)
        }
    });
    return filtered;
}

Array.prototype.myMap = function(callback){
    var newArr = []
    this.forEach(element => {
        newArr.push(callback(element))
    });
    return newArr;
}

var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']

const namesUpper = names.map((e) => {
    return e.toUpperCase();
})
console.log('Names Upper Case')
console.log(namesUpper)



function filterCallback(e) {
    if (e == 'Lars') {
        return false
    }
    return true
}

console.log('My Filter')
console.log(names.myFilter(filterCallback))


// Map and filter are very similar? its the callback that makes the diffrence
function addChar(e) {
    return e + 'a'
}

console.log('My Map')
console.log(names.myMap(addChar))


console.log('join example')
var all= ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join('-'))

console.log('Reduce')
var numbers = [2, 3, 67, 33]; 
console.log(numbers.reduce((a, e) =>{
    return a + e
}))

console.log('Reduce members array')
let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]

   var membersAvgAge = members.reduce((a, e, i, arr) =>{
        if(i == arr.length-1){
            return (a + e.age) / arr.length
        }
       return a + e.age
   }, 0)

   console.log(membersAvgAge)

   var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];
  
   var votesDone = votes.reduce((a, e) =>{     
    if(!a[e]){
      a[e] = 1
    }else{
        a[e] += 1
    }
    return a
   },{} )

console.log(votesDone)

const personObject = {
    name: 'Jesper',
    birthday: '11-08-96',
    phone: 22464462,
    happy: 'always happy'
    
}


console.log(personObject.hasOwnProperty('name'))
delete personObject['name']
console.log(personObject.hasOwnProperty('name'))

for(var value in personObject){
    console.log(personObject[value])
}

function CreatePerson(fname, lname, age){
   this.firstname = fname
   this.lastname = lname
   this.myage = age

}

var person = new CreatePerson("peter", "petersen", 22)

console.log(person.firstname)

var makePerson = () =>{
    var person = {
        name: "Per",
        age: 37
    }
    return{
        getInfo: () => {console.log(person.name, person.age)},
        setName: (newName) => {person.name = newName},
        setAge: (newAge) => {person.age = newAge}
    }
}

var person2 = makePerson()
person2.getInfo()
person2.setName("Kurt")
person2.getInfo()