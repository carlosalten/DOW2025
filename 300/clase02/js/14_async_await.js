//Await Async
const url = "https://jsonplaceholder.typicode.com/posts"

async function queryAPI() {
    try {
        const response = await fetch(url)
        // console.log(response)
        if (!response.ok) {
            throw new Error('Ocurrió un problema :(')
        }
        const posts = await response.json()
        console.log(posts)
    } catch (error) {
        console.log(error.message)
    }
}

queryAPI()