( function() {
    function UserCtrl($cookies, $firebaseAuth, $uibModalInstance, $uibModal) {
        
        var auth = $firebaseAuth();
        
        var currentUser = $cookies.get('blocChatCurrentUser');

        this.validUser = function(userInfo) {
            if (userInfo) {
                var currentUsername = this.username;
                auth.$signInWithEmailAndPassword(this.email, this.password).then(
                    function(firebaseUser) {
                        $cookies.put('blocChatCurrentUser', currentUsername);
                        
                        alert("Successfully signed on as: " + currentUsername + "!");
                        
                        console.log("Logged on as: " + firebaseUser.uid);
                        $uibModalInstance.close();
                        window.location.reload();
                        
                }).catch(function(error) {
                    alert(error);
                });
            } 
        };
        
        this.newAccount = function() {
            var newAccountModal = $uibModal.open({
                templateUrl: '/templates/newAccount.html',
                controller: 'NewAccountCtrl',
                controllerAs: 'new',
                backdrop: 'static',
                size: 'sm'
            });
            newAccountModal.result.then(function(userInfo) {
                this.username = userInfo.username;
                this.email = userInfo.email;
                this.password = userInfo.password;
                $cookies.put('blocChatCurrentUser', this.username);
                auth.$createUserWithEmailAndPassword(this.email, this.password).then(
                function(firebaseUser) {
                    
                    alert("Successfully created account!");
                    
                    console.log("Created User with UID: " + firebaseUser.uid);
                    
                    $uibModalInstance.close();
                    
                    window.location.reload();
                    
                }).catch(function(error) {
                    console.log(error);
                });
            });
        };
    }

    angular
        .module('blocChat')
        .controller('UserCtrl', ['$cookies', '$firebaseAuth', '$uibModalInstance', '$uibModal',  UserCtrl]);
})();