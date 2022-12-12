const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "rgb(100, 132, 161)", "rgb(154, 161, 100)", "rgb(31, 158, 139)", "rgb(33, 158, 129)" ];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0 - 3
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber () {
    return Math.floor(Math.random()*colors.length);

}