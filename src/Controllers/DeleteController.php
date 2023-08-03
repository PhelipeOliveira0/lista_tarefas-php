<?php

    namespace php\TarefasLista\Controllers;

    class DeleteController{

        public function __construct($pdo){
            $this->pdo = $pdo;
        }

        public function http(){
            
            $id = filter_input(INPUT_POST,"id",FILTER_VALIDATE_INT);

            $pdo = $this->pdo;
            $query = "DELETE FROM tarefas WHERE id = ?;";
            
            $delete = $pdo->prepare($query);
            $delete->bindValue(1,$id);
            $delete->execute();

        }

    }