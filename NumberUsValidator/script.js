const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
let isValid = true;
let contadorParentesis = 0;

function resultado(){
  if(userInput.value===""){
    alert("Please provide a phone number");
    result.style.display="block";
  }else{
    checker();
    isValid=true;
    userInput.value="";
    contadorParentesis = 0

  }
}


function checker(){
  let number = userInput.value;
  isValid=true;

  if(number.startsWith("1")){
    number = number.slice(1);
  };
  if(number.includes(" ")){
    console.log(number.indexOf(" "))
    if(number.indexOf(" ")!==0){
      isValid=false
      console.log("El espacio")
    }  
  }

  if(number.includes("(")){
      for(const caracter of number){
         if (caracter === '(') {
            contadorParentesis++;}
      }
      
      if(contadorParentesis > 1){
      isValid=false;
      console.log("Mas de un parentesis");

       } else if(number.includes(")")){
        const first = number.indexOf("(")
        const last=number.indexOf(")")
      if(last-first===4){
         number=number.replace(/\(|\)/g, "");
        
        }else{
          isValid=false;
          console.log("el primer y segundo parentesis no está entre tres")
        }
      }else{
        isValid=false;
        console.log("No tiene parentesis de cierre")
      }
    }else if(number.includes(")")){
      isValid=false;
      console.log("Tiene parentesis de cierre y no de apertura")
    }


  number = number.replace(/[^0-9]/g, "");
result.style.display="block";

console.log(`ES IGUAL A 10: ${number.length===10}`);
console.log(`ES VÁLIDO: ${isValid ===true}`);
   result.innerHTML += number.length===10 && isValid ===true ? `<p>Valid US number: ${userInput.value}</p>` : "<p>Invalid US number: " +userInput.value + "</p>" ;

}

function clear(){
  result.innerText = "";
  result.style.display="none";
  userInput.value="";
};

checkBtn.addEventListener("click",resultado);
clearBtn.addEventListener("click",clear);
