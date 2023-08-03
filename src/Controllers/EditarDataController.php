<?php

    namespace php\TarefasLista\Controllers;

    use \PDO;

    class EditarDataController{

        protected PDO $pdo;

        public function __construct(PDO $pdo){
            $this->pdo = $pdo;
        }

        public function http(){

            $id = filter_input(INPUT_POST, "id", FILTER_VALIDATE_INT);
            $data = filter_input(INPUT_POST, "dia", FILTER_SANITIZE_STRING);
            $pdo = $this->pdo;


            $querySelect = "SELECT data_tarefa FROM tarefas WHERE id = ?;";
            $select = $pdo->prepare($querySelect);
            $select->bindValue(1, $id);
            $select->execute();

            $fetch = $select->fetch();
            
            $dataArray = explode(" ",$fetch["data_tarefa"]);
            $dataArray[0] = $data;
            
            var_dump($data);
            $dataCompleta = implode(" ", $dataArray);
            var_dump($dataCompleta);

            $query = "UPDATE tarefas SET data_tarefa = :data WHERE id = :id;";
            $update = $pdo->prepare($query);
            $update->bindValue(":data", $dataCompleta);
            $update->bindValue(":id", $id);
            $update->execute();
        
        }

    }