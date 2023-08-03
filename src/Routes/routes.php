<?php

    use php\TarefasLista\Controllers\{HomeController, InsertController, DeleteController, EditarTarefaController, EditarLocalController, EditarDataController, EditarHoraController};

    $routes = ["/" => HomeController::class,
                "/adicionarTarefa" => InsertController::class,
                 "/apagarTarefa" => DeleteController::class,
                 "/editarTarefa" => EditarTarefaController::class,
                 "/editarLocal" => EditarLocalController::class,
                 "/editarData" => EditarDataController::class,
                 "/editarHora" => EditarHoraController::class,
                ];

    return $routes;