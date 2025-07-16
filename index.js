
//window.alert("You will guess a number from 1 to 200 and it will tell you to go higher or lower")

const min = 1;
const max = 100;
let answer = Math.floor(Math.random() * (max-min+1));

let attemps = 0;
let myLabel = document.getElementById("myLabel");
let myText = document.getElementById("myText");
let mySubmit = document.getElementById("mySubmit");
let myEnd = document.getElementById("end");
let myContainer = document.getElementById("container");
let guess;
    
let flashInterval; 

function startFlashing(element){
    const colors = ["Yellow","green", "teal", "blue", "purple", "red", "orange"];
    let i = 0;
    flashInterval = setInterval(() =>{
        element.style.color = colors[i % colors.length];
        i++
    }, 200);
};

function stopFlashing(){
    clearInterval(flashInterval);
};

myLabel.textContent = `Guess a Number between ${min} - ${max}`;

mySubmit.onclick = function(){
    guess = Number(myText.value.trim());
    
    if(isNaN(guess)){
        window.alert("Please enter a valid Number!");
    } 
    else if(guess > max || guess < min){
        window.alert("Please enter a valid number");
    }
    else {
        attemps++;
        if(guess < answer){
            myLabel.textContent = "Too LOW! Try Again!";
            myLabel.style.color = "red";
        }
        else if(guess > answer){
            myLabel.textContent = "Too HIGH! Try Again!";
            myLabel.style.color = "red"
        }
        else {
            myLabel.textContent = `WHOOOP! WHOOOP! You Win! It took you ${attemps} tries.`
            startFlashing(myLabel);
            mySubmit.disabled = true;
            myText.readOnly = true;
        }
    }

    console.log(attemps);
}
myEnd.onclick = function(){
        myContainer.style.display = "none";
        stopFlashing();
        myLabel.style.color = "black";
    }

const myRestart = document.getElementById("myRestart");

myRestart.onclick = function() {
    attemps = 0;
    answer = Math.floor(Math.random() * (max-min+1));
    myText.value = "";
    mySubmit.disabled = false;
    stopFlashing();
    myLabel.style.color = "black";
    myLabel.textContent = `Guess a Number between ${min} - ${max}`;
    myText.readOnly = false;
}


