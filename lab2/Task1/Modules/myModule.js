class passenger{
    allTickets = []
    display() {
        for (let i = 0; i < this.allTickets.length; i++)
        {
            console.log(this.allTickets[i].get());
            console.log("\n");
        }
    }
}

class flightTicket{
    seatNum;
    flightNum;
    departureAirport;
    arrivalAirport;
    travellingDate;
    user;
    
    constructor(user) {
        user.allTickets.push(this);
        this.user = user
    }

    get() {
        return(`Your seat number: ${this.seatNum}
        \nYour flight number:${this.flightNum}
        \nYour departure airport:${this.departureAirport}
        \nYour arrival airport:${this.arrivalAirport}
        \nYour travelling date:${this.travellingDate}\n\n`)
    }
    // display() {
    //     for (let i = 0; i < this.user.allTickets.length; i++)
    //     {
    //         console.log(this.user.allTickets[i].get());
    //         console.log("\n");
    //     }
    // }
    update(seatNum, flightNum, departureAirport, arrivalAirport, travellingDate) {
        const upTickett = this.user.allTickets.find(t=>t.seatNum == this.seatNum);
        upTickett.seatNum = seatNum;
        upTickett.flightNum = flightNum;
        upTickett.departureAirport = departureAirport;
        upTickett.arrivalAirport = arrivalAirport;
        upTickett.travellingDate = travellingDate;
    }
}

module.exports = {
    flightTicket, passenger
}
