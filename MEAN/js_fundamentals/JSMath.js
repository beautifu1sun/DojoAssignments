function zero_negativity(array){
    for (each in array){
        if (array[each] < 0){
            return false;
        }
    }
    return true;
}
function is_even(num){
    if (num%2==0) return true
    else return false
}
function how_many_even(array){
    var count = 0
    for (each in array){
        if (is_even(array[each])) count++
    }
    return count
}
function create_dummy_array(num){
    var result = []
    for (var i = 0; i < num; i++){
        result[i] = Math.floor(Math.random() * 10)
    }
    return result
}
function random_choice(array){
    return array[Math.floor(Math.random() * array.length)]
}
//tests
console.log(zero_negativity([1,2,-1]))
console.log(is_even(8))
console.log(how_many_even([1,2,3,4,5]))
console.log(random_choice(create_dummy_array(5)))