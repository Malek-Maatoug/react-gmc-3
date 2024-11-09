const tasksWrap = document.querySelector(".tasks-wrap");
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", function (x) {
  x.preventDefault();
  const task = document.createElement("p");
  task.innerHTML = input.value;
  tasksWrap.appendChild(task);
  input.value = "";
});
