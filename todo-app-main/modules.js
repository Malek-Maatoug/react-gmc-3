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
function affichage(arr = tasks) {
  const text = arr
    .map(function (v) {
      const { done, titleName } = v;
      return `
      <div class="single-task flex between">
              <div class="flex">
                <form class="checked">
                  <input type="checkbox" ${
                    done ? "checked" : ""
                  }  class="state" />
                </form>
                <p class="${done == true ? "lined" : ""}">${titleName} </p>
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
export { affichage, tasks };
