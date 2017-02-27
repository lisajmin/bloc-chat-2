( function() {
    function HomeCtrl($scope, Room, $cookies, $uibModal, Message) {

        $scope.scrollBottom = function () {
            var element = document.getElementById("chatwin");
            var height = element.scrollHeight;
            element.scrollTop = height - element.clientHeight;
        };
        
        $scope.roomList = Room.all;
        $scope.messages = {};
        $scope.currentRoom = null;
        $scope.currentUser = $cookies.get('blocChatCurrentUser');
        
        $scope.glued = true;
        
        $scope.setCurrentRoom = function(room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId(room.$id);
        };
        
        $scope.addRoomModal = function(){
      	 $uibModal.open({
      		animation: true,
	        templateUrl: '/templates/addRoom.html',
	        controller: 'AddRoomCtrl'
     	  })
        };
        
        $scope.sendMessage = function(room){
            Message.send($scope.newMessage, room.$id);
            $scope.newMessage = null;
        };
        
        $scope.logOut = function() {
            $cookies.remove('blocChatCurrentUser');
            window.location.reload();
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl',['$scope', 'Room', '$cookies', '$uibModal', 'Message', HomeCtrl]);
})();