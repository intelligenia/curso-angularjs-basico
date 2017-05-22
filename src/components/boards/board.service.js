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
				url: '/api/flow_step/',
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
			return $http({
				url: '/api/flow_step/' +  flowstepId,
				method: 'GET'
			})
				.then ( function ( res ) {
					console.log(res.data);
					return res.data;
				} );
		}

		/**
		 * Añade una nueva columna (flow-step) a un tablero (board)
		 */
		function addFS(boardId, flowstep){
			var fs = angulary.copy(flowstep);
			fs.project = boardId;

			return $http({
				url: '/api/flow_step/',
				method: 'POST',
				data: fs
			})
				.then ( function ( res ) {
					console.log(res.data);
					return res.data;
				} );
		}

		//////////////////////
		// TAREAS


		/**
		 * Datos de una tarea
		 * @param taskId El identificador de la tarea
		 * @returns Una promesa con la respuesta HTTP. Si el estatus es 200 los datos de la tarea
         */
		function getTask(taskId){
			return $http({
				url: '/api/task/' +  taskId,
				method: 'GET'
			})
				.then ( function ( res ) {
					console.log(res.data);
					return res.data;
				} );
		}

		/**
		 * Añade una tarea a una columna (flow-step) de un tablero
		 * @param flowstepId El identificador de la columna (flow-step) donde irá la tarea
		 * @param task La tarea a añadir
		 * @returns Una promesa con la respuesta HTTP. Si el estatus es 200 los datos de la tarea creada
         */
		function addTask(flowstepId, task){
			var t = angulary.copy(task);
			t.flow_step = flowstepId;

			return $http({
				url: '/api/task/',
				method: 'POST',
				data: t
			})
				.then ( function ( res ) {
					console.log(res.data);
					return res.data;
				} );
		}

		return api;
	}

})();
