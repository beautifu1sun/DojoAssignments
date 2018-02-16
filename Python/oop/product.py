class Product(object):
    def __init__(self, price, item_name, weight, brand):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.status = "for sale"
    def sell(self):
        self.status = "sold"
        return self
    def add_tax(self, tax):
        self.price *= (1+tax)
        return self.price
    def returnItem(self, reason):   # can't name "return"
        if (reason == "defective"):
            self.status = "defective"
            self.price = 0
        elif (reason == "inthebox"):
            self.status = "for sale"
        elif (reason == "opened"):
            self.status = "used"
            self.price *= 0.8
        return self
    def displayInfo(self):
        print("Item - {}, weight - {}, brand - {}, price - {}, status - {}").format(self.item_name, self.weight, self.brand, self.price, self.status)

#test
item1 = Product(210, "shoes", 100, "nike")
item2 = Product(10000, "car", 10000, "honda")
item3 = Product(600, "bicycle", 800, "bmw")
item1.price = item1.add_tax(0.09)
item1.sell().displayInfo()
item2.returnItem("defective").displayInfo()
item3.returnItem("opened").displayInfo()