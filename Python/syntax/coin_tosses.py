import random

def flipCoin():
    heads = 0
    tails = 0
    print("Starting the program...")
    for i in range(5000):
        result = ""
        if (round(random.random()) == 0):
            result = "head"
            heads += 1
        else:
            result = "tail"
            tails += 1
        print("Attempt #" + str(i+1) + ": Throwing a coin... It's a " + result + "! ... Got " + str(heads) + " head(s) so far and " + str(tails) + " tail(s) so far")
    print("Ending the program. Thank you!")

flipCoin()