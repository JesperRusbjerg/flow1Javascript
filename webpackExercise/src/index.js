import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'


class Person {
  constructor(fn, ln, s) {
    this.firstName = fn;
    this.lastName = ln;
    this.favoriteSport = s;
  }
 }

 const persons = [
  new Person("Kurt", "Wonnegut","Socker"),
  new Person("Jan", "Peterson","Hockey"),
  new Person("Jane", "Peterson","Skating"),
  new Person("John", "Hansen","Socker"),
]

const cities = [
  {city: "Lyngby",zipCode: "2800"},
  {city: "Hvidovre",zipCode: "2650"},
  {city: "Glostrup",zipCode: "2600"},
 ]
 


// You must implement the makeTable(..) function, used below:
const table = makeTable(cities);
document.getElementById('my-table').innerHTML = table;
 

function makeTable(data){
  
  var keys = Object.keys(data[0]);
  let keysDone = ''
  keys.forEach(element => {
   keysDone += `<th>${(_.startCase(element))}</th>`
  });
  
  let theBody = ''
  data.forEach(element => {
    theBody += `<tr>`
    for(let key in element){
      if(element.hasOwnProperty(key)){
        theBody += `<td>${element[key]}</td>`

      }
    }
    theBody += `</tr>`
  });
  
  let table = `<table class=table><thead>${keysDone}</thead><tbody>${theBody}</tbody></table>`
  
  return table;
}