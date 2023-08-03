<?php

    namespace php\TarefasLista\Models;

    class Tarefa{

        protected int $id;
        protected string $tarefa;
        protected string $local;
        protected string $data;
        protected string $horario;


        public function __construct(int $id,string $tarefa, string $local, string $data, string $horario){
            $this->id = $id;
            $this->tarefa = $tarefa;
            $this->local = $local;
            $this->data = $data;
            $this->horario = $horario;
        }

        public function __get(string $valor){
            $funcao = "mostrar" . ucfirst($valor);
            return $this->$funcao();
        }

        public function mostrarId(){
            return $this->id;
        }

        public function mostrarTarefa(){
            return $this->tarefa;
        }

        public function mostrarLocal(){
            return $this->local;
        }

        public function mostrarData(){
            return $this->data;
        }

        public function mostrarHorario(){
            return $this->horario;
        }
    }