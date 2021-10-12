let globalVar=10;
//correct credentials
let realUser="garciaangel626";
let realPass="pass123*";

function hello(){
    globalVar=5;
}

function example(){
    globalVar=3;
    let localVar=1;
    globalVar=globalVar+localVar;// memory
    console.log(globalVar)
}
//hello();
//globalVar=20;
//example();
//console.log(globalVar);

function login(){
    let flag=false;
    do{
        let userName=prompt("Enter your user name:");
    let password=prompt("Enter your password:");
        if(userName===realUser && password===realPass){
        document.write(`
        <h1>Welcome to the system ${userName}</h1>
        `);
        flag=true
    }else{
        alert("Incorrect userrname or password. Try again!")
    }
    }while(flag==false);
    
}
//login();

for(let i=1;i<11;i++){
    console.log("for",i);
}
let i=1;
while(i<11){
    console.log("while",i);
    i++;
}
let j=1;
do{
    console.log(i);
    j++;
}while(j<11);


//array
let students=["Oscar","Angel","Kvon","Shamar"]

console.log(students);
console.table(students);

function displayArray(){
    for(let i=0;i<4;i++){
        document.write(`<li>${students[i]}</li>`)
    }
}








