(function () {
    'use strict';

    angular
        .module('cursoangular.kanban')
        .config(['$locationProvider', '$routeProvider',
            function ($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');

                $routeProvider.when('/boards', {
                    templateUrl: 'components/boards/board.view.html',
                    controller: 'BoardController as vm'
                }).when('/boards/:boardId', {
                    templateUrl: 'components/boards/board.view.html'
                }).otherwise('/boards');
            }
        ]);

})();