button = document.getElementById('add-button');
button.addEventListener("click", addItem);


function addItem() {
   // document.getElementById("demo").innerHTML = "Hello World";
   curr_item = document.getElementById('input-field').value;
   console.log(curr_item)
 }