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
        var auth = window.btoa("mario@intelligenia.com:mario");
		$httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + auth;
    }

})();