<?php

    namespace php\TarefasLista\Controllers;

    use php\TarefasLista\Models\Tarefa;
    use \PDO;

    class HomeController{

        protected PDO $pdo;

        public function __construct(PDO $pdo){
            $this->pdo = $pdo;
        }

        public function http(){
            $pdo = $this->pdo;
            $query = "SELECT * FROM tarefas;";

            $select = $pdo->query($query);
            $fetch = $select->fetchAll();

            $tarefas = [];

            foreach($fetch as $tarefa){
                $data_tarefa = explode(" ", $tarefa["data_tarefa"]);
                $tarefas[] = new Tarefa($tarefa["id"], $tarefa["tarefa"], $tarefa["local"], $data_tarefa[0], $data_tarefa[1]);
            }
        
            $querySelect = "SELECT nada FROM controlador WHERE id = ?;";
            $select = $pdo->prepare($querySelect);
            $select->bindValue(1,1);
            $select->execute();
            $nextId = $select->fetch()["nada"] + 1;

            require __DIR__ . "/../Views/home.php";
        }

    }