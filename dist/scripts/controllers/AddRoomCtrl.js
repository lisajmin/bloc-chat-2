( function() {
    function AddRoomCtrl($scope, Room, $uibModalInstance) {
        $scope.createRoom = function(name) {
            if(name !== undefined) {
                Room.makeRoom({
                    name: name,
                    date: new Date()
                });
                $uibModalInstance.close();
            }
            else if(name === undefined) {
                $uibModalInstance.close();
            }
        }
        
        $scope.cancelRoom = function() {
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('AddRoomCtrl',['$scope', 'Room', '$uibModalInstance', AddRoomCtrl]);
})();