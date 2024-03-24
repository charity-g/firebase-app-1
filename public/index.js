import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

const appSettings = {
   databaseURL: 'https://fir-app-1-6e06d-default-rtdb.firebaseio.com/'
}

const app = initializeApp(appSettings);
let button = document.getElementById('add-button');
button.addEventListener("click", addItem);


function addItem() {
   // document.getElementById("demo").innerHTML = "Hello World";
   let curr_item = document.getElementById('input-field').value;
   console.log(curr_item);
 }