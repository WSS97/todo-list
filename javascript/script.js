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
      main.innerHTML += `<div class="task">
            <input type="text" value="${inTask.value}" disabled />
            <button class="edit">Editar</button>
        <button onclick="remove()">Excluir</button>
        <button onclick="ok()">ok</button>
        </div>`;
      inTask.value = "";
    }
  }
  // passa por cada botao de edicao e adciona a funcao para editar o elemento da tarefa na lista
  editButtons.forEach((btn) => {
    btn.onclick = () => {
      const tasks = btn.closest(".task");
      const input = tasks.querySelector("input");
      const length = input.value.length;

      input.removeAttribute("disabled");
      input.focus();
      input.setSelectionRange(length, length);

      btn.textContent = "Salvar";
    };
  });
};
