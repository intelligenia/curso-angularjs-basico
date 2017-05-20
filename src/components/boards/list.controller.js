(function() {
    'use strict';

    angular
        .module('cursoangular.kanban')
        .controller('BoardListController', BoardListController);

    function BoardListController ( ) {
        var vm = this;

        // variables accesibles desde la vista
        vm.board = {};
        vm.board.name = "Nombre del tablero";
        vm.board.cols = [
            {
                name: "Columna 1",
                entries: [
                    "Entrada 1", "Entrada 2"
                ]
            },
            {
                name: "Columna 2",
                entries: [
                    "Entrada 1", "Entrada 2"
                ]
            }
        ]


    }
})();
