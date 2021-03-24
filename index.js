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
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
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
  
function Person(name, age){
  this.name = name;
  this.age = age;
  this.stomach = [];
};

 Person.prototype.eat = function(someFood) {
  if (this.stomach.length < 10){
  this.stomach.push(someFood)};
};

 Person.prototype.poop = function() {
   this.stomach = [];
 };

 Person.prototype.toString = function() {
  return (`${this.name} , ${this.age}`);
 } 
 
const you = new Person("Will", 26);

console.log(you);

you.eat("tacos");
console.log(you.stomach);
  
  
  
  
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
  
 function Car(model, milesPerGallon) {
   this.model = model;
   this.milesPerGallon = milesPerGallon;
   this.tank = 0;
   this.odometer = 0;
  };

  Car.prototype.fill = function(gallons){
    this.tank += gallons;
    console.log(this.tank);
  };

  Car.prototype.drive = function(distance){
    this.odometer += distance;
    this.tank -= (this.distance / this.milesPerGallon)
    if(this.tank === 0){
      console.log(`I ran out of fuel at ${this.odometer} miles!`);
    };
  };

 
  
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
   Person.call(this, name, age);
   this.favoriteToy = favoriteToy;
  };

  Baby.prototype = Object.create(Person.prototype);
  Baby.prototype.play = function() {
    return `Playing with ${this.favoriteToy}`;
  };
 
  
  /* 
    TASK 4
      In your own words explain the four principles for the "this" keyword below:

    1.New
      When new is used while calling a function, uses that function to create a new object where "this" references the new object

    2. Apply, Call, and Bind
      These are used in order to pass an object as an argument through "this", through another object's function 

    3. Function called as a method
      Think of "this" as a variable, that we are passing an object through. When you have "this.name" it is equal to "obj.name"

    4. Free function invocation
      When a function is in the global scope and "this" has nothing to reference it will default to the window object? window?
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}