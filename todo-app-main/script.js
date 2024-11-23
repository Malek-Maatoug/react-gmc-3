"use strict";
const form = document.querySelector("form");
const add = document.querySelector("#add");
const tasksWrap = document.querySelector("#tasks-wrap");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const completed = document.querySelector(".completed");
const clearCompleted = document.querySelector(".clear-completed");
import { affichage, tasks } from "./modules.js";

affichage();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  tasks = [
    ...tasks,
    {
      titleName: add.value,
      done: false,
    },
  ];
  affichage();
  add.value = "";
});
all.addEventListener("click", () => {
  affichage();
});
active.addEventListener("click", () => {
  const filtered = tasks.filter((v) => !v.done);
  affichage(filtered);
});
completed.addEventListener("click", () => {
  const filtered = tasks.filter((v) => v.done);
  affichage(filtered);
});
clearCompleted.addEventListener("click", () => {
  alert("are u sure!");
  tasks = tasks.filter((v) => !v.done);
  affichage();
});
const person = {
  name: "islem",
  phone: 25547855,
  cin: 22478963,
  present: true,
};
const { phone, name, present, cin } = person;
tasksWrap.innerHTML = `i'm ${name}, my phone number is : ${phone}`;

const addFn = (x = 20, y = 50) => {
  return x + y;
};
console.log(addFn());
