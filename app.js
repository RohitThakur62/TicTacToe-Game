let boxes=document.querySelectorAll(".box");
let newGamebtn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let reset=document.querySelector("#reset-btn");

let turnO=true;


//winner index
const winPatterns=[
    [0,1,2],
    [1,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
       if(turnO){//palyer 1
        box.innerText="O";
        turnO=false;
       }
       else{//player 2
        box.innerText="X";
        turnO=true;
       }
        //click k bad button ko disable kar do
        box.disabled=true;
        checkWinner();

    })

    const showWinner=(winner)=>{
        msg.innerText=`Cogratulation,Winner is${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();

    }

    const checkWinner=()=>{
        for(let pattern of winPatterns){
            // console.log(pattern[0],pattern[1],pattern[2]);
            // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;

            if(pos1Val!="" &&pos2Val!="" &&pos3Val!="" ){
                if(pos1Val===pos2Val&&pos2Val===pos3Val){
                    console.log("Winner"+pos1Val);
                    showWinner(pos1Val);
                }
            }
        }
    }
});

newGamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);