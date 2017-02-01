( function() {
    function AddRoomCtrl($scope, Room, $uibModalInstance) {
        $scope.createRoom = function(newRoom) {
            if(newRoom !== undefined) {
                Room.makeRoom(newRoom);
            }
            else if(newRoom === undefined) {
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