function scuberGreetingForFeet(rideDistance){
  // Write your code here!

  let message;

  if (rideDistance <= 199) {
    message = 'This one is on me!';
  }
  else if (rideDistance >= 2500) {
    message = 'No can do.';
  }
  else if (rideDistance >= 2000) {
    message = 'I will gladly take your thirty bucks.';
  }
  return message;
}

function ternaryCheckCity(city){
  // Write your code here!

  let message;

  message = city === 'NYC' ? "Ok, sounds good." : "No go.";

  return message;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    case 'thanks for everything':
      return 'Bye.'
      break;
  }
}