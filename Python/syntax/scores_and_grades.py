import random

def generateScores():
    print("Scores and Grades")
    for i in range(10):
        score = random.randint(60,100)
        print("Score: " + str(score) + "; Your grade is " + getGrade(score))
    print("End of the program. Bye!")

def getGrade(num):
    if (num >= 60 and num<70):
        return "D"
    elif (num >= 70 and num < 80):
        return "C"
    elif (num >= 80 and num < 90):
        return "B"
    elif (num >= 90 and num <= 100):
        return "A"

generateScores()