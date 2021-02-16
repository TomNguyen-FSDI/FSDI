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



for (var i = 0; i < salon.pets.length; i++) {
    console.log(salon.pets[i]);
}


// create the pet class
class Pet {
    constructor(name, age, breed, gender, service, owner, phone) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.owner = owner;
        this.phone = phone;
        this.price = 0;
    }
}

// create pets using the constructor
var scooby = new Pet("Scooby", 50, "Dane", "Male", "full", "Shaggy", "555-555-5555");
var scrapy = new Pet("Scrapy", 40, "Dane", "Male", "shower", "Shaggy", "555-555-5555");
var speedy = new Pet("Speedy", 80, "Mixed", "Male", "nails", "Bunny", "333-333-3333");
console.log(scooby, scrapy, speedy);




var txtName = document.getElementById("petNameTxt");
var txtAge = document.getElementById("petAgeTxt");
var txtBreed = document.getElementById("petBreedTxt");
var txtGender = document.getElementById("petGenderTxt");
var txtService = document.getElementById("petServiceTxt");
var txtOwner = document.getElementById("petOwnerTxt");
var txtPhone = document.getElementById("petPhoneTxt");

function clear() {
    txtName.value = "";
    txtAge.value = "";
    txtBreed.value = "";
    txtGender.value = "";
    txtService.value = "";
    txtOwner.value = "";
    txtPhone.value = "";
}

//create the function register
function register() {
    //get the info from the inputs

    console.log("petNameTxt: " + txtName.value);
    console.log("petAgeTxt: " + txtAge.value);
    console.log(txtBreed.value);
    console.log(txtGender.value);
    console.log(txtService.value);
    console.log(txtOwner.value);
    console.log(txtPhone.value);

    //create a generic constructor
    var thePet = new Pet(txtName.value, txtAge.value, txtBreed.value, txtGender.value, txtService.value, txtOwner.value, txtPhone.value);
    console.log(thePet);

    //push the pet into the array
    salon.pets.push(thePet);
    console.log(salon.pets);

    //display the pets
    display(thePet);

    //clear the forum for register
    clear();
}

function profitCalculation() {
    //create a variable sum and initialize the variable
    var sum = 0;

    //travel the salon.pets[](for)
    for (var i = 0; i < salon.pets.length; i++) {
        //sum all the prices   
        sum = sum + salon.pets[i].price;

    }

    //display the result on the html
    document.getElementById("profits").innerHTML = `
    Profits: $${sum}
    `;
}

function displayInfo() {
    /*
        name, age, breed, gender, service, owners name, contact phone
    */
    document.getElementById("footer-text").innerHTML = `
<p> ${salon.name} </p>
<p> ${salon.address.street}, ${salon.address.number} </p>
<p> It opens from ${salon.hours.open} to ${salon.hours.close}</p>
`;
}

function init() {
    console.log("Initialization");
    //push the pets into the array
    //salon.pets=[scooby, scrapy, speedy];
    salon.pets.push(scooby);
    salon.pets.push(scrapy);
    salon.pets.push(speedy);
    display(scooby);
    display(scrapy);
    display(speedy);
    console.table(salon.pets);
    displayInfo();
    //display();
}

window.onload = init;