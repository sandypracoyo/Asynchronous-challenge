const axios = require('axios').default;

async function getData() {
	try {
		const response1 = await axios.get('https://jsonplaceholder.typicode.com/posts');
		const response2 = await axios.get('https://jsonplaceholder.typicode.com/users');

		let data1 = response1.data; //posts
		let data2 = response2.data; //users
		data1.forEach((e) => {
			for (i = 1; i <= data2.length; i++) {
				if (e.userId == i) {
					e.user = Object.assign({}, data2[i - 1]);
				}
			}
		});

		console.log(data1);
	} catch (error) {
		console.error(error);
	}
}

getData();
