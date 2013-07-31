/*function SendToServer() {
	alert("S");
	//var server = io.connect('http://localhost:8080');
	server.emit('message', "Yeah!");
}*/

window.onload = function(){
	var socket = io.connect('http://localhost:8080');
	socket.on('connect', function(){
		alert("A");
		document.getElementById('sign_in').onclick = function() {
			socket.emit('log_in', {
				user_name: document.getElementById('user_name').value,
				password: document.getElementById('password').value
			});
		};
	});	
}