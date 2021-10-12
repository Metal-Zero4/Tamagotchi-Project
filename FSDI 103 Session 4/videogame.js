/*default values*/
let hunger=50;
let happiness=50;
let energy=50;

function displayValues(){
    document.getElementById("petHunger").innerHTML=`${hunger}`;
    document.getElementById("petHappiness").innerHTML=`${happiness}`;
    document.getElementById("petEnergy").innerHTML=`${energy}`;
}


function feed(){
    hunger=hunger-10; //decrease the hunger 
    document.getElementById("petHunger").innerHTML=`${hunger}`;//update the hunger on html
    //update and increase happiness
    happiness=happiness+3;
    document.getElementById("petHappiness").innerHTML=`${happiness}`;
}
    
function pet(){
    //increase the happiness (10 points)
    happiness=happiness+10;
    document.getElementById("petHappiness").innerHTML=`${happiness}`;
}
function play(){
    //decrease the energy
    //increase the happiness
    energy=energy-5;
    document.getElementById("petEnergy").innerHTML=`${energy}`;
    happiness=happiness+5;
    document.getElementById("petHappiness").innerHTML=`${happiness}`;
    hunger=hunger+5;
    document.getElementById("petHunger").innerHTML=`${hunger}`;

}

displayValues();