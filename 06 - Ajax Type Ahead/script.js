const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const city = async () => {
    try {
        let a = await fetch(url);
        let b = await a.json();
        cities.push(...b)
    }
    catch (error) {
        console.log(error)
    }
}
let cities = []
city()

const findMatch = (x,cities) => {
    return cities.filter(place => {
        let pattern = new RegExp(x, 'gi')
        return place.city.match(pattern) || place.state.match(pattern)
    })
}

console.log(findMatch('hous',cities))
console.log(cities)



