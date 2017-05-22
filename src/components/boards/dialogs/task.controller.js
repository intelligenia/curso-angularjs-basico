(function () {
    'use strict';

    angular
        .module('cursoangular.kanban')
        .controller('TaskController', TaskController);

    function TaskController ( $uibModalInstance, task, ErrorAlertService ) {
        var tVm = this;

        // variables accesibles desde la vista
        tVm.task = task;

        // Métodos
        tVm.close = close;

        // Implementación
        function close () {
            $uibModalInstance.close(tVm.task);
        }
    }
})();
