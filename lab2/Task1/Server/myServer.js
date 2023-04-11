let myModule = require("../Modules/myModule");//{} ==> exports
let Ticket = myModule.flightTicket;

let Passenger = myModule.passenger;

pass1 = new Passenger();
pass2 = new Passenger();

let tick1 = new Ticket(pass1);
tick1.flightNum = 1;
tick1.seatNum = 100;
tick1.departureAirport = "Egypt";
tick1.arrivalAirport = "japan";
tick1.travellingDate = "1/1/2021";
console.log("=======================  Ticket 1 ========================");
console.log(tick1.get());

let tick4 = new Ticket(pass1);
tick4.flightNum = 4;
tick4.seatNum = 400;
tick4.departureAirport = "Egypt";
tick4.arrivalAirport = "Mekka";
tick4.travellingDate = "4/4/2024";
console.log("=======================  Ticket 4 ========================");
console.log(tick4.get());

let tick2 = new Ticket(pass2);
tick2.flightNum = 2;
tick2.seatNum = 200;
tick2.departureAirport = "Egypt";
tick2.arrivalAirport = "Mekka";
tick2.travellingDate = "2/2/2022";
console.log("=======================  Ticket 2 ========================");
console.log(tick2.get());

let tick3 = new Ticket(pass2);
tick3.flightNum = 3;
tick3.seatNum = 300;
tick3.departureAirport = "Egypt";
tick3.arrivalAirport = "Mekka";
tick3.travellingDate = "3/3/2023";
console.log("=======================  Ticket 3 ========================");
console.log(tick3.get());


console.log("=======================  Passenger 1 ========================");
pass1.display();
console.log("=============================================\n\n");

tick1.update(500,5,"point1", "point2", "3/1/2021");
console.log("=======================  Passenger 1 after editing ticket1 ========================");
pass1.display();
console.log("=============================================\n\n");
console.log("=======================  Passenger 2 ========================");
pass2.display();