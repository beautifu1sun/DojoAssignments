function magic_multiply(x, y){
    if ((x == 0)&&(y==0)){
        return "All inputs 0"
    }
    else if (typeof(y)=="string"){
        return "Error: Can not multiply by string"
    }
    else if (typeof(x)=="number"){
        return x*y
    }
    else if (typeof(x)=="string"){
        str = x
        for (var i = 1; i < y; i++){
            str += x
        }
        return str
    }
    else if (typeof(x)=="object"){
        for (each in x){
            x[each] = x[each]*y
        }
        return x
    }
}
// test1
console.log(magic_multiply(5,2))
// test2
console.log(magic_multiply(0,0))
// test3
console.log(magic_multiply([1,2,3], 2))
// test4
console.log(magic_multiply(7, "three"))
// test5
console.log(magic_multiply("Brendo", 4))