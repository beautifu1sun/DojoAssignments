dog = ("Canis Familiaris", "dog", "carnivore", 12)
dog = dog + ("domestic",)
dog = dog[:3] + ("man's best friend",) + dog[4:]

for data in dog:
     print data
