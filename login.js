// let user_Name = document.getElementById('userName');
// let e_Mail = document.getElementById('e-mail');
// let pass = document.getElementById('password');
// let btn = document.getElementById('login-btn');

// btn.addEventListener('click', () => {
// 	let password = pass.value;
// 	let userNme = user_Name.value;
// 	fetch('https://65520e525c69a77903297a7e.mockapi.io/user-data', { method: 'GET' })
// 		.then((res) => res.json())
// 		.then((data) => {
// 			console.log(data);
// 			for (let i = 0; i < data.length; i++) {
// 				if (userNme == data[i].userName && password == data[i].password) {
// 					console.log(data[i]), (window.location.href = 'book.html');
// 				} else if (userNme === 'admin' && password === 'admin1234') {
// 					console.log(data[i]), (window.location.href = 'book.html');
// 				}
// 			}
// 		})
// 		.catch((error) => console.error('The error is:', error));
// });

let user_Name = document.getElementById('userName');
let pass = document.getElementById('password');
let btn = document.getElementById('login-btn');

btn.addEventListener('click', () => {
	let userName = user_Name.value;
	let password = pass.value;

	fetch('https://65520e525c69a77903297a7e.mockapi.io/user-data', { method: 'GET' })
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			let userFound = false;

			for (let i = 0; i < data.length; i++) {
				if (userName === data[i].userName && password === data[i].password) {
					userFound = true;
					localStorage.setItem('Username', userName);
					window.location.href = 'book.html';
					break;
				}
			}

			if (!userFound) {
				alert('Invalid username or password. Please try again.');
			}
		})
		.catch((error) => console.error('Error during login:', error));
});
