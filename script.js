async function fetchData() {
    try {
        const res = await fetch('https://api.example.com/data')
        const data = await res.json()
        console.log(data)
    } catch(error) {
        console.log("Error:", error)
    }
}