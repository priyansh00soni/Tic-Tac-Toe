let play = document.querySelector(".play");
let bigbox = document.querySelector(".boxes");
// bigbox.style.display = "none";
// play.addEventListener("click", () => {
//   play.style.display = "none";
//   bigbox.style.display = "flex";
// });
let cubes = document.querySelectorAll(".cubes");
let reset = document.querySelector(".reset");
let turn;
let stats=document.querySelector(".stats");
let playAgain=document.querySelector(".playAgain");
let message = document.querySelector(".mess");
let bigmessage=document.querySelector(".message")
playAgain.style.display="none";
  let i = 0;
  let j = 0;
let patterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
cubes.forEach((index) => {
  index.addEventListener("click", () => {
    if (turn == "O") {
      index.innerHTML = "O";
      turn = "X";
    } else {
      index.innerHTML = "X";
      turn = "O";
    }
    index.disabled = true;
    checkWinner();
  });
  reset.addEventListener("click", () => {
    index.innerHTML = "";
    turn = "X";
    index.disabled = false;
    console.clear();
  });
});
checkWinner = () => {
  for (let pattern of patterns) {
    console.log(pattern[0], pattern[1], pattern[2]);
    let pos1 = cubes[pattern[0]].innerHTML;
    let pos2 = cubes[pattern[1]].innerHTML;
    let pos3 = cubes[pattern[2]].innerHTML;
    console.log(
      cubes[pattern[0]].innerHTML,
      cubes[pattern[1]].innerHTML,
      cubes[pattern[2]].innerHTML
    );
    if (
      pos1 == pos2 &&
      pos2 == pos3 &&
      pos1 != "" &&
      pos2 != "" &&
      pos3 != ""
    ) {
      console.log("WINNER!");
       if(turn=="O"){
        winturn="X"
        i++;
       }
       else{
        winturn="O"
        j++;
      }
      messagee();
      stats.style.display="flex";
      stats.innerHTML = `X won: ${i} times and O won: ${j} times`;
    }
  }
};
messagee = () => {
  
  bigbox.style.display = "none";
  reset.style.display="none"
  message.innerHTML = `🎊WINNER : PLAYER"${winturn}"🎊`;
  playAgain.style.display = "flex";
  bigmessage.style.display = "flex";
};
playAgain.addEventListener("click",()=>{
    reset.style.display = "flex";
    playAgain.style.display="none";
    bigmessage.style.display="none";
    bigbox.style.display="flex";
    cubes.forEach((index)=>{
     
     index.innerHTML = "";
     turn = "X";
     index.disabled = false;
     console.clear();
});
  })

  




