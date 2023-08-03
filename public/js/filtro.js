let campoFiltro = document.querySelector("#filtro");
campoFiltro.addEventListener("input",function(){
    let tarefas = document.querySelectorAll(".tabela__campo");
    console.log(this.value)
    if(this.value.length > 0){
        for(let i = 0; i < tarefas.length; i++){
        let tarefa = tarefas[i];
        let pNome = tarefa.querySelector(".titulo");
        let nome = pNome.textContent;
        var expressao = new RegExp(this.value,"i");
        if(!expressao.test(nome)){
            tarefa.classList.add("escondido");
        }else{
            tarefa.classList.remove("escondido");
        }
        
        }
            
    }else{
        for(let i = 0; i < tarefas.length; i++){
            let tarefa = tarefas[i];
            tarefa.classList.remove("escondido");
        }
        
    }
});