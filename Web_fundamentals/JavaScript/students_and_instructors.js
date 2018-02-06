//part 1 
var students = [
    { first_name: 'Michael', last_name: 'Jordan' },
    { first_name: 'John', last_name: 'Rosales' },
    { first_name: 'Mark', last_name: 'Guillen' },
    { first_name: 'KB', last_name: 'Tonel' }
]
for (var student in students) {
    console.log(students[student].first_name + " " + students[student].last_name);
}

//part 2 
console.log("");

var users = {
    'Students': [
        { first_name: 'Michael', last_name: 'Jordan' },
        { first_name: 'John', last_name: 'Rosales' },
        { first_name: 'Mark', last_name: 'Guillen' },
        { first_name: 'KB', last_name: 'Tonel' }
    ],
    'Instructors': [
        { first_name: 'Michael', last_name: 'Choi' },
        { first_name: 'Martin', last_name: 'Puryear' }
    ]
}
function printUsers(){ 
    for (var group in users) { 
        console.log(group); 
        for (var i = 0; i < users[group].length; i++) { 
            console.log(i + 1 + " - " + users[group][i].first_name + " " + users[group][i].last_name + " - " + (users[group][i].first_name.length + users[group][i].last_name.length))
        } 
    } 
} 
printUsers();