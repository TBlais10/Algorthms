var fruitNames = ["Apples", "Oranges", "Grapes"]
var fruitTypes = [
    ["Gala", "Fuji", "Honeycrisp"],
    ["Navel", "Cara Cara", "Blood"],
    ["Moon Drops", "Concord", "Cotton Candy"]
]
var fruitPrice = [
    [4, 5, 4],
    [6, 4, 6],
    [4, 3, 4]
]
var salesQuantity = [
    [24, 20, 17],
    [18, 27, 10],
    [42, 18, 9]
]


for (var i = 0; i < fruitNames.length; i++) {
    for (var j = 0; j < fruitNames.length; j++) {
        var profit = fruitPrice[i][j] * salesQuantity[i][j]
        console.log(`${fruitNames[i]}, ${fruitTypes[i][j]} : $${profit} `)
    }
}