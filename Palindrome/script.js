const posiblePalindrome = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");


function getPalindrome(){
  if(posiblePalindrome.value === ""){
    alert("Please input a value")
  }else{
    return posiblePalindrome.value;
  }
  
};

function palindromeChecker(){
  const regex = /[^A-Za-z0-9]+/g;
  const palindrome=getPalindrome()
  const palindromeFilter = palindrome.replace(regex,""); 
  console.log(palindromeFilter)
  const array = palindromeFilter.split("");
  const arrayReverse = [...array];

  arrayReverse.reverse();
  if(array.join("").toLowerCase()===arrayReverse.join("").toLowerCase()){
    result.textContent = `${palindrome} is a palindrome`
  }else{
    result.textContent = `${palindrome} is not a palindrome`
  }

}

checkButton.addEventListener("click",palindromeChecker)
