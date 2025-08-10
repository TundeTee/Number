const generateBtn = document.getElementById("generate-btn")
const numberContainer = document.querySelector(".number-container")
const boxOption =document.querySelectorAll(".number-info")
const colorDiv = document.querySelector(".color")
 const numberValue = document.querySelector(".number-gen")

generateBtn.addEventListener("click",generateNumber);

numberContainer.addEventListener("click", function(e){
if(e.target.classList.contains("copy-btn")){
 const hexValue = e.target.previousElementSibling.textContent;
 navigator.clipboard.writeText(hexValue).then(()=>showCopySuccess(e.target))
 .catch((err)=> console.log(err))}
// } else if(e.target.classList.contains("color")){
//  const hexValue = e.target.nextElementSibling.querySelector('.number-gen').textContent;
// navigator.clipboard.writeText(hexValue).then(()=>showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn")))
//  .catch((err)=> console.log(err))
// }
})
function showCopySuccess(element){
element.classList.remove("far", "fa-copy");
element.classList.add("fas","fa-check");
element.style.color = "#2EB843";

setTimeout(() => {
element.classList.add("far", "fa-copy");
element.classList.remove("fas","fa-check");
element.style.color = "";

},1500);
}

function generateNumber(){
const numbers = []
for(let i = 0;i<10;i++){
 numbers.push(generateRandomNumber())
}
updatenumberDisplay(numbers)
}
function generateRandomNumber(){
 const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 let number = "ELY-"
for(let  i = 0; i<12; i++){
 number += letters[Math.floor(Math.random() * 36)];
 }
 return number
}

function updatenumberDisplay (numbers){
const numberBoxes = boxOption
numberBoxes.forEach((box,index) =>{
 const number = numbers[index]
 const numberValue = box.querySelector(".number-gen")
 numberValue.textContent = number;
});
}
generateNumber();


