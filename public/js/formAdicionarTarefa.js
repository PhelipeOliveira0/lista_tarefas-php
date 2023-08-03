let divForm = document.querySelector(".add__tarefa__div");
let formOn = false;
let hoje = new Date().toISOString().split("T")[0];
let controlador = document.querySelector(".coisa");


function adcionarTarefa(){
    
    if(formOn === false){

        let form = document.createElement("FORM");
        form.method = "POST";
        form.action = "http://localhost:8080/Insert";
        form.classList.add("form__add");

        let labelTarefa = document.createElement("LABEL");
        labelTarefa.textContent = "Tarefa:";

        let tarefa = document.createElement("INPUT");
        tarefa.setAttribute("type","text");
        tarefa.setAttribute("name","tarefa");
        tarefa.setAttribute("placeholder","reunião de marketing");
        tarefa.classList.add("form__add__tarefa");
        tarefa.setAttribute("required", "true");

        let labelLocal = document.createElement("LABEL");
        labelLocal.textContent = "Local:"

        let local = document.createElement("INPUT");
        local.setAttribute("type", "text");
        local.setAttribute("name","local");
        local.setAttribute("placeholder","Rua bla bla bla...");
        local.classList.add("form__add__local");

        let labelData = document.createElement("LABEL");
        labelData.textContent = "Data:";

        let data = document.createElement("INPUT");
        data.setAttribute("type", "date");
        data.setAttribute("name","data");
        data.setAttribute("min",hoje);
        data.classList.add("form__add__data");
        data.setAttribute("required", "true");

        let labelHorario = document.createElement("LABEL");
        labelHorario.textContent = "Horario:";

        let horario = document.createElement("INPUT");
        horario.setAttribute("type", "time");
        horario.setAttribute("name","horario");
        horario.classList.add("form__add__horario");

        let divBotoes = document.createElement("div");
        divBotoes.classList.add("form__add__div__botoes");

        let botaoEnvio = document.createElement("BUTTON");
        botaoEnvio.textContent = "Enviar";
        botaoEnvio.classList.add("form__add__enviar");
        botaoEnvio.setAttribute("onclick","adicionarTarefa()");

        let botaoFechar = document.createElement("BUTTON");
        botaoFechar.classList.add("form__add__fechar");
        botaoFechar.textContent = "X";
        botaoFechar.setAttribute("onclick","fecharFormAdd()");

        divBotoes.appendChild(botaoEnvio);
        divBotoes.appendChild(botaoFechar);
        form.appendChild(labelTarefa);
        form.appendChild(tarefa);
        form.appendChild(labelLocal);
        form.appendChild(local);
        form.appendChild(labelData);
        form.appendChild(data);
        form.appendChild(labelHorario);
        form.appendChild(horario);
        form.appendChild(divBotoes);
        divForm.appendChild(form);
        form.addEventListener('submit', cancelarForm);
        
        formOn = true;
        
    }
}

function fecharFormAdd(){
    let form = document.querySelector(".form__add"); 

    divForm.removeChild(form);
    formOn = false;
    
}

function cancelarForm(event){
    event.preventDefault();
}