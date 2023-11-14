let user_Name = document.getElementById('userName');
let e_Mail = document.getElementById('e-mail');
let pass = document.getElementById('password');
let btn = document.getElementById('signIn-btn');
let checkMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener('click', () => {
	let userName = user_Name.value;
	let eMail = e_Mail.value;
	let password = pass.value;

	// my conditions
	if (userName.trim().length < 5) {
		alert('Username must have at least 5 letters.');
	} else if (password.trim().length < 8) {
		alert('Password must have at least 8 characters.');
	} else if (!checkMail.test(eMail)) {
		alert('Please enter a valid email address.');
	} else if (userName.trim() === '' || eMail.trim() === '' || password.trim() === '') {
		alert('Please fill in all required fields.');
	} else {

		localStorage.setItem('Username', userName);

		fetch('https://65520e525c69a77903297a7e.mockapi.io/user-data', {
			method: 'POST',
			body: JSON.stringify({
				userName,
				eMail,
				password,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				window.location.href = 'book.html';
			})
			.catch((error) => console.error('The error is:', error));
	}
});
