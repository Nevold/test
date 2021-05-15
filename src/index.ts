import './style.css';

const img = require('./assets/left-arrow.png');

const div = document.createElement('div');
div.innerHTML = `<img src="${img}" alt="ss"/>`;
document.body.append(div);

const arr = document.querySelectorAll('div');

arr.forEach(element => {
  element.classList.add('ff');
});
arr.forEach(element => {
  element.classList.add('dd');
});
