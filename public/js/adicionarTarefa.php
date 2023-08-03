<script>

    controlador = "<?= $nextId?>"
    
    function adicionarTarefa(){

        let tarefaInput = document.querySelector(".form__add__tarefa").value;
        let localInput = document.querySelector(".form__add__local").value;
        let dataInput = document.querySelector(".form__add__data").value;
        let horarioInput = document.querySelector(".form__add__horario").value;

        let dados = new FormData();

        dados.append("tarefa", tarefaInput);
        dados.append("local", localInput);
        dados.append("data", dataInput);
        dados.append("horario", horarioInput);

        if(tarefaInput == "" || localInput == "" || dataInput == ""){
            return;
        }

        $.ajax({
            url : "/adicionarTarefa",
            method : "post",
            data : dados,
            contentType : false,
            processData : false,
            success : function(res){
                let tabela = document.querySelector(".tabela");
                
                let tr = document.createElement("TR");
                tr.classList.add("tabela__campo");
                tr.setAttribute("id", `tarefaLinha${controlador}`);

                let thTarefa = document.createElement("TH");
                thTarefa.setAttribute("id", `tarefa${controlador}`);
                thTarefa.textContent = tarefaInput;
                thTarefa.setAttribute("onclick", `addBotoesTarefa(${controlador})`);

                let thLocal = document.createElement("TH");
                thLocal.setAttribute("id", `local${controlador}`);
                thLocal.textContent = localInput;
                thLocal.setAttribute("onclick", `addBotoesLocal(${controlador})`);

                let thData = document.createElement("TH");
                thData.setAttribute("id", `data${controlador}`);
                thData.textContent = dataInput; 
                thData.setAttribute("onclick", `addBotoesData(${controlador})`);

                let thHorario = document.createElement("TH");
                thHorario.setAttribute("id", `horario${controlador}`);
                if(thHorario != ""){
                    thHorario.textContent = horarioInput;
                }else{
                    thHorario.textContent = "---";
                }
                thHorario.setAttribute("onclick", `addBotoesHorario(${controlador})`);

                tabela.appendChild(tr);
                tr.appendChild(thTarefa);
                tr.appendChild(thLocal);
                tr.appendChild(thData);
                tr.appendChild(thHorario);
                fecharFormAdd();
                controlador++;
            }
        });
    }
</script>
