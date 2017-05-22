(function () {
    'use strict';

    angular
        .module('cursoangular.kanban')
        .controller('BoardController', BoardController);

    function BoardController ( board, BoardService ) {
        var vm = this;

        // variables accesibles desde la vista
        vm.board = board;
        vm.newFlowStepName = "";

        // Métodos
        vm.addFlowStep = addFlowStep;
        vm.addTask = addTask;


        // Implementación
        /**
         * Añade una nueva columna al tablero
         */
        function addFlowStep(flowStepName) {
            BoardService.flow_steps.add(vm.board.id, flowStepName, "una descripción")
                .then( function ( flowStep ) {
                    vm.board.flow_steps.push(flowStep);

                    // Borramos los datos del nuevo flow-step una vez añadido
                    vm.newFlowStepName = "";
                    vm.addingFlowStep = false;
                });
        }

        /**
         * Añade una nueva tarea a una columna
         * @param flow_step La columna donde añadir la nueva entrada
         */
        function addTask(flow_step){
            BoardService.flow_steps.tasks.add(flow_step.id, flow_step.newTaskName, "una descripción")
                .then( function ( task ) {
                    flow_step.tasks.push(task);

                    //Borramos los datos de la tarea una vez añadida
                    flow_step.newTaskName = "";
                    flow_step.isAddingTask = false;
                });

        }

        /**
         * Elimina una tarea
         * @param task  tarea
         */
        function removeTask(task){
            BoardService.flow_steps.tasks.remove(task.id)
                .then( function ( ) {
                    flow_step.tasks.splice(flow_step.tasks.indexOf(task), 1);
                });

        }


    }
})();
