window.onload = () => {
  const inTask = document.querySelector("input#inputTask");
  const main = document.querySelector("main");
  const tasks = document.querySelectorAll(".task");
  const editButtons = document.querySelectorAll(".edit");
  // adcao de evento de click para chamar a funcao de adcionar elemento a lista
  document.getElementById("add").addEventListener("click", adc);

  // funcao adcionar tarefa a lista
  function adc() {
    return inTask.value.trim() == "" ? vazio() : cadastro();
    // impedindo adcao de elemento vazio
    function vazio() {
      alert(
        "Nao é possivel adicionar tarefa(s) sem nome, descricao ou titulo."
      );
    }
    // criacao do elemnto representante da tarefa
    function cadastro() {
      const divTask = document.createElement("div");
      divTask.classList.add("task");
      const inputTask = document.createElement("input");
      const buttonEdit = document.createElement("button");
      const buttonRemove = document.createElement("button");
      const buttonOk = document.createElement("button");
      const buttonSave = document.createElement("button");
      //  adcionando funcao ao botao editar
      buttonEdit.onclick = () => {
        inputTask.removeAttribute("disabled");
        inputTask.focus();
        inputTask.setSelectionRange(
          inputTask.value.length,
          inputTask.value.length
        );

        buttonEdit.classList.add("noView");
        buttonOk.classList.add("noView");
        buttonRemove.classList.add("noView");

        buttonSave.classList.remove("noView");
      };
      // funcao salvar tarefa editada
      buttonSave.onclick = () => {
        inputTask.setAttribute("disabled", true);
        inputTask.blur();
        buttonEdit.classList.remove("noView");
        buttonOk.classList.remove("noView");
        buttonRemove.classList.remove("noView");

        buttonSave.classList.add("noView");
      };
      // funcao de remocao da tarefa da lista

      inputTask.value = inTask.value;
      inputTask.setAttribute("disabled", true);
      buttonEdit.textContent = "Editar";
      buttonRemove.textContent = "Excluir";
      buttonOk.textContent = "Ok";
      buttonSave.textContent = "Salvar";
      buttonSave.classList.add("noView");

      divTask.appendChild(inputTask);
      divTask.appendChild(buttonEdit);
      divTask.appendChild(buttonRemove);
      divTask.appendChild(buttonOk);
      divTask.appendChild(buttonSave);

      main.appendChild(divTask);
    }
  }
  // passa por cada botao de edicao e adciona a funcao para editar o elemento da tarefa na lista
  //   editButtons.forEach((btn) => {
  //     btn.onclick = () => {
  //       const tasks = btn.closest(".task");
  //       const input = tasks.querySelector("input");
  //       const length = input.value.length;

  //       input.removeAttribute("disabled");
  //       input.focus();
  //       input.setSelectionRange(length, length);

  //       btn.textContent = "Salvar";
  //       btn.classList.remove("task");
  //     };
  //   });
};
