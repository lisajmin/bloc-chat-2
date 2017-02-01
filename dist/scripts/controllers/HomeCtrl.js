( function() {
    function HomeCtrl($scope, Room, $uibModal) {
        $scope.roomList = Room.all;
        
        $scope.addRoomModal = function(){
      	 $uibModal.open({
      		animation: true,
	        templateUrl: '/templates/addRoom.html',
	        controller: 'AddRoomCtrl',
	        size: 'sm'
     	  })
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl',['$scope', 'Room', '$uibModal', HomeCtrl]);
})();