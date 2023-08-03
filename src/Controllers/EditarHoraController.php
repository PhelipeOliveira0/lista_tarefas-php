<?php

    namespace php\TarefasLista\Controllers;

    use \PDO;

    class EditarHoraController{

        protected PDO $pdo;

        public function __construct(PDO $pdo){
            $this->pdo = $pdo;
        }

        public function http(){

            $id = filter_input(INPUT_POST, "id", FILTER_VALIDATE_INT);
            $hora = filter_input(INPUT_POST, "hora", FILTER_SANITIZE_STRING);
            $pdo = $this->pdo;


            $querySelect = "SELECT data_tarefa FROM tarefas WHERE id = ?;";
            $select = $pdo->prepare($querySelect);
            $select->bindValue(1, $id);
            $select->execute();

            $fetch = $select->fetch();
            
            $dataArray = explode(" ",$fetch["data_tarefa"]);
            $dataArray[1] = $hora;
            

            $dataCompleta = implode(" ", $dataArray);


            $query = "UPDATE tarefas SET data_tarefa = :data WHERE id = :id;";
            $update = $pdo->prepare($query);
            $update->bindValue(":data", $dataCompleta);
            $update->bindValue(":id", $id);
            $update->execute();
        
        }

    }