( function() {
    function UserCtrl($cookies, $firebaseAuth, $uibModalInstance, $uibModal) {
        
        var auth = $firebaseAuth();

        this.validUser = function(userInfo) {
            if (userInfo) {
                auth.$signInWithEmailAndPassword(this.email, this.password).then(
                    function(firebaseUser) {
                        
                        var currentUsername = firebaseUser.displayName;
                        $cookies.put('blocChatCurrentUser', currentUsername);
                        
                        alert("Successfully signed on as: " + currentUsername + "!");
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
                
                var newUser = userInfo.username;
                this.email = userInfo.email;
                this.password = userInfo.password;
                auth.$createUserWithEmailAndPassword(this.email, this.password).then(
                function(firebaseUser) {
                    firebaseUser.updateProfile({
                        displayName: newUser
                    });
                    $cookies.put('blocChatCurrentUser', newUser);
                    
                    alert("Successfully created account!");
                    
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