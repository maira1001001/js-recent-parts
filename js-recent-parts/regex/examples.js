/** @format */

var msg = 'Hello World';

msg.match(/(l.)/g);

// ASSERTION `$` at the end, `^` at the begining
msg.match(/(l.)$/g);

// LOOK AHEAD to match patterns `?=` positive, `?!`negative
msg.match(/(l.)(?=o)/g); // `?=` follow by
msg.match(/(l.)(?!o)/g); // `?!` not follow by
msg.match(/.(l.)/g);
msg.match(/([jkl])o Wor\1/g);

// LOOK BEHIND to match patters `?<=` positive, `?<!` negative
msg.match(/(?<=e)(l.)/g); // `?<=` preceded by
msg.match(/(?<!e)(l.)/g); // `?<!` not preceded by

// NAMED CAPTURE GROUPS
msg.match(/(?<mai>l.)/);
msg.match(/(?<cap>[jkl])o Wor\k<cap>/).groups; // `?<cap>` defining a named capture groups
msg.replace(/(?<mai>l.)/g, '-$<mai>-'); // `$<mai>`using the named capture groups

msg.replace(/(?<potato>l.)/g, function (...args) {
  console.log(args);
  var [, , , , { potato }] = args;
  return potato.toUpperCase();
});

// DOTALL MODE accross all lines
var msg2 = `
the quick brown fox
jumps over the
lazy dogs`;

msg2.match(/brown.*over/); // null
msg2.match(/brown.*over/s); // `s`: accross all lines
// `/g` for global
// `/m` for multilines
// `/i` for case insensitive
// `/s` dotall mode, or accross all lines
