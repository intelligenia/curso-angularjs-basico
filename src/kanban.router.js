(function () {
    'use strict';

    angular
        .module('cursoangular.kanban')
        .config(config);


	function config ( $locationProvider, $routeProvider ) {
		//$locationProvider.html5Mode(true);

		$routeProvider
			.when('/boards', {
				templateUrl: 'components/boards/list.view.html',
				controller: 'BoardListController as vm',
				resolve: {
					boards: getBoardList
				}
			})

			.when('/boards/:boardId', {
				templateUrl: 'components/boards/board.view.html',
				controller: 'BoardController as vm',
				resolve: {
					board: getBoard
				}
			})

			.when('/intro', {
				templateUrl: 'index.html',
				controller: 'KanbanMainController as vm'
			})

			.otherwise('/boards');
	}


    function getBoardList ( BoardService ) {
		return BoardService.list();
	}

    function getBoard ( $route, BoardService ) {
		return BoardService.get($route.current.params.boardId);
	}

})();