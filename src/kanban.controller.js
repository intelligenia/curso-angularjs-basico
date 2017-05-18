(function() {
    'use strict';

    angular
        .module('cursoangular.kanban')
        .controller('KanbanMainController', KanbanMainController);

    function KanbanMainController ( ) {
        var vm = this;

        // variables accesibles desde la vista
        vm.mycolor = "azul";   // texto que se muestra

        // métodos accesibles desde la vista
        vm.changeInfo = changeInfo;


        ///////////////////////////////////////////////////////////////////////////
        // IMPLEMENTACIÓN

        var colors = [ 'verde', 'azul', 'amarillo', 'rojo', 'morado'];
        var current_color = 0;

        /**
         * Ejecutado desde la vista cuando se pulsa el botón "Cambiar valor de variable"
         */
        function changeInfo ( ) {
            console.log("antes de cambiar, el color es: " + vm.mycolor);
            vm.mycolor = colors[current_color];
            current_color = ( current_color + 1 ) % colors.length;
        }

    }
})();