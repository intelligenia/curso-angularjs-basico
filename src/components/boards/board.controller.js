(function () {
    'use strict';

    angular
        .module('cursoangular.kanban')
        .controller('BoardController', BoardController);

    function BoardController ( board ) {
        var vm = this;

        // variables accesibles desde la vista
        vm.board = board;

        // Métodos
        vm.addColumn = addColumn;
        vm.addTask = addTask;


        // Implementación
        /**
         * Añade una nueva columna al tablera
         * @param columnName El nombre de la columna a añadir
         */
        function addColumn() {
            vm.board.cols.push({
                name: vm.columnname,
                tasks: []
            });
            vm.newcol = false;
            vm.columnname = "";
        }

        /**
         * Añade una nueva tarea a una columna
         * @param col La columna donde añadir la nueva entrada
         * @param task El contenido de la tarea
         */
        function addTask(col){
            col.tasks.push(col.task);
            col.newTask = false;
            col.task = "";
        }


    }
})();
