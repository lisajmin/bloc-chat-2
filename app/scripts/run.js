(function() {
    function BlocChatCookies($cookies, $uibModal, $firebaseAuth) {
        var signInModal = $uibModal.open({
                backdrop: 'static',
                animation: true,
                templateUrl: 'templates/setUsername.html',
                controller: 'UserCtrl',
                controllerAs: 'user',
                size: 'sm'
        });
        signInModal.result.then(function(user) {
            this.username = user.username;
            this.email = user.email;
            this.password = user.password;
            $cookies.put('blocChatCurrentUser', this.username);
            var auth = $firebaseAuth();
            auth.$signInWithEmailAndPassword(this.email, this.password).then(
            function(firebaseUser) {
                console.log("Logged on as: " + firebaseUser.uid);
            }).catch(function(error) {
                console.error("Error: ", error);
            });
            var currentUser = $cookies.get('blocChatCurrentUser');
            console.log(currentUser);
        });
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', '$firebaseAuth', BlocChatCookies]);
    
})();