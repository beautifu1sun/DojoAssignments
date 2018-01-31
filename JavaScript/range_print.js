//Create a function that can take a start point, end point, and skip amount, to print all numbers in the range:
function printRange1(a, b, c){
    for (var i = a; i < b; i+=c)
    console.log(i);
}
//If the user doesn't pass a skip amount, make it default to 1:
function printRange2(a, b){
    for (var i = a; i < b; i++){
        console.log(i)
    }
}
//If the user doesn't pass an end point, make it start at 0, and end at the first:
function printRange3(a){
    for (var i = 0; i < a; i++){
        console.log(i);
    }
}