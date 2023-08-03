<?php

    namespace php\TarefasLista\Controllers;

    use \PDO;

    class EditarTarefaController{

        protected PDO $pdo;

        public function __construct(PDO $pdo){
            $this->pdo = $pdo;
        }

        public function http(){

            $valor = filter_input(INPUT_POST, "alteracao", FILTER_SANITIZE_STRING);
            $id = filter_input(INPUT_POST, "id", FILTER_VALIDATE_INT);

            $pdo = $this->pdo;
            $query = "UPDATE tarefas SET tarefa = :tarefa WHERE id = :id;";
            $update = $pdo->prepare($query);
            $update->bindValue(":tarefa", $valor);
            $update->bindValue(":id", $id);
            $update->execute();
        }

    }
