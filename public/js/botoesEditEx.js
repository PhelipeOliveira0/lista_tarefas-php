let ativo = false;


function addBotoesTarefa(id){

    if(ativo === false){

        let div = document.querySelector(`.botoes__edit__excluir`); 
    
        let apagar = document.createElement("BUTTON");
        apagar.setAttribute("id", `apagar${id}`);
        apagar.classList.add("botao__apagar__item");
        apagar.setAttribute("onclick", `apagarLinha(${id})`);
        apagar.textContent = "apagar";

        let editar = document.createElement("BUTTON");
        editar.setAttribute("id",id);
        editar.classList.add("botao__edit__item");
        editar.setAttribute("onclick", `editarTarefa(${id})`);
        editar.setAttribute("id",`edit${id}`);
        editar.textContent = "editar";

        let sair = document.createElement("BUTTON");
        sair.classList.add("botao__sair__item");
        sair.setAttribute("onclick",`sairBotoes(${id})`);
        sair.setAttribute("id", `sair${id}`);
        sair.textContent = "X";

        div.appendChild(apagar);
        div.appendChild(editar);
        div.appendChild(sair);
    
    }

    ativo = true;

}

function addBotoesLocal(id){

    if(ativo === false){

        let div = document.querySelector(`.botoes__edit__excluir`); 
    
        let apagar = document.createElement("BUTTON");
        apagar.setAttribute("id", id);
        apagar.classList.add("botao__apagar__item");
        apagar.setAttribute("onclick", `apagarLinha(${id})`);
        apagar.textContent = "apagar";
        apagar.setAttribute("id", `apagar${id}`);

        let editar = document.createElement("BUTTON");
        editar.setAttribute("id",id);
        editar.textContent = "editar"
        editar.classList.add("botao__edit__item");
        editar.setAttribute("onclick", `editarLocal(${id})`);
        editar.setAttribute("id",`edit${id}`);

        let sair = document.createElement("BUTTON");
        sair.classList.add("botao__sair__item");
        sair.textContent = "X";
        sair.setAttribute("onclick",`sairBotoes(${id})`);
        sair.setAttribute("id", `sair${id}`);

        div.appendChild(apagar);
        div.appendChild(editar);
        div.appendChild(sair);
    
    }
    ativo = true;
}

function addBotoesData(id){

    if(ativo === false){

        let div = document.querySelector(`.botoes__edit__excluir`); 
    
        let apagar = document.createElement("BUTTON");
        apagar.setAttribute("id", id);
        apagar.classList.add("botao__apagar__item");
        apagar.textContent = "apagar";
        apagar.setAttribute("onclick", `apagarLinha(${id})`);
        apagar.textContent = "apagar";
        apagar.setAttribute("id", `apagar${id}`);

        let editar = document.createElement("BUTTON");
        editar.setAttribute("id",id);
        editar.textContent = "editar";
        editar.classList.add("botao__edit__item");
        editar.setAttribute("onclick", `editarData(${id})`);
        editar.setAttribute("id",`edit${id}`);

        let sair = document.createElement("BUTTON");
        sair.classList.add("botao__sair__item");
        sair.textContent = "X";
        sair.setAttribute("onclick",`sairBotoes(${id})`);
        sair.setAttribute("id", `sair${id}`);
        
        div.appendChild(apagar);
        div.appendChild(editar);
        div.appendChild(sair);
    
    }
    ativo = true;

}

function addBotoesHorario(id){

    if(ativo === false){

        let div = document.querySelector(`.botoes__edit__excluir`); 
    
        let apagar = document.createElement("BUTTON");
        apagar.setAttribute("id", id);
        apagar.classList.add("botao__apagar__item");
        apagar.setAttribute("onclick", `apagarLinha(${id})`);
        apagar.textContent = "apagar";
        apagar.setAttribute("id", `apagar${id}`);

        let editar = document.createElement("BUTTON");
        editar.setAttribute("id",`edit${id}`);
        editar.classList.add("botao__edit__item");
        editar.textContent = "editar";
        editar.setAttribute("onclick", `editarHorario(${id})`);
    
        let sair = document.createElement("BUTTON");
        sair.classList.add("botao__sair__item");
        sair.textContent = "X";
        sair.setAttribute("onclick",`sairBotoes(${id})`);
        sair.setAttribute("id", `sair${id}`);
        
    
        div.appendChild(apagar);
        div.appendChild(editar);
        div.appendChild(sair);
    
    }
    ativo = true;

}


function sairBotoes(id){

    let div = document.querySelector(`.botoes__edit__excluir`);
    let apagar = document.querySelector(`#apagar${id}`);
    let editar = document.querySelector(`#edit${id}`);
    let sair = document.querySelector(`#sair${id}`);

    div.removeChild(apagar);
    div.removeChild(editar);
    div.removeChild(sair);

    ativo = false;

}

function sairBotoesEdit(id){

    let div = document.querySelector(`.botoes__edit__excluir`);
    let apagar = document.querySelector(`#apagar${id}`);
    let editar = document.querySelector(`#edit${id}`);
    let sair = document.querySelector(`#sair${id}`);

    div.removeChild(apagar);
    div.removeChild(editar);
    div.removeChild(sair);

}

