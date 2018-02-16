def prindBoard():
    numofSquares = 64
    board = ""
    pattern = 1
    for i in range(1, numofSquares+1):
        if (pattern == 1):
            if (i%8==0 and i > 7):
                board+=" \n"
                pattern = 2
            else:    
                if i%2!=0:
                    board+="*"
                else:
                    board+=" "    
        elif (pattern == 2):
            if (i%8==0 and i > 7):
                board+="*\n"
                pattern = 1
            else:
                if i%2==0:
                    board+="*"
                else:
                    board+=" "
    print(board)

#test
prindBoard()
