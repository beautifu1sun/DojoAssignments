var HOUR = 12;
var MINUTE = 15;
var PERIOD = "AM";

var string = "It's "

nextHour = HOUR + 1;
if (HOUR==12){
    nextHour = 1
    if (PERIOD=="AM"){
        HOUR = "midnight.";
    } else HOUR = "noon.";
} 

if (MINUTE == 15){
    string += "quarter after " + HOUR;
} else if (MINUTE == 30){
    string += "half past " + HOUR;
} else if (MINUTE == 45){
    string += "quarter to" + nextHour;
}
else if (MINUTE < 30 && MINUTE > 0){
    string += "just after " + HOUR;
} else if (MINUTE > 30){
    string += "almost " + nextHour;
} else string += HOUR;

if (PERIOD == "AM"){
    if (HOUR < 4){
        string += " at night."
    } else if (HOUR < 8){
        string += " in the early morning."
    } else if (HOUR < 12){
        string += " in the late morning."
    }
}
else if (PERIOD == "PM"){
    if (HOUR < 3){
        string += " in the early afternoon."
    } else if (HOUR < 5){
        string += " in the late afternoon."
    } else if (HOUR < 9){
        string += " in the evening."
    } else if (HOUR < 12){
        string += " at night."
    }
}

console.log (string);