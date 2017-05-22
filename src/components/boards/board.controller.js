(function () {
    'use strict';

    angular
        .module('cursoangular.kanban')
        .controller('BoardController', BoardController);

    function BoardController ( board, BoardService ) {
        var vm = this;

        // variables accesibles desde la vista
        vm.board = board;
        vm.new_flow_step = {};

        // Métodos
        vm.addFlowStep = addFlowStep;
        vm.addTask = addTask;


        // Implementación
        /**
         * Añade una nueva columna al tablero
         */
        function addFlowStep() {
            BoardService.flow_steps.add(vm.board.id, vm.new_flow_step).then(function(response){
                vm.board.flow_steps.push(response.data);

                // Borramos los datos del nuevo flow-step una vez añadido
                vm.new_flow_step = {};
                vm.addingFlowStep = false;
            });

        }

        /**
         * Añade una nueva tarea a una columna
         * @param flow_step La columna donde añadir la nueva entrada
         */
        function addTask(flow_step){
            BoardService.flow_steps.tasks.add(flow_step.id, flow_step.new_task).then(function(response){
                flow_step.tasks.push(response.data);

                //Borramos los datos de la tarea una vez añadida
                flow_step.new_task = {};
                flow_step.isAddingTask = false;
            });

        }


    }
})();
