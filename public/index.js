import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
   databaseURL: 'https://fir-app-1-6e06d-default-rtdb.firebaseio.com/'
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
console.log(database);
const itemsInDB = ref(database, "items");
console.log(itemsInDB);

let button = document.getElementById('add-button');
button.addEventListener("click", addItem);


function addItem() {
   let curr_item = document.getElementById('input-field').value;
   console.log(curr_item)
   push(itemsInDB, curr_item)
 }