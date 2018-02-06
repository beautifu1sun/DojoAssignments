function fancyArray1(givenArr){
    for (var i = 0; i < givenArr.length; i++) {
        console.log(i + " -> " + givenArr[i]);
    }
}
function fancyArray2(givenArr, symbol){
    for (var i = 0; i < givenArr.length; i++) {
        console.log(i + " " + symbol + " " + givenArr[i]);
    }
}
function fancyArray3(givenArr, symbol, reversed) {
    if (reversed != true) {
        for (var i = 0; i < givenArr.length; i++) {
            console.log(i + " " + symbol + " " + givenArr[i]);
        }
    } else {
        for (var i = givenArr.length-1 ; i >= 0; i--) {
            console.log(i + " " + symbol + " " + givenArr[i]);
        }
    }
}
