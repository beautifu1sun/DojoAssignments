class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if (self.price > 10000):
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.display_all()
    def display_all(self):
        print("Price: {}\nSpeed: {}\nFuel: {}\nMileage: {}\nTax: {}\n").format(self.price, self.speed, self.fuel, self.mileage, self.tax)

car1 = Car(2000, "35mph", "Full", "24000mi")
car2 = Car(24000, "60mph", "Half", "36000mi")
car3 = Car(13000, "50mph", "2/8", "60240mi")
car4 = Car(10000, "80mph", "Full", "90100mi")
car5 = Car(1500000, "260mph", "Full", "3000mi")
car6 = Car(6000, "60mph", "6/8", "80000mi")