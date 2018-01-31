function randomChance(numOfQuarters, wish){
    var winningNum = Math.floor(Math.random() * 100) + 1;
    while(numOfQuarters>0){
        numOfQuarters--;
        if (winningNum==(Math.floor(Math.random() * 100) + 1)){
            numOfQuarters+= Math.floor(Math.random() * 51) + 50;
        }
        if (numOfQuarters>=wish) break;
    }
    return numOfQuarters;
}

console.log(randomChance(20,30));