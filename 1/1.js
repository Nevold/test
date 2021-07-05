function isPalindrom(word) {
  return console.log(word == word.split('').reverse().join(''));
}
isPalindrom('abbab');

function shortWord(word) {
  return console.log(
    word
      .split(' ')
      .sort((a, b) => a.length - b.length)
      .shift()
  );
}
shortWord('SS ffff gggggg fff');

function inisial(word) {
  return console.log(
    word
      .split(' ')
      .reduce((acc, curr) => acc + curr.split('').shift() + '.', '')
      .toUpperCase()
  );
}

inisial('dd ff');

function sumNumber(number) {
  return String(Math.abs(number))
    .split('')
    .reduce((acc, curr) => +acc + +curr);
}
console.log(sumNumber(-18));

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([3, 1, 8]));
