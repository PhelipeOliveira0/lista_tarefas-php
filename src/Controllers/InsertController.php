<?php

    namespace php\TarefasLista\Controllers;

    use \PDO;

    class InsertController{

        protected PDO $pdo;

        public function __construct(PDO $pdo){
            $this->pdo = $pdo;
        }

        public function http(){
            $pdo = $this->pdo;

            $tarefa = filter_input(INPUT_POST, "tarefa", FILTER_SANITIZE_STRING);
            $local = (filter_input(INPUT_POST, "local", FILTER_SANITIZE_STRING) === "") ? "---" : filter_input(INPUT_POST, "local", FILTER_SANITIZE_STRING);
            $data = filter_input(INPUT_POST, "data", FILTER_SANITIZE_STRING) . " " . filter_input(INPUT_POST, "horario", FILTER_SANITIZE_STRING);
            
            if(strlen($tarefa) === 0 || strlen(filter_input(INPUT_POST, "data", FILTER_SANITIZE_STRING)) === 0 || strlen(filter_input(INPUT_POST, "horario", FILTER_SANITIZE_STRING)) === 0){
                return;
            }

            $query = "INSERT INTO tarefas(tarefa, local, data_tarefa)VALUES(:tarefa, :local, :data_tarefa);";

            $insert = $pdo->prepare($query);
            $insert->bindValue(":tarefa", $tarefa);
            $insert->bindValue(":local", $local);
            $insert->bindValue(":data_tarefa", $data);
            $insert->execute();

            $querySelect = "SELECT nada FROM controlador WHERE id = ?;";
            $select = $pdo->prepare($querySelect);
            $select->bindValue(1,1);
            $select->execute();
            $contador = $select->fetch()["nada"] + 1;
            var_dump($contador);

            $queryUpdate = "Update controlador SET nada = ?;";
            $update = $pdo->prepare($queryUpdate);
            $update->bindValue(1,$contador);
            $update->execute();
        }

    }