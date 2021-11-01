
function scuberGreetingForFeet(feetNumber){
  let result
  if (feetNumber <= 400) {
    result = feetNumber; 
  return ("This one is on me!"); 
  }
  else if (feetNumber > 2500) {
    result = feetNumber;
    return ("No can do.");
  }
  else if (feetNumber > 2000) {
    result = feetNumber;
    return ("I will gladly take your thirty bucks.");
  }

}


function ternaryCheckCity(cityName){
  return cityName === 'NYC'?'Ok, sounds good.' : "No go.";

}

function switchOnCharmFromTip(money){
    switch(money){
      case "generous":
          return "Thank you so much.";
          case "not as generous":
              return "Thank you.";
              default:
                return "Bye.";
    }
}