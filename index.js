// console.log("hei");
const str = ['index', 'js', 'ruby', 'monday', 'tuesday','blog'];
const input = document.getElementById('input here');
const input_name = document.getElementById('input name');
const submit = document.getElementById('submit here');
const deleteAll = document.getElementById('delete');
const container = document.getElementById('put it here')
const url = 'http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages';

deleteAll.addEventListener('click', () => patchOrDelete("DELETE"));
container.addEventListener('click', event => updateTweet(event));

let counter = 0;

function updateTweet(event) {
  let updateLi = event.toElement;
  let arrLi = updateLi.innerText.split(" ");
  let newInput = document.createElement('input')
  newInput.setAttribute("type", "text");
  newInput.setAttribute("value", updateLi.innerText);
  newInput.id =`newinput ${updateLi.id}`;

  let newBtn = document.createElement('INPUT');
  newBtn.setAttribute("type", "button");
  newBtn.setAttribute("value", "update");
  newBtn.id = `newBun ${updateLi.id}`;

  // newInput.appendChild(newBtn);
  // updateLi.innerText  = ""
  updateLi.appendChild(newInput);
  updateLi.appendChild(newBtn);

  const updateBtn = document.getElementById(`newBun ${updateLi.id}`);

  updateBtn.addEventListener('click', event => {
    const updateField = document.getElementById(`newinput ${updateLi.id}`);
    let message = {name: arrLi[0], body:updateField.value}

    postMessage(message, urlAdd(updateLi.id), "PATCH") });

  // debugger;

}

function listItem(str, id = counter) {
  let list = document.getElementById('put it here');
  let newLi = document.createElement('li')
  newLi.id = id;
  counter++;
  newLi.innerText = str;
  list.appendChild(newLi);
  return (function () {
    // console.log(list);
  })();
}


function getText() {
  submit.addEventListener('click', event => {
    // debugger;
    postMessage({name:input_name.value, body:input.value}, url)
    pullMessage();
  });
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

function pullMessage() {
  let list = document.getElementById('put it here');
  list.innerHTML = "";
  listFromApi();
}


function urlAdd(id) {
  return url + "/" +id
}
function listFromApi() {
  fetch(url).then(j => j.json()).then(d => d.forEach(each => listItem(each.real_name +" "+ each.message , each.id)))
}
function patchOrDelete(op = "PATCH") {
  fetch(url).then(j => j.json()).then(d => d.forEach(each => postMessage("hello",urlAdd(each.id), op)))
}


const art = `YYYYYYYY        YYYYYYYY    EEEEEEEEEEEEEEEEEE      SSSSSSSSSSS
YYYYYYYY        YYYYYYYY    EEEEEEEEEEEEEEEEEE     SSSSSSSSSSSSS
YYYYYYYY        YYYYYYYY    EEEEEEEEEEEEEEEEEE    SSSSSSSSSSSSSSS
YYYYYYYY        YYYYYYYY    EEEEEEEEEEEEEEEEEE    SSSSSSSS    SSS
 YYYYYYYY      YYYYYYYY     EEEEEEEE              SSSSSSSS
  YYYYYYYY    YYYYYYYY      EEEEEEEE              SSSSSSSS
   YYYYYYYY  YYYYYYYY       EEEEEEEEEEEEE          SSSSSSSS
    YYYYYYYYYYYYYYYY        EEEEEEEEEEEEE           SSSSSSSSSS
     YYYYYYYYYYYYYY         EEEEEEEEEEEEE            SSSSSSSSSS
      YYYYYYYYYYYY          EEEEEEEEEEEEE               SSSSSSSSS
       YYYYYYYYYY           EEEEEEEE                     SSSSSSSS
        YYYYYYYY            EEEEEEEE                     SSSSSSSS
        YYYYYYYY            EEEEEEEEEEEEEEEEE     SSS    SSSSSSSS
        YYYYYYYY            EEEEEEEEEEEEEEEEE     SSSSSSSSSSSSSSS
        YYYYYYYY            EEEEEEEEEEEEEEEEE      SSSSSSSSSSSSS
        YYYYYYYY            EEEEEEEEEEEEEEEEE       SSSSSSSSSSS`;

let rr = art.split('\n').map(e => e.replace(/ /g, '_'));
// debugger;

rr.forEach(e => listItem(e));




// pullMessage();
// str.forEach(each => listItem(each));
// getText();
// setInterval(function(){ pullMessage(); }, 8000);
