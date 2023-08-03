<?php

    require __DIR__ . "/../vendor/autoload.php";

    use php\TarefasLista\Controllers\{HomeController,error404Controller,InsertController,DeleteController,EditarTarefaController,EditarLocalController, EditarDataController, EditarHoraController};

    $username = "root";
    $password = "uma senha muito maneira";
    
    $pdo = new PDO('mysql:host=localhost;dbname=tarefas_lista', $username, $password);

    $routes = require __DIR__ . "/../src/Routes/routes.php";
    $url = $_SERVER["REQUEST_URI"];

    if(array_key_exists($url, $routes)){
        $class = new $routes[$url]($pdo);
        $class->http();
    }else{
        $erro404 = new error404Controller();
        $erro404->http(); 
    }
