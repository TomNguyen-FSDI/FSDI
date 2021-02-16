var firstTime=true;

function display(aPet) {
    var once="";
    var petRows="";
    //display the number of pets
    document.getElementById("numberPets").innerHTML = `
    Registered pets: ${salon.pets.length}
    `;
    //clear the field
    //document.getElementById("pets").innerHTML="";
    //travel the pet's array
    //for(var i=0; i<salon.pets.length;i++){

    //assign a price for each service
    if (aPet.service == "nails") {
        aPet.price = 15;
    } else if (aPet.service == "shower") {
        aPet.price = 20;
    } else if (aPet.service == "hair") {
        aPet.price = 15;
    } else if (aPet.service == "full") {
        aPet.price = 25;
    }

    if (firstTime){
       once="";
        firstTime=false;
    }else{
        once="display-none";
        petRows="border-top-none"
    }

    //create a template
    //display registered pets as a table
    var temp = `
        <table class="text-center " width="100">
            <tr class="${once} border-1px font-size-1o5rem">
                <th class="border-1px width-150">Name</th>
                <th class="border-1px width-100">Age</th>
                <th class="border-1px width-100">Breed</th>
                <th class="border-1px width-125">Gender</th>
                <th class="border-1px width-125">Service</th>
                <th class="border-1px width-150">Owner</th>
                <th class="border-1px width-200">Phone</th>
                <th class="border-1px width-100">Price</th>
            </tr>
            <tr class="font-size-1o2rem ">
                <div class="width-100">
                <td class="${petRows} border-1px width-150">${aPet.name}</td>
                </div>
                <td class="${petRows} border-1px width-100">${aPet.age}</td>
                <td class="${petRows} border-1px width-100 ">${aPet.breed}</td>
                <td class="${petRows} border-1px width-125 ">${aPet.gender}</td>
                <td class="${petRows} border-1px width-125">${aPet.service}</td>
                <td class="${petRows} border-1px width-150">${aPet.owner}</td>
                <td class="${petRows} border-1px width-200">${aPet.phone}</td>
                <td class="${petRows} border-1px width-100">$${aPet.price}</td>
            </tr>
        </table>
            `;

    //display registered pets as card containers
    // var temp=`<div class="pets"> 
    // <h3>${aPet.name}</h3>
    // <p>Age: ${aPet.age}</p>
    // <p>Breed: ${aPet.breed}</p>
    // <p>Gender: ${aPet.gender}</p>
    // <p>Service: ${aPet.service}</p>
    // <p>Owner: ${aPet.owner}</p>
    // <p>Phone: ${aPet.phone}</p>
    // <p>$${aPet.price}</p>
    // </div>`;

    //constructor(name,age,breed,gender,service,owner,phone)
    //concatenate all the info
    //display the temp on the html
    document.getElementById("pets").innerHTML += temp;
    //}
    //document.getElementById("pets").appendChild(temp);
    profitCalculation();
}


