function solve(strArr,criteria) {

    class Ticket {
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for(let dataRow of strArr){
        let [destination,price,status] = dataRow.split('|');
        price = Number(price);
        let ticket = new Ticket(destination,price,status);
        result.push(ticket)
    }


  return  result.sort((a,b) => a[criteria] > b[criteria])
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));