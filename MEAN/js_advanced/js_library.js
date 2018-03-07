var _ = {
    map: function(arr, callback) {
        result = [];
        for (each in arr){
            result.push(callback(arr[each]));
        }
        return result;
    },
    reduce: function(arr, callback, memo) { 
        result = memo;
        for (each in arr){
            result = callback(result, arr[each]);
        }
        return result;
    },
    find: function(arr, callback) {   
        for (each in arr){
            if (callback(arr[each])){
                return arr[each];
            }
        }
        return undefined;
    },
    filter: function(arr, callback) { 
        result = [];
        for (each in arr){
            if (callback(arr[each])){
                result.push(arr[each]);
            }
        }
        return result;
    },
    reject: function(arr, callback) { 
        result = [];
        for (each in arr){
            if (!callback(arr[each])){
                result.push(arr[each]);
            }
        }
        return result;
    },
  }

console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
console.log(_.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 2))
console.log(_.find([1, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(_.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));