import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
   const db_snapshot = snapshot;
   if (db_snapshot.exists()) {
    let data = Object.entries(db_snapshot.val());
    for (let item of data) {
       appendNewShoppingListItem(item);
    }
   } else {
      shoppingListElement.innerHTML = "No items added...";
      console.log('no snapshot exists');
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
  // shoppingListElement.innerHTML = shoppingListElement.innerHTML + `<li id="${item[0]}">${item[1]}</li>`;
  let itemID = item[0];
  let itemValue = item[1];
  let item_db_location = ref(database, `items/${itemID}`);

  let new_item_el = document.createElement("li");
  new_item_el.textContent = itemValue;
  new_item_el.addEventListener("dblclick", function() {remove(item_db_location)});
  shoppingListElement.append(new_item_el);
 }

 //https://www.youtube.com/watch?v=UFD4SP91tSM 
   
