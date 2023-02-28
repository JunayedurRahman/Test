//   function Vehicle(a, tireCount, capacity, registrationNumber) {
//   this.type = a;
//   this.b = tireCount;
//   this.capacity = capacity;
//   this.isMoving = false;
//   this.registrationNumber = registrationNumber;
//   this.speed = 0;

//   this.accelerate = function () {
//     this.speed = this.speed + 10;
//     this.isMoving = true;
//   };
// }

// let vehicle1 = new Vehicle("truck", 6, "5 tons", "ABC123");
// let vehicle2 = new Vehicle("truck", 6, "15 tons", "DEF456");
// let vehicle3 = new Vehicle("truck", 6, "25 tons", "GHI789");
// let vehicle4 = new Vehicle("truck", 6, "35 tons", "JKL012");



// console.log(vehicle1);
// console.log(vehicle2);

// vehicle1.accelerate();
// console.log(vehicle1.speed);

// vehicle1.accelerate();
// console.log(vehicle1.speed);

// let thisIsAnObject = {
//   name: "John",
//   someOtherProperty: 6,
//   yetAnotherProperty: false,
//  // someProperty: {
//    // name: "Jane"
//  // },
//   someOperation: function() {
   
//     console.log( "Hello, " + this.name);
//   }
  
// };
// thisIsAnObject.someOperation();

interface Vehicle {
  type: string,
  tireCount: number,
  capacity: string,
}

let vehicle: Vehicle = {
  type: "truck",
  tireCount: 6,
  capacity: "5 tons",
};

let unicycle: Vehicle = {
  type: "unicycle",
  tireCount: 1,
  capacity: "1 person + backbag",
};
