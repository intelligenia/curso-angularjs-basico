(function () {
	'use strict';

	angular
		.module('cursoangular.kanban')
		.factory('BoardService', BoardService);


	function BoardService ( $http ) {
		// API pública de este servicio
		var api = {
			list: list,
			get: get,
			add: add
		};

		//////////////////////////////////////////////////////////////////////
		// IMPLEMENTACIÓN

		function list ( ) {
			return $http({
				url: '/api/project/',
				method: 'GET'
			})
				.then ( function ( res ) {
					console.log(res.data);
					return res.data;
				} );
		}

		function get ( boardId ) {
			return $http({
				url: '/api/project/' + boardId + '/',
				method: 'GET'
			})
				.then ( function ( res ) {
					console.log(res.data);
					return res.data;
				} );
		}

		function add ( ) {

		}

		return api;
	}

})();
