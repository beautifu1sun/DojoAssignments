def printTable():
    for i in range(0,13):
        line = []
        if i == 0:
            line.append('x ')
        elif i < 10:
            line.append('{} '.format(i))
        else:
            line.append('{}'.format(i))
        for k in range(1,13):
            if i == 0:
                newInt = k
            else:
                newInt = i*k
            if newInt < 10:
                line.append('  {}'.format(newInt))
            elif newInt < 100:
                line.append(' {}'.format(newInt))
            else: 
                line.append('{}'.format(newInt))
        print(' '.join(str(e) for e in line))
            
printTable()
