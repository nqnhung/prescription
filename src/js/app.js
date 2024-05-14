
// import { XMLHttpRequest } from './xhr2';
// var XMLHttpRequest = require('xhr2');
// console.log('kkkkkk');
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "http://localhost:6969/getListMedicine");
// xhr.send();
// xhr.responseType = "json";
// xhr.onload = () => {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     console.log(xhr.response);
//     console.log(`xhr.response.message${xhr.response.data.data[0].orderCode}`);
//   } else {
//     console.log(`Error: ${xhr.status}`);
//   }
// };


document.querySelectorAll('.dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('.mega-dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

// document.querySelector('#mb-menu-toggle').addEventListener('click', () => document.querySelector('#header-wrapper').classList.add('active'))

// document.querySelector('#mb-menu-close').addEventListener('click', () => document.querySelector('#header-wrapper').classList.remove('active'))
