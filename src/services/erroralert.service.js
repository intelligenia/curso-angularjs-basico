(function () {
    'use strict';

    angular
        .module('cursoangular.kanban')
        .factory('ErrorAlertService', ErrorAlertService);


    function ErrorAlertService ( notificationService ) {

        var api = {
            apiError: apiError
        };

        function apiError ( res ) {
            var message = "";
            angular.forEach(res.data, function ( value, key ) {
                message += "'" + key + "' " + value + "\n";
            });
            notificationService.error(message);
            console.error(res);
        }

        return api;
    }

})();