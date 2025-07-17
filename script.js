const clickSound=new Audio("sounds/click.mp3");
const rps=new Audio("sounds/hehe.mp3");
const win=new Audio("sounds/win.wav");
win.volume=1;
const loss=new Audio("sounds/loss.mp3");
loss.volume=1;

let buttons=document.querySelectorAll("button");
let playerScore=0;
let computerScore=0;
let roundNum=1;
let emojiMap = {
    rock: "✊",
    paper: "🖐️",
    scissors: "✌️"
};
buttons.forEach(button=>{
    button.addEventListener("click",function(){
        rps.play();
        let playerChoice=button.id;
        console.log("Player chose: ",playerChoice);
        let choices=["rock","paper","scissors"]
        let random=Math.floor(Math.random()*3);
        let computerChoice=choices[random];
        console.log("Computer chose: ",computerChoice);
               
        determineWinner(playerChoice,computerChoice);
    });
});
function determineWinner(player,computer){
            let result="";
            if(player===computer){
                result ="Match Tie!";
            }
            else if(
                (player==="rock"&&computer==="scissors")||(player==="paper"&&computer==="rock")||(player==="scissors"&&computer==="paper")
            ){
                result="Player Won";
                playerScore++;
            }
            else{
                result="Computer Won";
                computerScore++;
            }
            document.getElementById("result").textContent="Result: "+result;
            document.getElementById("player-score").textContent=playerScore;
            document.getElementById("computer-score").textContent=computerScore;  
            document.getElementById("player-visual").textContent = "You chose: " + emojiMap[player];
            document.getElementById("computer-visual").textContent = "Computer chose: " + emojiMap[computer];
            
            document.getElementById("round").textContent="Round: "+roundNum;
            roundNum++;
            if(playerScore===5||computerScore===5){
                let finalmsg="";
                if(playerScore===5){
                    finalmsg="🎉 Player wins the game!";
                    win.play();
        } else {
            finalmsg = "💻 Computer wins the game!";
            loss.pause();
            loss.currentTime=0;
            loss.play();
        }
            document.getElementById("result").textContent = finalmsg;

            buttons.forEach(button=>{
                 if (button.id !== "reset") {
                button.disabled=true;
                 }
            });
            }
        }
        const reset=document.getElementById("reset");
        reset.addEventListener("click",function(){
            rps.pause();
    rps.currentTime = 0;
     win.pause();
    win.currentTime = 0;
    loss.pause();
    loss.currentTime=0;
            clickSound.currentTime=0;
            clickSound.play();
            playerScore=0;
            computerScore=0;
            roundNum=1;
            document.getElementById("player-score").textContent=playerScore;
            document.getElementById("computer-score").textContent=computerScore; 
            document.getElementById("round").textContent="Round: "+roundNum;

            document.getElementById("result").textContent="";
            document.getElementById("player-visual").textContent = "";
            document.getElementById("computer-visual").textContent = "";
           buttons.forEach(button=>{
                button.disabled=false;
            });
        });