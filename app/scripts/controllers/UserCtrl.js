( function() {
    function UserCtrl($scope, $cookies, $uibModalInstance) {
        $scope.setUsername = function(username) {
            if (username !== undefined) {
            $cookies.put('blocChatCurrentUser', username);
            $uibModalInstance.close();
            window.location.reload();
            } else {
                alert("Please enter a username");
            }
        }

    }

    angular
        .module('blocChat')
        .controller('UserCtrl', ['$scope', '$cookies', '$uibModalInstance',  UserCtrl]);
})();