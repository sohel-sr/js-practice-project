let counter = document.querySelector(".counter");
const lowerCounterBtn = document.querySelector("#lowerCounterBtn");
const addCounterBtn = document.querySelector("#addCounterBtn");

let count = "0";

addCounterBtn.addEventListener("click", inrementCounter);
lowerCounterBtn.addEventListener("click", decrementCounter);

function inrementCounter(){
  count++;
  counter.innerHTML = count;
  if(counter.innerHTML>"0"){
    counter.style.color = "#4caf50"
  }else if(counter.innerHTML==="0"){
    counter.style.color = "#fff"
  }
  counter.animate([{opacity:"0.2"}, {opacity:"1.0"}], {duration:500, fill:"forwards"});
};

function decrementCounter(){
  count--;
  counter.innerHTML = count;
  if(counter.innerHTML<"0"){
    counter.style.color = "red"
  }else if(counter.innerHTML === "0"){
    counter.style.color = "#fff"
  };
counter.animate([{opacity:"0.2"}, {opacity:"1.0"}], {duration:500, fill:"forwards"});
};
