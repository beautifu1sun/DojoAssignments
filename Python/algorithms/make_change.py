import operator

#1
def change(cents):
    currencyDict = {
        'dollar': 100,
        'quarter': 25,
        'dime': 10,
        'nickel': 5,
        'penny': 1
    }
    coins = {}
    coins['dollars'] = cents/currencyDict['dollar']
    cents = cents%currencyDict['dollar']
    coins['quarters'] = cents/currencyDict['quarter']
    cents = cents%currencyDict['quarter']
    coins['dimes'] = cents/currencyDict['dime']
    cents = cents%currencyDict['dime']
    coins['nickels'] = cents/currencyDict['nickel']
    cents = cents%currencyDict['nickel']
    coins['pennies'] = cents/currencyDict['penny']
    cents = cents%currencyDict['penny']
    return coins
print(change(367))

#2
def change2(cents, currencyDict):
    result = {}
    givenCents = cents
    sortedCurrency = sorted(currencyDict.iteritems(), key=operator.itemgetter(1), reverse=True)
    for each in sortedCurrency:
        result[each[0]]=givenCents/each[1]
        givenCents = givenCents%each[1]
    return result

curDic = {
    'ones': 1,
    'forths': 4,
    'twelves': 12,
    'thirties': 30,
    'fifties': 50
}
print(change2(272, curDic))