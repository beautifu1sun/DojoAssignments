def compareLists(list1, list2):
    equal = 0
    if (len(list1) == len(list2)):
        for i in range(0,len(list1)):
            if list1[i]==list2[i]:
                equal+=1          
        if equal == len(list1):
            print("The lists are the same.")
        else:
            print("The lists are not the same.")              
    else:
        print("The lists are not the same.")

#test
list_one = [1,2,5,6,2]
list_two = [1,2,5,6,2]
compareLists(list_one, list_two)
list_one1 = ['celery','carrots','bread','milk']
list_two1 = ['celery','carrots','bread','cream']
compareLists(list_one1, list_two1)