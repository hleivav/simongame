let buttonColours = ["red", "blue", "green", "yellow"]; 
let gamePathern = [];
let levelCounter = 0; 
let clickCounter = 0; 
let gameStarted = false; 

$(document).keydown(function(){
    if (gameStarted === false) {
        startTheGame(); 
    }
})

function startTheGame(){
    if (gameStarted === false){ //är vilkoret nödvändigt?
        gameStarted = true; 
        $("h1").text("Level: " + levelCounter); 
        newSound(); 
    }
}

$(".btn").click(function(){
    if (gameStarted === true) {

        while ( clickCounter < gamePathern.length) {
                if (this.id === gamePathern[clickCounter]){
                    clickCounter ++; 
        
                    $(this).css("filter", "invert(100%"); 
                    var element = $(this);
                    setTimeout(function(){
                    $(element).css("filter", "none"); 
                    },250)
                    
                    var currentAudio = "./sounds/" + this.id + ".mp3"; 
                    var audio = new Audio(currentAudio); 
                    audio.play(); 

                    if (clickCounter === gamePathern.length) {
                        levelCounter ++; 
                        $("h1").text("Level: " + levelCounter); 
                        clickCounter = 0;
                        setTimeout(function(){
                        newSound(); 
                        },1000); 
                     } d
                    break; 
                } 
                else 
                {
                    let wrong = new Audio("./sounds/wrong.mp3"); 
                    wrong.play(); 
                    $("h1").text( "Game over. Press any key to start."); 
                    $("body").css("background-color", "red"); 
                    setTimeout(function(){
                        $("body").css("background-color", "#011F3F"); 
                    },250)
                    clearVariables(); 
                    break; 
                }
        }
    }
})

function nextSequence(){
    randomNumber = Math.floor(Math.random() * 4); 
    return randomNumber; 
}

function newSound(){
    let randomChosenCoulor = buttonColours[nextSequence()]; 
    gamePathern.push(randomChosenCoulor); 
    var currentAudio = "./sounds/" + randomChosenCoulor + ".mp3"; 
    var audio = new Audio(currentAudio); 
    audio.play(); 
    $("." + randomChosenCoulor).css("opacity", "30%")
    setTimeout(function(){
        $("." + randomChosenCoulor).css("opacity", "100%")
    },250)
}

function clearVariables(){
    gamePathern = []; 
    levelCounter = 0; 
    gameStarted = false; 
    clickCounter = 0; 
}

