let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
];

const cidValue=[
  {name:"ONE HUNDRED",value:100},
  {name:"TWENTY",value:20},
  {name:"TEN",value:10},
  {name:"FIVE",value:5},
  {name:"ONE",value:1},
  {name:"QUARTER",value:0.25},
  {name:"DIME", value:0.1},
  {name:"NICKEL",value:0.05},
  {name:"PENNY",value:0.01}
]

let totalChange = 0;

const cash = document.getElementById("cash");
const totalPriceText = document.getElementById("price");
const purchaseBtn = document.getElementById("purchase-btn");
const changeContainer = document.getElementById("change-container");
const changeDue = document.getElementById("change-due");



const changeContainerDisplay =()=>{
   changeContainer.innerHTML="<h2>Change Available</h2>";
  for(const item of cid){
    changeContainer.innerHTML +=`<span class="change">${item[0]} : $${item[1]}</span>`;
    totalChange += item[1];
  }
}

const calculateChange =(change)=>{ 
  let x =0
  let y =0
  let total =0
  let changeDueString="";
  console.log(change)
  for (const cidVal of cidValue){
    const cidFilter = cid.filter(item => item[0]===cidVal.name);
    
    while(change.toFixed(2) >= cidVal.value){
      console.log(cidFilter[0][1]>=cidVal.value)
      if(cidFilter[0][1] >= cidVal.value){
        x++;
     
        change=(change.toFixed(2)*100-cidVal.value*100)/100;
        change.toFixed(2)
 
     cidFilter[0][1]=(cidFilter[0][1].toFixed(2)-cidVal.value.toFixed(2));
    
      }else{
        break;
      }
    }
    console.log(x)
    if(x>0){ 
        y = Math.floor(x*cidVal.value*100)/100;
       changeDueString +=`<p>${cidVal.name}: $${y}</p>` 
      }
     x=0;
    y=0;
  }
  for(const item of cid){
    total += item[1];
  }
  console.log(total)

  if(change>0){
    changeDue.innerHTML=`<p>Status: INSUFFICIENT_FUNDS</p>`
  }else
  if(total===0){
    changeDue.innerHTML="<p>Status: CLOSED</p>"
    changeDue.innerHTML += changeDueString;
  }else{
     changeDue.innerHTML += changeDueString;
  }


}

const getPrice = ()=>{
  totalChange=Math.floor(totalChange*100)/100;
  console.log(change);
  console.log(totalChange)
 let cashCustomer = parseFloat(cash.value);
  const change = (cashCustomer*100 - price*100)/100;
  if(!cash.value || isNaN(cashCustomer)){
    alert("Please enter a valid number")
  }else if(cashCustomer < price){
    alert("Customer does not have enough money to purchase the item")
  }else if(cashCustomer === price){
    changeDue.textContent = "No change due - customer paid with exact cash" 
  
  }else{
    changeDue.textContent = "Status: OPEN"
    calculateChange(change);

  }
 
  changeContainerDisplay();
  
}


window.onload=()=>{
  totalPriceText.innerHTML = `Total : <strong>$${price}<strong>`;
  changeContainerDisplay();
}

purchaseBtn.addEventListener("click",()=>{getPrice()})

