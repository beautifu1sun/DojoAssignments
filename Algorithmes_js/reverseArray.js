function reverseArray(givenArr){
    var tmp = 0;
    for (var i = 0; i < (givenArr.length/2); i++){
        tmp = givenArr[i];
        givenArr[i] = givenArr[givenArr.length-1-i];
        givenArr[givenArr.length-1-i] = tmp;
    }
    return givenArr;
}
//test:
console.log(reverseArray([1,2,3,4,5,6,7]));
//result: [ 7, 6, 5, 4, 3, 2, 1 ]