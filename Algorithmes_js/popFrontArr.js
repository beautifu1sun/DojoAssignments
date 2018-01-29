function popFrontArr(givenArr){
    for(var i = 0; i < givenArr.length-1; i++){
        givenArr[i] = givenArr[i+1];
    }
    givenArr.pop();
    return givenArr;
}
//test:
console.log(popFrontArr([1,2,3,4,5,6,7]));
//result: [ 2, 3, 4, 5, 6, 7 ]
