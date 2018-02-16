class Store(object):
    def __init__(self, products, location, owner):
        self.products = products #array of products
        self.location = location #addres
        self.owner = owner #name
    def add_product(self, product):
        self.products.append(product)
        return self
    def remove_product(self, product):
        product_ind = -1
        for each in range(len(self.products)):
            if (self.products[each].item_name == product):
                product_ind = each
        if product_ind > 0:
            self.products.pop(product_ind)
        return self
    def inventory(self):
        for each in range(len(self.products)):
            self.products[each].displayInfo()

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
sport_rack = Store([Product(210, "shoes", 100, "nike"), Product(100, "pants", 40, "adidas"), Product(500, "jacket", 140, "vans")], "Seattle, WA", "Michael Choi")
sport_rack.add_product(Product(20, "socks", 10, "converse")).remove_product("pants").inventory()
print(sport_rack.location)
print(sport_rack.owner)