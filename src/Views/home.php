<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/filtro.css">
    <link rel="stylesheet" href="css/home.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Nunito:wght@500&display=swap" rel="stylesheet">
    <title>Home</title>
</head>
<body>
    <header class="cabecalho">
        <img src="/icons/listIcon.svg" alt="logo" class="cabecalho__icone">
        <input type="text" id="filtro" class="cabecalho__filtro" placeholder="qual tarefa esta buscando?">
    </header>
    <main>
    <div class="ajust__botao__add">
        <button class="button__add__tarefa" onclick=adcionarTarefa()>Adicionar tarefa</button>
    </div>    

    <div class="add__tarefa__div">
        
    </div>
    <div class="botoes__edit__excluir">
        
    </div>
    
        <table >
            <tbody class="tabela">

            
            <tr class="tabela__titulo">
                <th class="tabela__titulo__campo__tarefa tabela__titulo__campo">
                    Tarefa
                </th>
                <th class="tabela__titulo__campo__local tabela__titulo__campo">
                    Local
                </th>
                <th class="tabela__titulo__campo__dia tabela__titulo__campo">
                    Dia
                </th>
                <th class="tabela__titulo__campo__horario tabela__titulo__campo">
                    Horario
                </th>
            </tr>
            <?php foreach($tarefas as $tarefa){ ?>

                <tr class="tabela__campo" id="tarefaLinha<?=$tarefa->id?>">
                    <th class="titulo" id="tarefa<?=$tarefa->id?>" onclick="addBotoesTarefa(<?=$tarefa->id?>)">
                        <?= $tarefa->tarefa; ?>
                    </th>
                    <th id="local<?=$tarefa->id?>" onclick="addBotoesLocal(<?=$tarefa->id?>)">
                        <?= $tarefa->local; ?>
                    </th>
                    <th id="data<?=$tarefa->id?>" onclick="addBotoesData(<?=$tarefa->id?>)">
                        <?= $tarefa->data; ?>
                    </th>
                    <th id="horario<?=$tarefa->id?>" onclick="addBotoesHorario(<?=$tarefa->id?>)">
                        <?= $tarefa->horario;  ?>
                    </th>
            <?php } ?>
            </tbody>
        </table>
    </main>
</body>
<script src="/js/jquery.js"></script>
<script src="/js/formAdicionarTarefa.js"></script>
<?php require __DIR__ . "/../../public/js/adicionarTarefa.php";?>
<script src="/js/botoesEditEx.js"></script>
<script src="/js/apagar.js"></script>
<script src="/js/editForm.js"></script>
<script src="/js/edit.js"></script>
<script src="/js/filtro.js"></script>
</html>