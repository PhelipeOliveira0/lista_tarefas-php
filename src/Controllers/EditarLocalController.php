<?php

    namespace php\TarefasLista\Controllers;

    use \PDO;

    class EditarLocalController{

        protected PDO $pdo;

        public function __construct(PDO $pdo){
            $this->pdo = $pdo;
        }

        public function http(){

            $local = filter_input(INPUT_POST, "alteracao", FILTER_SANITIZE_STRING);
            $id = filter_input(INPUT_POST, "id", FILTER_VALIDATE_INT);

            $pdo = $this->pdo;
            $query = "UPDATE tarefas SET local = :local WHERE id = :id;";

            $update = $pdo->prepare($query);
            $update->bindValue(":local", $local);
            $update->bindValue(":id", $id);
            $update->execute();
        }

    }