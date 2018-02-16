def make_Dict(list1, list2):
    
    new_dict = {}

    if (len(list1)>len(list2)):
        keys = list1
        values = list2
        while (len(list1)>len(list2)):
            list2.append("")
        new_dict = dict(zip(keys,values))

    elif (len(list1)<len(list2)):
        keys = list2
        values = list1
        while (len(list1)<len(list2)):
            list1.append("")
        new_dict = dict(zip(keys, values))

    elif (len(list1)==len(list2)):
        new_dict = dict(zip(keys, values))
    return new_dict

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar", "Oleg"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]
print(make_Dict(name, favorite_animal))