function editarTarefa(id){
    sairBotoesEdit(id);
    
    let div = document.querySelector(".botoes__edit__excluir");
    

    let form = document.createElement("FORM");
    form.method = "POST";
    form.action = "http://localhost:8080/EditTarefa";
    form.classList.add("form__editar__tarefa")
    
    let input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.classList.add(`inputEditar`);
    input.setAttribute("placeholder", "Nova tarefa")

    let button = document.createElement("BUTTON");
    button.classList.add("button__ediar");
    button.textContent = "Editar";
    button.setAttribute("onclick", `editarTarefaJ(${id})`);

    let sair = document.createElement("BUTTON");
    sair.classList.add("button__sair");
    sair.setAttribute("onclick",`removeFormTarefaj()`);
    sair.textContent = "X"

    div.appendChild(form);
    form.appendChild(input);
    form.appendChild(button);
    form.appendChild(sair);

}

function editarLocal(id){

    sairBotoesEdit(id);

    let div = document.querySelector(".botoes__edit__excluir");
    

    let form = document.createElement("FORM");
    form.method = "POST";
    form.action = "http://localhost:8080/EditLocal";
    form.classList.add("form__editar__tarefa")

    let input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.classList.add(`inputEditar`);
    input.setAttribute("placeholder", "Editar local")

    let button = document.createElement("BUTTON");
    button.classList.add("button__ediar");
    button.textContent = "Editar";
    button.setAttribute("onclick", `editarLocalJ(${id})`);

    let sair = document.createElement("BUTTON");
    sair.classList.add("button__sair");
    sair.setAttribute("onclick",`removeFormTarefaj()`);
    sair.textContent = "X"

    div.appendChild(form);
    form.appendChild(input);
    form.appendChild(button);
    form.appendChild(sair);
    
}

function editarData(id){

    sairBotoesEdit(id);

    let div = document.querySelector(".botoes__edit__excluir");
    
    let form = document.createElement("FORM");
    form.method = "POST";
    form.action = "http://localhost:8080/EditData";
    form.classList.add("form__editar__tarefa")

    let hoje = new Date().toISOString().split("T")[0];
    let input = document.createElement("INPUT");
    input.setAttribute("type", "date");
    input.classList.add(`inputEditar`);
    input.textContent = "Editar";
    input.setAttribute("min",hoje);

    let button = document.createElement("BUTTON");
    button.classList.add("button__ediar");
    button.textContent = "Editar";
    button.setAttribute("onclick", `editarDataJ(${id})`);

    let sair = document.createElement("BUTTON");
    sair.classList.add("button__sair");
    sair.setAttribute("onclick",`removeFormTarefaj()`);
    sair.textContent = "X"
    
    div.appendChild(form);
    form.appendChild(input);
    form.appendChild(button);
    form.appendChild(sair);

}

function editarHorario(id){

    sairBotoesEdit(id);

    let div = document.querySelector(".botoes__edit__excluir");

    let form = document.createElement("FORM");
    form.method = "POST";
    form.action = "http://localhost:8080/EditHorario";
    form.classList.add("form__editar__tarefa")

    let input = document.createElement("INPUT");
    input.setAttribute("type", "time");
    input.classList.add(`inputEditar`);

    let button = document.createElement("BUTTON");
    button.classList.add("button__ediar");
    button.textContent = "Editar";
    button.setAttribute("onclick", `editarHorarioJ(${id})`);

    let sair = document.createElement("BUTTON");
    sair.classList.add("button__sair");
    sair.setAttribute("onclick",`removeFormTarefaj()`);
    sair.textContent = "X"

    div.appendChild(form);
    form.appendChild(input);
    form.appendChild(button);
    form.appendChild(sair);

}