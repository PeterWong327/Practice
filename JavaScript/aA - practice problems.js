function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}
//prints:
// in block
// in block

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}
//prints:
// in block
// out of block


function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}
// prints out "SyntaxError: Identifier 'x' has already been declared"


function mysteryScoping4() {
  let x  = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}
// prints out:
// in block
// out of block


function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}
// prints out:
// SyntaxError: Identifier 'x' has already been declared


// madLib
// Write a function that takes three strings - a verb, an adjective, and
// a noun - uppercases and interpolates them into the sentence
//"We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.
//
// For example,
//
// > madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."

// function madLib(verb,adjective,noun) {
//   console.log('We shall ' + verb + ' the ' + adjective + ' ' + noun + '.');
// }
// madLib('make', 'best', 'guac');

//Added backticks to use template literals.
function madLib(verb, adjective, noun) {
  console.log(`We shall ${verb} the ${adjective} ${noun}.`);
}
madLib('make', 'best', 'guac');


function isSubstring(searchString, subString) {
  let subs = searchString.split(" ");

  for (let i = 0; i < subs.length; i++) {
    let sub = subs[i];
    if (subString === sub) {
      return true;
    }
  }
  return false;
}


function isSubstring(searchString, subString) {
  let subs = searchString.split(" ");

  if (subs.includes(subString)) {
      return true;
    }
  return false;
}
