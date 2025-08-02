let userscore = 0;
let compscore = 0; 

const choices = document.querySelectorAll(".choise");
const msg1 = document.querySelector("#msg");
const usersc = document.querySelector("#userscore");
const compsc = document.querySelector("#compscore");

const gencompchoise = ()=>{
    const options = [rock , paper , scissor];
    const randomidx = Math.floor(Math.random() *3);
    return options[randomidx];

}

const drawgame = () =>{
    console.log("Game Was Draw");
    msg1.innerText = "Game Draw !!";
    msg1.style.backgroundColor = "blue";
    
};

const showwinner = (userwin , userchoise , compchoise)=>{
    if(userwin){
        userscore++;
        usersc.innerText = userscore;
        msg1.innerText = `you win ! your ${userchoise} beats computers ${compchoise} `;
        msg1.style.backgroundColor = "green";
        
        
    }else{
        compscore++;
        compsc.innerText = compscore;
        msg1.innerText = `you lost ! computers ${userchoise} beats your ${compchoise} `;
        msg1.style.backgroundColor = "red";
        
        
    }
}

const playgame = (userchoise) =>{
    console.log("user choise =", userchoise);
    const compchoise = gencompchoise().getAttribute("id");
    console.log("comp choise = ", compchoise);

    if(userchoise === compchoise){
        drawgame();
    }else{
        let userwin = true;
        if(userchoise === "rock"){
            //paper,scissor
            userwin = compchoise === "paper" ? false : true;
        }else if(userchoise === "paper"){
            //rock , scissor
            userwin = compchoise === "scissor" ? false : true;
        }else{
            //rock , paper
            userwin = compchoise === "rock" ? false : true;
        }
        showwinner(userwin, userchoise , compchoise);
    }
};

choices.forEach((choise) =>{
    
    choise.addEventListener("click", () =>{
        const userchoise = choise.getAttribute("id");
        playgame(userchoise);
    })
})