window.onload = () => {
  const taskList = [];

  const inTask = document.querySelector("input#inputTask");
  const inputButton = document.querySelector("#add").value;
  const main = document.querySelector("main");

  add.addEventListener("click", () => {
    inTaskValue = inTask.value;
    taskList.push(inTaskValue);

    taskList.forEach((task) => {
      const divTask = document.createElement("div");
      const taskItem = document.createElement("input");
      const buttonOk = document.createElement("button");
      const buttonEdit = document.createElement("button");
      const buttonRemove = document.createElement("button");
      const iOk = document.createElement("i");
      const iEdit = document.createElement("i");
      const iRemove = document.createElement("i");

      iOk.classList.add("fa-solid", "fa-check");
      iEdit.classList.add("fa-regular", "fa-pen-to-square");
      iRemove.classList.add("fa-solid", "fa-trash");

      buttonOk.appendChild(iOk);
      buttonEdit.appendChild(iEdit);
      buttonRemove.appendChild(iRemove);

      divTask.append(taskItem, buttonOk, buttonEdit, buttonRemove);

      taskItem.value = String(task);

      main.appendChild(divTask);
    });

    console.log(taskList);
  });

  //   main.appendChild();
};
