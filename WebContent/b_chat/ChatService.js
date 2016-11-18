(function(angular, SockJS, Stomp) {
  app.service("ChatService", function($q, $timeout) {
    
    var service = {}, listener = $q.defer(), socket = {
      client: null,
      stomp: null
    }, messageIds = [];
    
    service.RECONNECT_TIMEOUT = 30000;
    service.SOCKET_URL = "/Binder/chat";
    service.CHAT_TOPIC = "/topic/message";
    service.CHAT_BROKER = "/app/chat";
    
    service.receive = function() {
      return listener.promise;
    };
    
    service.send = function(message) {
      var id = Math.floor(Math.random() * 1000000);
      alert('sendMessage');
      socket.stomp.send(service.CHAT_BROKER, {
        priority: 9
      }, JSON.stringify({
        message: message,
        id: id
      }));
      messageIds.push(id);
    };
    
    var reconnect = function() {
    	alert('reconnect');
      $timeout(function() {
        initialize();
      }, this.RECONNECT_TIMEOUT);
    };
    
    var getMessage = function(data) {
    	alert('getMessage');
      var message = JSON.parse(data), out = {};
      out.message = message.message;
     // out.time = new Date(message.time);
         
      return out;
    };
    
    var startListener = function() {
    	alert('startlistener');
      socket.stomp.subscribe(service.CHAT_TOPIC, function(data) {
        listener.notify(getMessage(data.body));
      });
    };
    
    var initialize = function() {
    	alert('init');
      socket.client = new SockJS('/Binder/chat');
      socket.stomp = Stomp.over(socket.client);
      alert('connect');
      socket.stomp.connect({}, startListener);
      socket.stomp.onclose = reconnect;
    };
    
    initialize();
    return service;
  });
})(angular, SockJS, Stomp);
