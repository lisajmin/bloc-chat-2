(function() {
    function BlocChatCookies($cookies, $uibModal, $firebaseAuth) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                backdrop: 'static',
                animation: true,
                templateUrl: 'templates/setUsername.html',
                controller: 'UserCtrl',
                controllerAs: 'user',
                size: 'sm'
            });
        }
            
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', '$firebaseAuth', BlocChatCookies]);
    
})();