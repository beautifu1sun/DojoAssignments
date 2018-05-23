function radix_sort(arr){
    var temp = [];
    var ind = 1;
    while (true){
        temp = [];
        for (var each in arr){
            var numStr = arr[each].toString();
            if (numStr.length >= ind){
                var digit = numStr[numStr.length-ind];
                digit = parseInt(digit);
                if (!temp[digit]){
                    temp[digit] = []
                } 
                temp[digit].push(arr[each]);
            }
            else {
                if (!temp[0]){
                    temp[0] = []
                } 
                temp[0].push(arr[each]);
            }
        }
        if (temp.length == 1){
            break;
        }
        ind++;
        arr = [];
        for (var each in temp){
            for (innerEach in temp[each]){
                arr.push(temp[each][innerEach]);
            }
        }   
    }
    return arr;
}

console.log(radix_sort([53,60,1204,234,534,12,45,34,3,5,19]));