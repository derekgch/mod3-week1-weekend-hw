// console.log("hei");
const str = ['index', 'js', 'ruby', 'monday', 'tuesday','blog'];
const input = document.getElementById('input here');
const input_name = document.getElementById('input name');
const submit = document.getElementById('submit here');
const url = 'http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages';


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
    postMessage({name:input_name.value, body:input.value}, url);
  })
}

let myMessage = {name: "testing", body: "just testing"};
function postMessage(myMessage, url, methods = 'POST') {

  let request = new Request(url, {
  	method: methods,
  	mode: 'cors',
  	redirect: 'follow',
  	headers: new Headers({
  		'Content-Type': 'application/json'
    }),
    body: JSON.stringify({message:{real_name:myMessage.name, message: myMessage.body}
    })
  });
fetch(request);
}

function urlAdd(id) {
  return url + "/" +id
}
function listFromApi() {
  fetch(url).then(j => j.json()).then(d => d.forEach(each => listItem(each.message)))
}
function patchOrDelete(op = "PATCH") {
  fetch(url).then(j => j.json()).then(d => d.forEach(each => postMessage("hello",urlAdd(each.id), op)))
}

str.forEach(each => listItem(each));
getText();
