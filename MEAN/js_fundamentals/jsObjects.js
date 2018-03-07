// Part 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (each in students){
    var result = ""
    for(key in students[each]){
        result += key[0].toUpperCase() + key.slice(1) + ": " + students[each][key] + ", "
    }
    // console.log(result.slice(0, result.length-2))
}

// Part 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 var result = ""
 for (each in users){
    result += each.toUpperCase() + "\n"
    var count = 0
    for (ind in users[each]){
        result += ++count + " - "
        var names = ""
        namesLength = 0
        for (key in users[each][ind]){
            namesLength += users[each][ind][key].length
            names = users[each][ind][key].toUpperCase() + ", " + names 
        }
        names = names.slice(0, names.length-2)    
        result += names + " - " + namesLength + "\n"        
    }
 }
 console.log(result.slice(0, result.length-1))