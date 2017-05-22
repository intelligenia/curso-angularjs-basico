(function() {
    'use strict';

    angular
        .module('cursoangular.kanban')
        .config(config);

	/**
     * Configuración del servicio $http para que introduzca autentificación básica
	 * @param $httpProvider
	 */
	function config ( $httpProvider ) {
    }

})();