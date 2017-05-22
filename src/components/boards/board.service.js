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
				add: addFS,
				tasks: {
					add: addTask,
					remove: removeTask
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
				url: '/api/project/',
				method: 'POST',
				data: board
			})
				.then ( function ( res ) {
					return res.data;
				} );
		}

		///////////////////////
		// FLOW STEPS

		/**
		 * Añade una nueva columna (flow-step) a un tablero (board)
		 */
		function addFS(boardId, flowStepName, flowStepDescription){
			return $http({
				url: '/api/flow_step/',
				method: 'POST',
				data: {
					name: flowStepName,
					project: boardId,
					description: flowStepDescription
				}
			})
				.then ( function ( res ) {
					return res.data;
				} );
		}

		//////////////////////
		// TAREAS

		/**
		 * Añade una tarea a una columna (flow-step) de un tablero
		 * @param flowstepId El identificador de la columna (flow-step) donde irá la tarea
		 * @param taskName La tarea a añadir
		 * @param taskDescription Descripción de la tarea
		 * @returns Una promesa con la respuesta HTTP. Si el estatus es 200 los datos de la tarea creada
         */
		function addTask(flowstepId, taskName, taskDescription){
			return $http({
				url: '/api/task/',
				method: 'POST',
				data: {
					name: taskName,
					description: taskDescription,
					flow_step: flowstepId
				}
			})
				.then ( function ( res ) {
					return res.data;
				} );
		}

		/**
		 * Eliminar la tarea indicada
		 * @param taskId El identificador de la tarea a eliminar
		 * @returns Una promesa con la respuesta HTTP.
         */
		function removeTask(taskId){
			return $http({
				url: '/api/task/' + taskId + '/',
				method: 'DELETE'
			})
				.then ( function ( res ) {
					return res.data;
				} );
		}

		return api;
	}

})();
