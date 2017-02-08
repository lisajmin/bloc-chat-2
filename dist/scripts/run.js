(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                backdrop: 'static',
                animation: true,
                templateUrl: 'templates/setUsername.html',
                controller: 'UserCtrl',
                size: 'sm'
            })
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
    
})();