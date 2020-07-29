/** @format */

function upper(strings, ...values) {
  var str = '';
  for (let i = 0; i < values.length; i++) {
    // to be safe, force the value to be a String
    str += strings[i] + String(values[i]).toUpperCase();
  }
  str += strings[strings.length - 1];
  return str;
}

var name = 'kyle',
  twitter = 'getify',
  topic = 'JS Recent Parts';

console.log(
  `Hello ____ (@____), welcome to ____!` ===
    'Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!'
);

console.log(
  upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
    'Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!'
);
