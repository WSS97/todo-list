const inTask = document.querySelector("input#inputTask");
const main = document.querySelector("main");
const tasks = documento.querySelectorAll("div.task");

function add() {
  return inTask.value.trim() == "" ? vazio() : cadastro();
}

const vazio = () => {
  alert("Informe a tarefa para poder adcionar a lista!");
};

function cadastro() {
  main.innerHTML += `<div class="task">
        <input type="text" value="${inTask.value}" disabled />
        <button>Editar</button>
        <button>Excluir</button>
        <button>ok</button>
      </div>`;
  inTask.value = "";
}

function edit() {
  console.log(tasks);
}
