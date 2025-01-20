let nome;
let level;

while (true) {
    nome = prompt(`Bem Vindo a sua Lista de Tarefas! 
Digite seu nome:`);

    if (nome === "") {
        alert("Por favor, preencha o campo de nome");
    } else {
        break;
    }
}

while (true) {
    level = prompt("Escolha uma opção: \nIniciante\nIntermediário\nVeterano");

    if (level === "iniciante" || level === "intermediário" || level === "veterano") {
        break; // Sai do loop de escolhas
    } else {
        alert("Opção Inválida, Por favor escolha uma das opções acima.");
    }
}

switch (level) {
    case "iniciante":
        break;
    case "intermediário":
        break;
    case "veterano":
        break;
}

const user = document.getElementById('headText');
user.innerHTML = `Seja Bem-Vindo <strong>${nome}</strong>! <br>
Você está no nível: <strong>${level}</strong> <br>
Clique no botão e crie sua lista de tarefas.`;

function criarTarefa() {
    let taskContainer = document.getElementById('taskContainer');
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");

    let tarefa = document.createElement("p");
    tarefa.classList.add("tarefa");
    tarefa.innerText = prompt("Digite sua tarefa:");

    let check = document.createElement("input");
    check.classList.add("checkBox");

    check.type = "checkbox";
    check.name = "name";
    check.value = "value";
    check.id = "checkBox";

    let deleteBtn = document.createElement('button');
    deleteBtn.addEventListener('click', () => {
        tarefa.remove();
        check.remove();
        deleteBtn.remove();
        taskDiv.remove();
    });

    deleteBtn.innerHTML = "&#88;";
    deleteBtn.classList.add("deleteBtn");

    taskContainer.appendChild(taskDiv)
    taskDiv.appendChild(tarefa);
    taskDiv.appendChild(check);
    taskDiv.appendChild(deleteBtn);
}