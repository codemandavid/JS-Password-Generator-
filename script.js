
		var up = document.getElementById('top'); 
		var down = document.getElementById('down'); 
		up.innerHTML = 
		'Click on the button to generate alpha-numeric string'; 

		function randomStr(len, arr) { 
			var ans = ''; 
			for (var i = len; i > 0; i--) { 
				ans += 
				arr[Math.floor(Math.random() * arr.length)]; 
			} 
			return ans; 
		} 

		function GFG_Fun() { 
			down.innerHTML = randomStr(20, '12%34@5a#bc/de'); 
		} 
	 
