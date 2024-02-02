var discount;
const money = 5000;
discount = money;

if(money > 5000){
  console.log("You are eligible to buy anything here.");
}
else{
   if(money>4000){
    discount = discount*10/100;
    var payAmount=money;
    console.log("You get "+ discount +" off on " + payAmount +" pay amount.");
   }
}
