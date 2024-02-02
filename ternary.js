/**
 * TERNARY --> THREE PARTS 
 * 
 *   ?   :
 * 
 * condition ? do then true: do when false;
 * 
 * */
// const age= 12;


// if(age>=18){
//   console.log("You can vote");
// }
// else{
//    console.log("You can not vote");
// }

//----Simple Ternary---//
// const age=18;
// age>=18 ?  console.log("You can vote"): console.log("You can not vote");


let price = 4000;
const isMuhammad= true;

// if(isMuhammad==true){
//    price=0;
// }
// else {
//    price=price+100;
// }
 
//  console.log(price);

// price = isMuhammad == true ? 0 : price+100;
// console.log(price);



//------ Nested Ternary-------//
// if(isMuhammad==true){
//   if(price>1000){
//      price=price/2;
//   }
//   else{
//     price=0;
//   }  
// }
// else {
//    price=price+100;
// }

// price>1000 ? price/2 : 0;


price = isMuhammad == true ? (price>1000 ? price/2 : 0) : price+100;
console.log(price);


