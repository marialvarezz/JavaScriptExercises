const numberInput=document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output=document.getElementById("output");
const romansArray=[
  {num:1000,roman:"M"},
  {num:900,roman:"CM"},
  {num:500,roman:"D"},
  {num:400,roman:"CD"},
  {num:100,roman:"C"},
  {num:90,roman:"XC"},
  {num:50,roman:"L"},
  {num:40,roman:"XL"},
  {num:10,roman:"X"},
  {num:9,roman:"IX"},
  {num:5,roman:"V"},
  {num:4,roman:"IV"},
  {num:1,roman:"I"}
];

const checkNumberInput =()=>{
  let number = parseInt(numberInput.value);
  if(!numberInput.value || isNaN(number)){
    output.classList.remove("hide");
    output.textContent="Please enter a valid number";
  }else if(number<1){
    output.classList.remove("hide");
    output.textContent="Please enter a number greater than or equal to 1";
  }else if(number > 3999){
    output.classList.remove("hide");
    output.textContent="Please enter a number less than or equal to 3999";
  }else{
    romanConverter(number)
  }
}

const romanConverter=(number)=>{
  let romanResult = "";
  for(const roman of romansArray){
    while(number >=roman.num){
      romanResult += roman.roman;
      number -=roman.num;
    }
  }
      output.classList.remove("hide");
    output.textContent=romanResult;
}

convertBtn.addEventListener("click", checkNumberInput);

numberInput.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    checkNumberInput();
}})
