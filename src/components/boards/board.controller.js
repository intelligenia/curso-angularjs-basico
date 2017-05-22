(function () {
    'use strict';

    angular
        .module('cursoangular.kanban')
        .controller('BoardController', BoardController);

    function BoardController ($uibModal, board, BoardService, ErrorAlertService ) {
        var vm = this;

        // variables accesibles desde la vista
        vm.board = board;
        vm.newFlowStepName = "";

        // Métodos
        vm.addFlowStep = addFlowStep;    // añadir lista
        vm.addTask = addTask;            // añadir tarea a lista
        vm.removeTask = removeTask;      // eliminar tarea
        vm.openTask = openTask;          // mostrar modal con tarea

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
                })

                .catch( function ( res ) {
                    ErrorAlertService.apiError(res);
                });
        }

        /**
         * Añade una nueva tarea a una columna
         * @param flowStep La columna donde añadir la nueva entrada
         */
        function addTask(flowStep){
            BoardService.flow_steps.tasks.add(flowStep.id, flowStep.newTaskName, "una descripción")
                .then( function ( task ) {
                    flowStep.tasks.push(task);

                    //Borramos los datos de la tarea una vez añadida
                    flowStep.newTaskName = "";
                    flowStep.isAddingTask = false;
                })

                .catch( function ( res ) {
                    ErrorAlertService.apiError(res);
                });
        }

        /**
         * Elimina una tarea
         * @param flowStep  lista
         * @param task  tarea
         */
        function removeTask(flowStep, task){
            BoardService.flow_steps.tasks.remove(task.id)
                .then( function ( ) {
                    flowStep.tasks.splice(flowStep.tasks.indexOf(task), 1);
                })
                .catch( function ( res ) {
                    ErrorAlertService.apiError(res);
                });
        }


        function openTask(task) {
            var modal = $uibModal.open({
                controller: "TaskController as tVm",
                templateUrl: "components/boards/dialogs/task.view.html",
                resolve:{
                    task: function ( ) { return task; }
                }
            });

            modal.result.catch(function(res){
                console.log(res)
            })

        }
    }
})();
