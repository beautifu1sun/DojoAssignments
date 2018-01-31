function numbersOnly1(givenArr){
    var newArr = [];
    for (var i = 0; i < givenArr.length; i++){
        if (typeof givenArr[i] === "number"){
            newArr.push(givenArr[i]);
        }
    }
    return newArr;
}
console.log(numbersOnly1([1, "apple", -3, "orange", 0.5]))

function numbersOnly2(givenArr){
    for (var i = 0; i < givenArr.length; i++){
        if (typeof givenArr[i] === "number"){
            for (var p = i; p < givenArr.length-1; p++){
                givenArr[p]=givenArr[p+1];              
            }
            givenArr.pop();
        }
    } 
    console.log(givenArr);
}
numbersOnly2([1, "apple", -3, "orange", 0.5]);