function display(aPet){
    //display the number of pets
    document.getElementById("numberPets").innerHTML=`
    Registered pets: ${salon.pets.length}
    `;
    //clear the field
    //document.getElementById("pets").innerHTML="";
    //travel the pet's array
    //for(var i=0; i<salon.pets.length;i++){
    
        //assign a price for each service
        if(aPet.service == "nails"){
            aPet.price=15;
        }else if(aPet.service == "shower"){
            aPet.price=20;
        }else if(aPet.service == "hair"){
            aPet.price=15;
        }else if(aPet.service == "full"){
            aPet.price=25;
        }
        
        //create a template
        var temp=`<div class="pets"> 
        <h3>${aPet.name}</h3>
        <p>Age: ${aPet.age}</p>
        <p>Breed: ${aPet.breed}</p>
        <p>Gender: ${aPet.gender}</p>
        <p>Service: ${aPet.service}</p>
        <p>Owner: ${aPet.owner}</p>
        <p>Phone: ${aPet.phone}</p>
        <p>$${aPet.price}</p>
        </div>`;

        //constructor(name,age,breed,gender,service,owner,phone)
    //concatenate all the info
    //display the temp on the html
    document.getElementById("pets").innerHTML+=temp;
    //}
    //document.getElementById("pets").appendChild(temp);
    profitCalculation();
}


