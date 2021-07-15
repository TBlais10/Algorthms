var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else (strokes >= par + 3); {
        return names[6]
    }
}

console.log(golfScore(4, 1))
console.log(golfScore(4, 2))
console.log(golfScore(5, 2))
console.log(golfScore(4, 3))
console.log(golfScore(4, 4))
console.log(golfScore(1, 1))
console.log(golfScore(5, 5))
console.log(golfScore(4, 5))
console.log(golfScore(4, 6))
console.log(golfScore(4, 7))
console.log(golfScore(5, 9))

golfScore(5, 4)

/* Strokes	    Return
1	            "Hole-in-one!"
<= par - 2	    "Eagle"
par - 1	        "Birdie"
par	            "Par"
par + 1	        "Bogey"
par + 2	        "Double Bogey"
>= par + 3	    "Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

golfScore(4, 1) should return the string Hole-in-one!

golfScore(4, 2) should return the string Eagle

golfScore(5, 2) should return the string Eagle

golfScore(4, 3) should return the string Birdie

golfScore(4, 4) should return the string Par

golfScore(1, 1) should return the string Hole-in-one!

golfScore(5, 5) should return the string Par

golfScore(4, 5) should return the string Bogey

golfScore(4, 6) should return the string Double Bogey

golfScore(4, 7) should return the string Go Home!

golfScore(5, 9) should return the string Go Home!

*/