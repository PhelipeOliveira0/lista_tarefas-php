function apagarLinha(id){
    let th = document.querySelector(`#tarefaLinha${id}`);
    let tarefa = document.querySelector(`#tarefa${id}`);
    let tabela = document.querySelector(`.tabela`);
    let local = document.querySelector(`#local${id}`);
    let data = document.querySelector(`#data${id}`);
    let horario = document.querySelector(`#horario${id}`);

    console.log(tarefa);
    console.log(tabela);
    console.log(local);
    console.log(data);
    console.log(horario);
    console.log(id);
    $.ajax({
        url : "/apagarTarefa",
        method : "post",
        data : {id : id},
        success : function(res){
            th.removeChild(horario);
            th.removeChild(tarefa);
            th.removeChild(local);
            th.removeChild(data);
            tabela.removeChild(th);
            sairBotoes(id);
        }
    })

}
