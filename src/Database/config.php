<?php 

$username = "root";
$password = "uma senha muito maneira";

$pdo = new PDO('mysql:host=localhost;dbname=tarefas_lista', $username, $password);

$pdo->exec("CREATE TABLE tarefas(id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT, tarefa VARCHAR(100) NOT NULL, local VARCHAR(100), data_tarefa DATETIME NOT NULL);");
$pdo->exec("CREATE TABLE controlador(id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT, nada INTEGER);");
$queryControlador = "INSERT INTO controlador(nada)VALUES(:nada);";

$insertControlador = $pdo->prepare($queryControlador);
$insertControlador->bindValue(":nada", 0);
$insertControlador->execute();