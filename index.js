/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function() {
  this.isFlying = true;
};
Airplane.prototype.land = function() {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
//created a function "Person" and gave name and age as arguments
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = []; // empty array
}

//prototype method called eat is a function that takes in "someFood"
Person.prototype.eat = function(someFood) {
//if statement - if the length of stomach's array is less than 10
  if (this.stomach.length < 10 ) {
    //then return "add" food to the stomach array
    return this.stomach.push(someFood);
  } 
};

//prototype method called poop is a function that takes in no arguments
Person.prototype.poop = function() {
  //return an empty stomach array or original value ([])
  return this.stomach = [];
};

//prototype method toString (return a string) is a function that takes in no arguments
Person.prototype.toString = function() {
//return a string containing name and age
  return `${this.name}, ${this.age}`;
};

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
//function named car taking in model and milesPerGallon as arguments and assigning tank and odometer a default of zero.
function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

//prototype method fill is  a function that takes in gallons as an argument 
Car.prototype.fill = function(gallons) {

  //appends gallons to tank (add)
  return this.tank += gallons;
}

//prototype method drive is a function that takes in distance as an argument
Car.prototype.drive = function(distance) {
  //if distance divided by milesPerGallon is greater than or equal to tank
  if (distance / this.milesPerGallon >= this.tank ) {
    //append tank (or add) multiply milesPerGallon to odometer
    this.odometer += this.tank * this.milesPerGallon;
    //return tank to zero
    this.tank = 0;
    //return string
    return `I ran out of fuel at ${this.odometer}`
  }
  //append (add) distance to odometer (store it on odometer)
  this.odometer += distance;
  //append distance and divide milesPerGallon on tank (store it here)
  this.tank -= distance / this.milesPerGallon;
};

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
//function named baby takes in name, age and favoriteToy as arguments.
function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
this.favoriteToy = favoriteToy;
//get Person on prototype and return this, name and age from
Person.call(this, name, age);
}
//add baby prototype to person prototype 
Baby.prototype = Object.create(Person.prototype);
////prototype method called pay is a function that has no arguments
Baby.prototype.play = function() {
  //returns string
  return `Playing with ${this.favoriteToy}`;
}








/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. global scope functions that appear on screen/window
  2. after the dot is what is being reference. before the dot object.
  3. dynamic - creating new instance referencing specific obj instance using new keyword
  4. explicit binding - this is binding referenced object and returning the arguments
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
