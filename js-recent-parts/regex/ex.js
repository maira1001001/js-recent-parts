/** @format */

var poem = `
The power of a gun can kill
and the power of fire can burn
the power of wind can chill
and the power of a mind can learn
the power of anger can rage
inside until it tears u apart
but the power of a smile
especially yours can heal a frozen heart`;

function* powers(poem) {
  var firstRegExp = /(?<=(of\s))((a\s+)?\w+)/g;
  var secondRegExp = /(?<=(can\s))(\w+)/gs;
  var secondMatch;
  while ((firstMatch = firstRegExp.exec(poem))) {
    secondMatch = secondRegExp.exec(poem);
    yield `${firstMatch[0]}: ${secondMatch[0]}`;
  }
}

for (let power of powers(poem)) {
  console.log(power);
}

// 'a gun: kill'
// 'fire: burn'
// 'wind: chill'
// 'a mind: learn'
// 'anger: rage'
// 'a smile: heal'

function* myPower(poem) {
  var re = /(?<=(power of\s))(?<thing>(a\s+)?\w+).*?(?<=(can\s))(?<verb>\w+)/gs;
  var match;
  while ((match = re.exec(poem))) {
    let {
      groups: { thing, verb },
    } = match;
    yield `${thing}: ${verb}`;
  }
}

for (let power of myPower(poem)) {
  console.log(power);
}
