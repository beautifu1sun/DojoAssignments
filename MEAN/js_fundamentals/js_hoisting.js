// 1
var hello
console.log(hello)
hello = "world"

// 2
var needle
needle = 'haystack';
test();

function test(){
    //global var needle is replaced with local one 
    var needle
	needle = 'magnet';
	console.log(needle);
}

// 3 
var brandan
brendan = 'super cool';
// print is never called!
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// 4 
var food 
food = 'chicken';
console.log(food);
eat();
function eat(){
    var food 
    // food is local var 
	food = 'half-chicken';
    console.log(food);
    // console prints half-chicken because it runs before food = 'gone'
	food = 'gone';
}

// 5
// var mean
// mean is UNDEFINED and not a function YET
// mean();
// food is not in global scope
// console.log(food);
// mean = function() {
//     var food
// 	food = "chicken";
// 	console.log(food);
// 	food = "fish";
// 	console.log(food);
// }
// console.log(food);

// 6 
var genre
//undefined 
console.log(genre);
genre = "disco";
rewind();
function rewind() {
    var genre
    //local var!
	genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}
//global genre hasn't been changed (disco)
console.log(genre);

// 7 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo
    // local dojo
	dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
//global dojo hasn't been changed
console.log(dojo);