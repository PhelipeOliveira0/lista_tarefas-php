<?php

    namespace php\TarefasLista\Controllers;

    class error404Controller{

        public function http(){
            require __DIR__ . "/../Views/erro404.php";
        }
    }