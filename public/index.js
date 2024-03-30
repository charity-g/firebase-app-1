import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
   databaseURL: 'https://fir-app-1-6e06d-default-rtdb.firebaseio.com/'
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "items");
console.log(shoppingListInDB);

const shoppingListElement = document.getElementById('shopping-list');
const inputFieldElement = document.getElementById('input-field')
const submitButtonElement = document.getElementById('add-button');
submitButtonElement.addEventListener("click", addItem);

onValue(shoppingListInDB, function(snapshot) {
   clearShoppingListEl();
   const raw_data = snapshot.val();
   let data = Object.values(raw_data);
   for (let item of data) {
      appendNewShoppingListItem(item);
   }
 });

function addItem() {
   let curr_item = inputFieldElement.value;
   clearInputFieldEl();
   if (curr_item != '') {
      console.log(`${curr_item} pushed to database!`);
      push(shoppingListInDB, curr_item);
   }
 }

 function clearInputFieldEl() {
   inputFieldElement.value = '';
 }

 function clearShoppingListEl() {
   shoppingListElement.innerHTML = '';
 }

 function appendNewShoppingListItem(item) {
   shoppingListElement.innerHTML = shoppingListElement.innerHTML + `<li>${item}</li>`;
 
 }

 //https://www.youtube.com/watch?v=UFD4SP91tSM Lesson 14 flexbox 1hour
   
