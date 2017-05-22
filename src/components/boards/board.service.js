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
			add: add,
			flow_steps: {
				list: listFS,
				get: getFS,
				add: addFS,
				tasks: {
					list: listTasks,
					get: getTask,
					add: addTask
				}
			}
		};

		//////////////////////////////////////////////////////////////////////
		// IMPLEMENTACIÓN

		// TABLEROS

		/**
		 * Listado de tableros
		 * @returns Una promesa con la respuesta HTTP. Si el estatus es 200 el listado de tableros
         */
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

		/**
		 * Información sobre un tablero
		 * @param boardId El identificador del tablero
         * @returns Una promesa con la respuesta HTTP. Si el estatus es 200 la información del tablero
         */
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

		/**
		 * Añade un nuevo tablero
		 * @param board Información sobre el tablero
		 * @returns Una promesa con la respuesta HTTP. Si el estatus es 200 el nuevo tablero añadido
		 */
		function add ( board ) {
			return $http({
				url: '/api/project/' + boardId + '/',
				method: 'POST',
				data: board
			})
				.then ( function ( res ) {
					console.log(res.data);
					return res.data;
				} );
		}

		///////////////////////
		// FLOW STEPS

		/**
		 * Listado de columnas (flow-step) de un determinado proyecto
		 * @param boardId El identificador del tablero
		 * @returns Una promesa con la respuesta HTTP. Si el estatus es 200 el listado de columnas
         */
		function listFS(boardId){
			return $http({
				url: '/api/flow-step/',
				method: 'GET'
			})
				.then ( function ( res ) {
					console.log(res.data);
					return res.data;
				} );
		}

		/**
		 * Obtiene los datos de una columna (flow-step)
		 * @param flowstepId El identificador de la columna (flow-step)
		 * @returns Una promesa con la respuesta HTTP. Si el estatus es 200 los datos de la columna
         */
		function getFS(flowstepId){

		}

		/**
		 * Añade una nueva columna (flow-step) a un tablero (board)
		 */
		function addFS(boardId, flowstep){

		}

		//////////////////////
		// TAREAS

		function listTasks(){

		}

		function getTask(){

		}

		function addTask(){

		}

		return api;
	}

})();
