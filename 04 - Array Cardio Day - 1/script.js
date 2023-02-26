const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];


  // 1. List of inventors born in the 1500s.

var ans = inventors.filter(x => (x.year < 1600 && x.year >= 1500))
console.table(ans)
  
// 2. List of inventors first and last name.
 ans = inventors.map(x => x.first + " " + x.last)
console.log(ans)

// 3. Sort the inventors from oldest to youngest.

ans = inventors.sort(function (a,b) {
    return a.year - b.year
})
console.log(ans)

// 4. How many years all the inventors lived

//for every inventor individually
ans = inventors.map(x => x.passed - x.year)
console.table(ans)

//for all inventors combined
ans = inventors.reduce(((a,b) => a + b.passed - b.year),0)
console.log(ans)

//5. Sort all the inventors by years lived.

ans = inventors.sort(function (a, b) {
    const x = a.passed - a.year
    const y = b.passed - b.year
    return x - y
})
console.table(ans)


//6. Find all the streets with 'de' in them.
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//for browser use
// let div1 = document.querySelector('.mw-category-columns')

// let links = Array.from(document.querySelectorAll('a'))
// let de = links.map(x => x.textContent).filter(name => name.includes('de'))

// 7. Sort people by their last name.

ans = people.sort(function (a,b) {
    const [aFirst, aLast] = a.split(', ')
    const [bFirst,bLast]= b.split(', ')
    return aLast - bLast ? 1 : -1;
})
console.log(ans)

// 8. Sum up the number of instances of the following
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
 
ans = data.reduce(function (a, b) {
    if (a[b])
        a[b]++
    else
        a[b] = 1
    return a
}, {})
console.log(ans)