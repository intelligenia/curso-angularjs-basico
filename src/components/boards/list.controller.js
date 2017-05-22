(function () {
    'use strict';

    angular
        .module('cursoangular.kanban')
        .controller('BoardListController', BoardListController);

    function BoardListController( boards, BoardService ) {
        var vm = this;

        // variables accesibles desde la vista
        vm.boards = boards;              // lista de tableros
        vm.is_adding_board = false;      // indica si se está añadiendo un nuevo tablero
        vm.new_board_name = "";          // nombre del nuevo tablero

        // métodos accesibles desde la vista
        vm.addBoard = addBoard;      // invocado al hacer click en el botón de añadir tablero


        ////////////////////////////////////////////////////////////////
        // IMPLEMENTACIÓN

        /**
         *
         * @param boardName String  nombre del tablero
         */
        function addBoard ( boardName ) {
            BoardService.add({
                "name": boardName,
                "description": "una descripción",
                "customer": 1
            })
                .then( function ( board ) {
                    vm.boards.push(board);
                    vm.is_adding_board = false;
                    vm.new_board_name = "";
                } );

        }
    }
})();
