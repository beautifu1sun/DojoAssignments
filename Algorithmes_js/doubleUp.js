function DoubleUp(arr){
    var origLen = arr.length;
    arr.length *= 2;
    for (var i = origLen -1; i >= 0; i--){
        arr[i*2] = arr[i]
        arr[i*2+1] = arr[i]
    } 
    return arr;
}
//test:
console.log(DoubleUp([1,7,20,5]))
//result: [ 1, 1, 7, 7, 20, 20, 5, 5 ]