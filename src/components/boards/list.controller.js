(function () {
    'use strict';

    angular
        .module('cursoangular.kanban')
        .controller('BoardListController', BoardListController);

    function BoardListController() {
        var vm = this;

        // variables accesibles desde la vista
        vm.boards = [];



    }
})();