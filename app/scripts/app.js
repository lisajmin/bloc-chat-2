(function() {
    function config($stateProvider) {
        $stateProvider
            .state('main', {
                url: '',
                controller: 'MainCtrl as main',
                templateUrl: '/templates/main.html'
        });
    }
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();