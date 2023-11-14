// // let key = 'hdyg2KdARHJX1K4Msv7ATxFsBFAKwMLk';
// // fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`, { method: 'GET' })
// fetch('https://65520e525c69a77903297a7e.mockapi.io/book', { method: 'GET' })
// 	.then((res) => res.json())
// 	.then((data) => {
// 		console.log(data);
// 		for (let i = 0; i < data.length; i++) {
// 			let bookContainer = document.createElement('div');
// 			bookContainer.classList.add('bookContainer');
// 			let title = document.createElement('h5');
// 			title.classList.add('title');
// 			let image = document.createElement('img');
// 			image.classList.add('images');
// 			let description = document.createElement('p');
// 			description.classList.add('description');
// 			let author = document.createElement('p');
// 			author.classList.add('author');
// 			let deleteText = document.createElement('p');
// 			deleteText.innerHTML = `Delete Book <button id="btn-delete-book" class="btn-delete-book" onclick="deleteBook(${data.id})">Delete</button>`;
// 			// let btn = document.createElement('button');
// 			// btn.classList.add('btn-delete-book');
// 			//
// 			// let adminBtn = getElementById('btn-delete-book');
// 			//
// 			// .innerText = 'Delete';
// 			container.appendChild(bookContainer);

// 			bookContainer.appendChild(image);
// 			bookContainer.appendChild(title);
// 			bookContainer.appendChild(description);
// 			bookContainer.appendChild(author);
// 			// bookContainer.appendChild(btn);
// 			title.innerText = data[i].title;
// 			image.src = data[i].image;
// 			description.innerText = data[i].description;
// 			author.innerText = ` The Author: ${data[i].author}`;
// 			let welcomeUser = document.getElementById('welcome-user');
// 			welcomeUser.innerText = ` Welcome ${localStorage.getItem('Username')}`;
// 			if (localStorage.getItem('Username' == 'admin')) {
// 				btn.style.display = flex;
// 			}
// 			// if (localStorage.getItem('Username') === 'admin') {
// 			// 	btn.style.display = 'flex';
// 			// } else {
// 			// 	btn.style.display = 'none'; // Hide the button for non-admin users
// 			// }

// 			// fetch('https://65520e525c69a77903297a7e.mockapi.io/book', {
// 			// 	method: 'POST',
// 			// 	body: JSON.stringify({
// 			// 		title: data.results.books[i].title,
// 			// 		image: data.results.books[i].book_image,
// 			// 		description: data.results.books[i].description,
// 			// 		author: data.results.books[i].author,
// 			// 	}),
// 			// 	headers: {
// 			// 		'Content-type': 'application/json; charset=UTF-8',
// 			// 	},
// 			// })
// 			// 	.then((response) => response.json())
// 			// 	.then((data) => console.log(data));
// 		}
// 	});
// function deleteBook(id) {
// 	fetch(`https://65520e525c69a77903297a7e.mockapi.io/book/${id}`, { method: 'DELETE' })
// 		.then((res) => res.json())
// 		.then((data) => console.log(data));
// }
fetch('https://65520e525c69a77903297a7e.mockapi.io/book', { method: 'GET' })
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		for (let i = 0; i < data.length; i++) {
			let bookContainer = document.createElement('div');
			bookContainer.classList.add('bookContainer');
			let title = document.createElement('h5');
			title.classList.add('title');
			let image = document.createElement('img');
			image.classList.add('images');
			let description = document.createElement('p');
			description.classList.add('description');
			let author = document.createElement('p');
			author.classList.add('author');
			// let deleteText = document.createElement('p');
			let btn = document.createElement('button'); 
			btn.classList.add('btn-delete-book');
			btn.innerText = 'Delete Book'; 

			// deleteText.innerHTML = `Delete Book `;
			// Append the button to the deleteText element
			container.appendChild(bookContainer);

			bookContainer.appendChild(image);
			bookContainer.appendChild(title);
			bookContainer.appendChild(description);
			bookContainer.appendChild(author);
			bookContainer.appendChild(btn);
			// bookContainer.appendChild(deleteText);

			title.innerText = data[i].title;
			image.src = data[i].image;
			description.innerText = data[i].description;
			author.innerText = ` The Author: ${data[i].author}`;
			let welcomeUser = document.getElementById('welcome-user');
			welcomeUser.innerText = ` Welcome ${localStorage.getItem('Username')}`;

			if (localStorage.getItem('Username') === 'admin') {
				btn.style.display = 'block';
				btn.addEventListener('click', () => deleteBook(data[i].id));
			} else {
				btn.style.display = 'none';
			}
		}
	});

function deleteBook(id) {
	fetch(`https://65520e525c69a77903297a7e.mockapi.io/book/${id}`, { method: 'DELETE' })
		.then((res) => res.json())
		.then((data) => console.log(data));
}
