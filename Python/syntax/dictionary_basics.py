createdDict = {
    "name": "Dmitrii",
    "age": 24,
    "country of birth": "Russia",
    "favorite language": "English"   
}

def printDict(passedDict):
    for key in passedDict:
        if isinstance(passedDict[key], int):
            print("My " + key + " is " + str(passedDict[key]))
        elif isinstance(passedDict[key], str):
            print("My " + key + " is " + passedDict[key])

printDict(createdDict)
