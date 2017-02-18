( function() {
    function UserCtrl($cookies, $firebaseAuth, $uibModalInstance, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        this.validUser = function(userInfo) {
            if (userInfo) {
                var user = {
                username: this.username,
                email: this.email,
                password: this.password
                };
                $uibModalInstance.close(user);
            } 
        };
        this.newAccount = function() {
            var newAccountModal = $uibModal.open({
                templateUrl: '/templates/newAccount.html',
                controller: 'NewAccountCtrl',
                controllerAs: 'new',
                backdrop: 'static'
            });
            newAccountModal.result.then(function(userInfo) {
                this.username = userInfo.username;
                this.email = userInfo.email;
                this.password = userInfo.password;
                $cookies.put('blocChatCurrentUser', this.username);
                var auth = $firebaseAuth();
                auth.$createUserWithEmailAndPassword(this.email, this.password).then(
                function(firebaseUser) {
                    console.log("Created User with UID: " + firebaseUser.uid);
                }).catch(function(error) {
                    console.log("Error: ", error);
                });
                var currentUser = $cookies.get('blocChatCurrentUser');
                
            });
        };
    }

    angular
        .module('blocChat')
        .controller('UserCtrl', ['$cookies', '$firebaseAuth', '$uibModalInstance', '$uibModal',  UserCtrl]);
})();