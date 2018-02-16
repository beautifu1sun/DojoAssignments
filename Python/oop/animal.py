class Animal(object):
    def __init__(self, name, health):
        self.name = name
        self.health = health
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print (self.health)
        return self

animal1 = Animal("animal", 100).walk().walk().walk().run().run().displayHealth()
    
class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name, 150)
    def pet(self):
        self.health += 5
        return self

dog1 = Dog("dog").walk().walk().walk().run().run().pet().displayHealth()

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name, 170)
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        super(Dragon, self).displayHealth()
        print ("I'm a Dragon!")
        return self

dragon1 = Dragon("dragon").walk().run().fly().displayHealth()

#test
#animal2 = Animal("animal2", 20).pet()
#animal3 = Animal("animal3", 20).fly()
#animal4 = Animal("animal4", 20).displayHealth()
#dog2 = Dog("dog2").fly()


