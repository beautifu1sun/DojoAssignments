function fib() {
    var num = 1
    var preNum = 0
    function nacci() {
        console.log(num)
        num = num + preNum
        preNum = num - preNum
    }
    return nacci
}

var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"