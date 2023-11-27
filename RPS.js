const b1 = document.getElementById("rock");
const b2 = document.getElementById("paper");
const b3 = document.getElementById("scissors");
const body = document.querySelector("body")
const button = document.getElementById("reset")
const p = document.getElementById("result");
const ptag = document.getElementById("info")
const playa = document.getElementById("playa")
const compa = document.getElementById("compa")

var win = 0;
var lose = 0;

b1.addEventListener("click",buttoncall);
b2.addEventListener("click",buttoncall);
b3.addEventListener("click",buttoncall);


function getComputerChoice(){
    var samplist = ["rock","paper","scissors"];
    var randomIndex = Math.floor(Math.random() * samplist.length);
    return samplist[randomIndex];
}


function buttoncall(){
    var result = this;
    checkwin(result.id);
}


function checkwin(playerinput){
    var computerAns = getComputerChoice();
    ptag.textContent = "You selected " + playerinput + "  Computer selected " + computerAns;
    if(playerinput == "paper"){
        if(computerAns == "scissors"){
            body.style.backgroundColor = "red";
            p.textContent = "Sorry, Better luck next Time..";
            lose = lose + 1;

        }else if(computerAns == "rock"){
            body.style.backgroundColor = "green";
            p.textContent = "Congrats you won!!!!!";
            win = win + 1;
        }else{
            body.style.backgroundColor = "white";
            p.textContent = "It's a draw...";
        }
    }else if(playerinput == "rock"){
        if(computerAns == "paper"){
            body.style.backgroundColor = "red";
            p.textContent = "Sorry, Better luck next Time..";
            lose = lose +1;
        }else if(computerAns == "scissors"){
            body.style.backgroundColor = "green";
            p.textContent = "Congrats you won!!!!!";
            win = win + 1;
        }else{
            body.style.backgroundColor = "white";
            p.textContent = "It's a draw...";
        }
    }else{
        if(computerAns == "rock"){
            body.style.backgroundColor = "red";
            p.textContent = "Sorry, Better luck next Time..";
            lose = lose + 1;
        }else if(computerAns == "paper"){
            body.style.backgroundColor = "green";
            p.textContent = "Congrats you won!!!!!";
            win = win + 1;
        }else{
            body.style.backgroundColor = "white";
            p.textContent = "It's a draw...";
        }
    }
    playa.textContent = win;
    compa.textContent = lose;
}


button.addEventListener("click",Playagain)

function Playagain(){
    p.textContent = "";
    ptag.textContent = "";
    body.style.backgroundColor = "blanchedalmond";
    playa.textContent = 0;
    compa.textContent = 0;
    win = 0;
    lose = 0;
}