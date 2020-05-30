/*
const hexColor = document.querySelector(".hexColor");
const hexBtn = document.querySelector(".hexBtn");
const bodyBg = document.querySelector("body");
const hex = document.querySelector(".hex");

const hexColourValu = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

hexBtn.addEventListener("click", getHex);
function getHex(){
  let hexCol = "#";
  for (let x=0; x<6; x++){
    let random = Math.floor(Math.random()*hexColourValu.length);
    hexCol+=hexColourValu[random];
    //console.log(hexCol);
  };
  bodyBg.style.backgroundColor = hexCol;
  hex.innerHTML = hexCol;
  console.log(bodyBg);
};
*/


                        // Practice
const hexBtn = document.querySelector(".hexBtn");
const hexColor = document.querySelector(".hexColor");
const hex = document.querySelector(".hex");
const bodyBg = document.querySelector("body");

const hexColourValu = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


hexBtn.addEventListener("click", getHex);
function getHex(){
  let hexCol = "#";
  for(x=0; x<6; x++){
    let random = Math.floor(Math.random()*hexColourValu.length);
    hexCol+=hexColourValu[random];
  }
  bodyBg.style.backgroundColor = hexCol;
  hex.innerHTML = hexCol;
}
