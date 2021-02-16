const salon = {
    name: "The Fashion Pet",
    address: {
        street: "Av. University",
        number: "192-k"
    },
    hours: {
        open: "8:00 am",
        close: "5:00 pm"
    },
    pets: []
    // [
    //     {name:"Scooby",age:50,breed:"Dane",gender:"Male",owner:"Shaggy",phone:"555-555-5555"},
    //     {name:"scrapy",age:40,breed:"Dane",gender:"Male",owner:"Shaggy",phone:"555-555-5555"},
    //     {name:"Speedy",age:60,breed:"Mixed",gender:"Male",owner:"Bugs",phone:"444-444-4444"},
    //     {name:"Snoopy",age:47,breed:"Beagle",gender:"Male",owner:"Charlie Brown",phone:"123-123-1234"},
    //     {name:"Pluto",age:50,breed:"Bloodhound",gender:"Male",owner:"Mickey Mouse",phone:"321-321-4321"}
    // ]
}
function displayInfo() {
    /*
        name, age, breed, gender, service, owners name, contact phone
    */
    document.getElementById("footer-text").innerHTML = `
<p class="text-center"> ${salon.name} </p>
<p class="text-center"> ${salon.address.street}, ${salon.address.number} </p>
<p class="text-center"> It opens from ${salon.hours.open} to ${salon.hours.close}</p>
`;
}
displayInfo();