#Find and Replace
words = "It's thanksgiving day. It's my birthday too!"
print(words.find("day"))
newString = words.replace("day", "month")
print(newString)

#Min and Max
x = [2,54,-2,7,12,98]
print(min(x))
print(max(x))

#First and Last
y = ["hello",2,54,-2,7,12,98,"world"]
print(y[0])
print(y[len(y)-1])

#New List
z = [19,2,54,-2,7,12,98,32,10,-3,6]
z.sort()
tmp = z[len(z)/2:]
tmp.insert(0,z[:len(z)/2])
print (tmp)