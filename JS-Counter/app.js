const count = document.querySelector("#count");
const add = document.querySelector("#add");
const reset = document.querySelector("#reset");
const less = document.querySelector("#less");
var value = 0;

less.addEventListener("click", () => {
  value -= 1;
  count.textContent = value;
});
reset.addEventListener("click", () => {
  count.textContent = "0";
});
add.addEventListener("click", () => {
  value += 1;
  count.textContent = value;
});
