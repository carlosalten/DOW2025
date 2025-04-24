const url = "https://jsonplaceholder.typicode.com/posts"

async function queryAPI() {
	try {
		const response = await fetch(url)
		// console.log(response)
		if (!response.ok) {
			throw new Error("Hubo un problema :(")
		}
		const data = await response.json()
		console.log(data)
	} catch (error) {
		console.log(error.message)
	}
}

queryAPI()
