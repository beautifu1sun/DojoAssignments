def findCharacters(list, char):
    newArr = []
    for each in list:
        if each.find(char) >= 0:
            newArr.append(each)
    print (newArr)

#test
word_list = ['hello','world','my','name','is','Anna']
charz = 'o'
findCharacters(word_list, charz)
