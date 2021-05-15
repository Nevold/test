import './style.css';

const img = require('./assets/left-arrow.png');

// const div = document.createElement('div');
// div.innerHTML = `<img src="${img}" alt="ss"/>`;
// document.body.append(div);
// // const a = '5';
// // div.innerHTML = a;
// document.body.style.backgroundImage = `url('${img}')`;
// // document.body.style.backgroundColor = 'red';
const a = '10';
// console.log(a + 4);
// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = 'hell word!';

//   return element;
// }

// document.body.appendChild(component());
// let arr: (number | string)[] = [1, 2];
// arr.push('3');
// console.log(arr);
const arr = document.querySelectorAll('div');
console.log(arr);
arr.forEach(element => {
  element.classList.add('dd');
});
