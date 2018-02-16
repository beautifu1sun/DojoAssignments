#odd/even
def oddEven():
    for i in range(1,2001):
        text = "Number is " + str(i)
        if i%2!=0:
            text += ". This is an odd number."
        else:
            text += ". This is an even number."
        print(text)
        text = ""
#test
#oddEven()

#multiply
def multiply(givenList, num):
    for each in range(len(givenList)):
        givenList[each] *= num
    return givenList
#test
#print(multiply([2,4,10,16], 5))

#hacker challenge
def layered_multiples(arr):
    newList = []
    for each in range(len(arr)):
        innerArr = []
        for numofOnes in range(arr[each]):
            innerArr.append(1)
        newList.append(innerArr)    
        innerArr = []
    return newList

#test    
#print(layered_multiples(multiply([2,4,5],3)))