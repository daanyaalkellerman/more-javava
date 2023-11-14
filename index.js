//objects
//key and value
//key  = property (something about an object)
//objects set to a variable have to use braces{}
//object literals / declaration
let car = {
    name : 'Toyota',
    type : 'sprint',
    engineSize : '1.5 litre'
}

//new keyword

// let person = new Object
// person.name = 'Matthew'
// person.lastName = 'Brown'
// person.age = 23
// person.favFood = 'anything'
// //only use if youre working with others
// delete person.favFood

//object.create

// let blank = {
//     name: null,
//     surname: null,
//     age: null
// }

// let newBlank = Object.create(blank)
// newBlank.name = 'matthew'

//delete - use only on objects

//nested objects

const desktop = {
    cpu: 'Ryzen 5',
    ram: '8 gigs',
    hard_drive: {
        first: '1000gigs',
        second: '500gigs'
    }
}
// desktop.hard_drive.first to access the first object within the object

//nested objects in arrays

const myObj = {
    name: 'John',
    age: 60,
    cars: [
        {
            name:'Ford',
            models: ['fiesta','focus','mustang']
        },
        {
            name:'BMW',
            models:['320','X3','X5']
        },
        {
            name: 'Fiat',
            models:['500','Panda']
        }
    ]
}

//object method - function inside the object
//function inside of an object is a method
// const person = {
//     firstName: 'Johna',
//     lastName: 'doee',
//     id: 445,
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };
//this is a keyword in javascript that tells your function that you want to use this first name this last name (global scoping) (only works within objects)

//will print info to the page

const person = {
    firstName: 'Johna',
    lastName: 'doee',
    id: 445,
    fullName: function(){
        return (this.firstName + " " + this.lastName)
        .toUpperCase();
    }
};
document.querySelector('h1').innerText = person.fullName();

//for in loop
//have to use object expression where p is used as index with [], square brackets
// for (let p in person){
//     console.log(person[p])
// }

//nested loop to access information in the cars

for(i in myObj.cars){
    console.log(myObj.cars[i].name)
    for(x in myObj.cars[i].models){
        console.log(myObj.cars[i].models[x]);
    }
}

//factory function object RETURN an object

function createPerson(firstName, lastName, age){
    let myObjeje={
         firstName: firstName,
        lastName: lastName,
        age: age,
       
    }
    return myObjeje
    //still works both ways
    // return {
    //     firstName: firstName,
    //     lastName: lastName,
    //     age: age,
    // }
}
// function createPerson(){
//     let myObjeje={
//          firstName: 'namename',
//         lastName: 'surname',
//         age: 21,
       
//     }
//     return myObjeje

//you dont need the [new] keyword

let person4 =createPerson('danny','idk',32)
let personActions= {
    getfullName(){
        return this.firstName + ''+this.lastName
    }
}
let person3 =createPerson('matthew', 'brown', 23,personActions.getfullName())
// [this] is a constructer function 


function carDescription(brand,year,model,colour){
    this.brand = brand
    this.year = year;
    this.model = model;
    this.colour = colour;
}

let car1= new carDescription('porsche','GT3',2013,'white')

