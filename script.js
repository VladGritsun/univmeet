window.onload = function(){
	var socket = io.connect('http://localhost:8080');
	socket.on('connect', function(){
		document.getElementById('sign_in').onclick = function() {
			socket.emit('log_in', {
				user_name: document.getElementById('user_name').value,
				password: document.getElementById('password').value
			});
		};
	});	
}