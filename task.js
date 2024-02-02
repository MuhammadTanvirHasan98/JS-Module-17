
//----task no 1---//

// const burgerPrice = 500;
// if(burgerPrice>500){
//    console.log("Your burger price is " + burgerPrice);
//    console.log("So, you get a free coke.");
// }
// else{
//    console.log("Your burger price is " + burgerPrice);
//    console.log("So, You have to buy coke by spending 30tk.")
// }

//----task no 2---//

// const weight = 90;
// const height = 1.8;
// var BMI = weight/Math.pow(height, 2);
//     BMI = parseFloat(BMI.toFixed(2))
//  if(BMI >= 25 && BMI <= 29.9){
//   console.log("Your BMI is: "+ BMI);
//   console.log("You are overweight");
//  }
//  else if(BMI >= 18.5 && BMI <=24.9){
//   console.log("Your BMI is: "+ BMI);
//   console.log("You are normal");
//  }
//  else{
//   console.log("Your BMI is: "+ BMI);
//   console.log("You are underweight");
//  }

 
//----task no 3---//

// const marks = 89;

//  if(marks>=90 && marks<=100){
//    console.log("Your mark is: " + marks);
//    console.log("Your grade is A+.");
//   }
//  else if(marks>=80 && marks<90){
//   console.log("Your mark is: " + marks);
//  console.log("Your grade is A.");
//   }
//  else if(marks>=70 && marks<80){
//    console.log("Your mark is: " + marks);
//    console.log("Your grade is B.");
//   }
//   else if(marks>=60 && marks<70){
//    console.log("Your mark is: " + marks);
//    console.log("Your grade is C.");
//   }
//   else{
//    console.log("Your mark is: " + marks);
//    console.log("Your grade is F.");
//   }

//----task no 4---//

//skiped

//----task no 5---//

//  const num1 = 70, num2=75;
//  var result;
//   if(num1>num2){
//     result = Math.pow(num1,2);
//     console.log("Your result is: "+result);
//   }
//   else{
//     result=num1+num2;
//     console.log("Your result is: "+result);
//   }


//----task no 6---//
const age = 65;
const ticketFare = 800;
let discount,payAmount;

 if(age<10){
  console.log("You get free ticket to go.");
 }
 else if(age>=10 && age<=25){
  discount = ticketFare/2;
  payAmount = ticketFare - discount;
  console.log("You get "+ discount + 
  "tk discount from our main fare 50% of " + ticketFare);
  console.log("So, you have to pay ("+ticketFare
  +"-"+discount+ ") = " + payAmount+"tk");
 }
 else if(age>=60){
  discount = (ticketFare*15)/100;
  payAmount = ticketFare - discount;
  console.log("You get "+ discount + 
  "tk discount from our main fare 15% of " + ticketFare);
  console.log("So, you have to pay ("+ticketFare
  +"-"+discount+ ") = " + payAmount+"tk");
 }

 else{
   console.log("You have to pay our regular ticket fare "
    + ticketFare);
 }