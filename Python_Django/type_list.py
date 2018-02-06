def typeList(list):
    sum = 0
    newString = ""
    listType = "The list you entered is of "
    for each in list:
        if isinstance(each, str):
            newString += each
        elif isinstance(each, int):
            sum += each
    if sum > 0 and len(newString) > 0:
        listType += "mixed type"
        listType += "\nString: " + newString
        listType += "\nSum:", + sum
    elif sum > 0:
        listType += "int type"
        listType += "\nSum:", + sum
    elif len(newString) > 0:
        listType += "str type"
        listType += "\nString: " + newString
    print(listType)

