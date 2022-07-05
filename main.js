function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

const BasketballPlays = {
  startPlayer: ['Michael Jordan', 'Scotty Pippen', 'Steve Kerr', 'Denis Rodmen'],
  MoveDone: ['slam dunk', 'ally oop', '3 point shot', 'layup', 'fade away'],
  outcome: ['and its good!', 'and hes blocked', 'and its a foul', 'and that didn\'t go well its a twisted anckle']
}

let BasketballPlay = [];

for(let prop in BasketballPlays) {
  let key = generateRandomNumber(BasketballPlays[prop].length);

  switch(prop) {
    case 'startPlayer':
      BasketballPlay.push(`${BasketballPlays[prop][key]}...with the `);
      break
    case 'MoveDone':
      BasketballPlay.push(`${BasketballPlays[prop][key]}........`);
      break
    case 'outcome':
      BasketballPlay.push(`${BasketballPlays[prop][key]}`);
      break
    default:
      BasketballPlay.push('Please pass in a valid object.');
  }
}

function formatPlay(play) {
  const formatted = play.join('\n');
  console.log(formatted);
}

formatPlay(BasketballPlay);
