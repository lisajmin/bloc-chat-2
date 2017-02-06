(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var message = $firebaseArray(ref);
        
        return {
            getByRoomId: function(roomId) {
                return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();