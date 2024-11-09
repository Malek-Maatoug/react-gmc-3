const form = document.querySelector("form");
const add = document.querySelector("#add");
const tasksWrap = document.querySelector("#tasks-wrap");
let tasks = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  tasks.push({
    ibtihel: add.value,
    done: false,
  });
  const text = tasks
    .map(function (v) {
      return `
      <div class="single-task flex between">
              <div class="flex">
                <form class="checked">
                  <input type="checkbox" class="state" />
                </form>
                <p>${v.ibtihel} </p>
              </div>
              <button class="delete">
                <img src="./images/icon-cross.svg" alt="icon-cross" />
              </button>
            </div>
    `;
    })
    .join("");
  tasksWrap.innerHTML = text;

  add.value = "";
});
