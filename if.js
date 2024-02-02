
var height = 6.5;
var weight = 75;
if(height>=6 && height<=7){
  if(weight>=60 && weight<=75){
    console.log("You are a fit person");
  }
  else if(weight>75){
     console.log("You are over weight");
  }
  else{
    console.log("You are under weight");
  }
}
else{
  console.log("Your height is not matched with requirements");
}
