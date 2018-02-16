#part 1
students = [
    {'first_name' : 'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

for each in range(len(students)):
    values1 = []
    for key in students[each]:
        values1.append(students[each][key])
    print ('{0} {1}').format(values1[0], values1[1])
    
#part2
users = {
    'Students': [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
     ],
    'Instructors': [
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'Martin', 'last_name' : 'Puryear'}
     ]
    }

for key in users:
    print key
    for each in range(len(users[key])):
        values2 = []
        for keyIns in users[key][each]:
            values2.append(users[key][each][keyIns])
        print ('{0} - {1} {2} - {3}').format(each+1, values2[0], values2[1], len(values2[0]+values2[1]))
        