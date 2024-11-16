const form = document.querySelector("form");
const add = document.querySelector("#add");
const tasksWrap = document.querySelector("#tasks-wrap");
const itemsLeft = document.querySelector(".items-left");
let tasks = [
  {
    titleName: "learn js",
    done: false,
  },
  {
    titleName: "learn java",
    done: true,
  },
];

function affichage() {
  const text = tasks
    .map(function (v) {
      return `
    <div class="single-task flex between">
            <div class="flex">
              <form class="checked">
                <input type="checkbox" ${
                  v.done ? "checked" : ""
                }  class="state" />
              </form>
              <p class="${v.done == true ? "lined" : ""}">${v.titleName} </p>
            </div>
            <button class="delete">
              <img src="./images/icon-cross.svg" alt="icon-cross" />
            </button>
          </div>
  `;
    })
    .join("");
  tasksWrap.innerHTML = text;
  const inputsArr = document.querySelectorAll(".state");
  inputsArr.forEach(function (v, i) {
    v.addEventListener("change", function (e) {
      tasks[i].done = !tasks[i].done;
      affichage();
    });
  });
  const deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach(function (v, i) {
    v.addEventListener("click", function () {
      tasks.splice(i, 1);
      affichage();
    });
  });
  const itemsCount = tasks.filter((v) => v.done == false).length;

  itemsLeft.innerHTML = itemsCount;
}
affichage();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  tasks.push({
    titleName: add.value,
    done: false,
  });
  affichage();
  add.value = "";
});
