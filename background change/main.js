/*
const colorBtn = document.querySelector(".color_btn");
const bodyBcg = document.querySelector("body");

const colors = ["#16a085", "#2980b9", "#34495e", "#f39c12", "#c0392b", "#7f8c8d", "#e66ad5", "#7065d6"];

colorBtn.addEventListener("click", changeColor);

function changeColor(){
  // bodyBcg.style.backgroundColor = colors[2];
  let random = Math.floor(Math.random()*colors.length)
  bodyBcg.style.backgroundColor = colors[random];
}
*/

              // practice
const colorBtn = document.querySelector(".color_btn");
const bodyBcg = document.querySelector("body");

const colors = ["#16a085", "#2980b9", "#34495e", "#f39c12", "#c0392b", "#7f8c8d", "#e66ad5", "#7065d6"];

colorBtn.addEventListener("click", changeColor);

function changeColor(){
  let random = Math.floor(Math.random()*colors.length);
  bodyBcg.style.backgroundColor = colors[random];
};
