// console.log("hei");
const str = ['index', 'js', 'ruby', 'monday', 'tuesday','blog'];
const input = document.getElementById('input here');
const submit = document.getElementById('submit here');

function listItem(str) {
  let list = document.getElementById('put it here');
  let newLi = document.createElement('li')
  newLi.innerText = str;
  list.appendChild(newLi);
  return (function () {
    // console.log(list);
  })();
}


function getText() {
  submit.addEventListener('click', event => {
    // debugger;
    listItem(input.value);
  })
}

str.forEach(each => listItem(each));
getText();
