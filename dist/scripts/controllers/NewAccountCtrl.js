(function() {
    function NewAccountCtrl ($uibModalInstance) {
        this.validUser = function(userInfo) {
            if (userInfo) {
                var user = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                };
                $uibModalInstance.close(user);
            } 
        };
    }
    
    angular
        .module('blocChat')
        .controller('NewAccountCtrl', ['$uibModalInstance', NewAccountCtrl]);
})();
