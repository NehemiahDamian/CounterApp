let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
   count++;
   countEl.innerText = count;
 }
 function save() {
   let countString =  count + " - "
   saveEl.textContent +=  countString;
   countEl.textContent = 0;
   count = 0;
 }



