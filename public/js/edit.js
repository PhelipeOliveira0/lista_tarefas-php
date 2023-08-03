function editarTarefaJ(id){

    let input = document.querySelector(".inputEditar");
    let form = document.querySelector(".form__editar__tarefa");
    let dados = new FormData();
    dados.append("id", id);
    dados.append("alteracao", input.value);

    if(input.value == ""){
        form.addEventListener('submit', cancelarForm);
        return;
    }

    $.ajax({
        url : "/editarTarefa",
        method : "post",
        data : dados,
        contentType : false,
        processData : false,
        success : function(res){
           
            let campo = document.querySelector(`#tarefa${id}`);
            campo.textContent = input.value;

            removeFormTarefaj();

        }
    });
    form.addEventListener('submit', cancelarForm);

}

function editarLocalJ(id){

    let input = document.querySelector(".inputEditar");
    let form = document.querySelector(".form__editar__tarefa");
    let dados = new FormData();
    dados.append("id", id);
    dados.append("alteracao", input.value);

    if(input.value == ""){
        form.addEventListener('submit', cancelarForm);
        return;
    }

    $.ajax({
        url : "/editarLocal",
        method : "post",
        data : dados,
        contentType : false,
        processData : false,
        success : function(res){
            let campo = document.querySelector(`#local${id}`);
            
            campo.textContent = input.value;
            removeFormTarefaj();
        }
    });

    form.addEventListener('submit', cancelarForm);
}

function editarDataJ(id){

    let input = document.querySelector(".inputEditar");
    let form = document.querySelector(".form__editar__tarefa");
    let dados = new FormData();
    dados.append("id", id);
    dados.append("dia", input.value);

    if(input.value == ""){
        form.addEventListener('submit', cancelarForm);
        return;
    }

    $.ajax({
        url : "/editarData",
        method : "post",
        data : dados,
        contentType : false,
        processData : false,
        success : function(res){
            let campo = document.querySelector(`#data${id}`);
            
            campo.textContent = input.value;
            removeFormTarefaj();
        }
    });
    form.addEventListener('submit', cancelarForm);
}

function editarHorarioJ(id){

    let input = document.querySelector(".inputEditar");
    let form = document.querySelector(".form__editar__tarefa");
    form.addEventListener('submit', cancelarForm);
    let dados = new FormData();
    dados.append("id", id);
    dados.append("hora", input.value);

    $.ajax({
        url : "/editarHora",
        method : "post",
        data : dados,
        contentType : false,
        processData : false,
        success : function(res){
            let campo = document.querySelector(`#horario${id}`);
            console.log(input.value);
            campo.textContent = input.value;

            removeFormTarefaj();
        }
    });
    form.addEventListener('submit', cancelarForm);

}



function removeFormTarefaj(){

    let form = document.querySelector(".form__editar__tarefa");
    let input = document.querySelector(".inputEditar");
    let editar = document.querySelector(".button__ediar");
    let sair = document.querySelector(".button__sair");
    let div = document.querySelector(".botoes__edit__excluir");

    form.removeChild(input);
    form.removeChild(editar);
    form.removeChild(sair);
    div.removeChild(form);

    ativo = false;
    form.addEventListener('submit', cancelarForm);
}

function cancelarForm(event){
    event.preventDefault();
}

