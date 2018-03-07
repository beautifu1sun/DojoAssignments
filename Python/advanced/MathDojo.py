class MathDojo(object):

    def __init__(self):
        self.result = 0

    def add(self, *args):
        for arg in args:
            if type(arg) == list or type(arg) == tuple:
                for each in arg:
                    self.result += each
            else:
                self.result += arg

        return self

    def substract(self, *args):
        for arg in args:
            if type(arg) == list or type(arg) == tuple:
                for each in arg:
                    self.result -= each
            elif type(arg) == int:
                self.result -= arg

        return self

md = MathDojo()
print(md.add([1], 3, (1,2,3,4)).add([3,5,7,8], [2, 4.3, 1.25], 3).substract(2, [2,3], (1, 2), [1.1, 2.3]).result)
