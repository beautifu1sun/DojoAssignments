// There is an old tale about a king who offered a servant $10,000 as a reward. 
// The servant instead asked that for 30 days he be given an amount that would double, starting with a penny. 
// (1 penny for the first day, 2 for the second, 4 for the third, then 8, 16, 32 pennies, and so on).

// How much was the reward after 30 days?
var sum1 = 0;
var reward1 = 0.01;
for (var i = 1; i < 30; i++){
    sum1 += reward1;
    reward1 *= 2;
}
sum1 += reward1;
console.log("1) Reward after 30 days is " + sum1);
//How many days would it take the servant to make $10,000?
var sum2 = 0;
var reward2 = 0.01;
var daysCount2 = 0;
while (sum2<10000){
    sum2 += reward2;
    daysCount2++;
    reward2 *= 2;
}
console.log("2) It will take " + daysCount2 + " days.");
//How many days would it take the servant to make 1 billion?
var sum3 = 0;
var reward3 = 0.01;
var daysCount3 = 0;
while (sum3<1000000000){
    sum3 += reward3;
    daysCount3++;
    reward3 *= 2;
}
console.log("3) It will take " + daysCount3 + " days.");
//How many days until the servant has infinite money?
var sum4 = 0;
var reward4 = 0.01;
var daysCount4 = 0;
while (sum4<Infinity){
    sum4 += reward4;
    daysCount4++;
    reward4 *= 2;
}
console.log("4) It will take " + daysCount4 + " days.");