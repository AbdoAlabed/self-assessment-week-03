//DO NOT MODIFY THIS FILE
//***********************************************************************//
//  I sorry but didn't understand the raact so i don't know how to solve it
//
//
//
//
//
//***********************************************************************//
var fishData = [
  {
    name: 'Goldfish',
    image: 'http://tinyurl.com/n4vgcl5',
    description: 'Everyone\'s first pet'
  },
  {
    name: 'Pufferfish',
    image: 'http://tinyurl.com/kxd7cuu',
    description: 'So puffy!'
  },
  {
    name: 'Tuna',
    image: 'http://tinyurl.com/zgs7z2s',
    description: 'Why are these things so huge? THey\'re terrifying.'
  }
];

ReactDOM.render(
  <FishTable fishes={fishData}/>,
  document.getElementById('app')
);
