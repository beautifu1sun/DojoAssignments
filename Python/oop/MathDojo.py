class MathDojo(object):
    
    def __init__(self):
        self.result = 0

    def add(self, nums, *nums_rest):

        if ((isinstance (nums, list)) or (isinstance (nums, tuple))):
            for each in nums:
                self.result += each
        else:
            self.result += nums

        for each in nums_rest:
            if ((isinstance (each, list)) or (isinstance (each, tuple))):
                for eachInside in each:
                    self.result += eachInside
            else:
                self.result += each

        return self

    def subtract(self, nums, *nums_rest):
        if ((isinstance (nums, list)) or (isinstance (nums, tuple))):
            for each in nums:
                self.result -= each
        else:
            self.result -= nums
        for each in nums_rest:
            if ((isinstance (nums_rest, list)) or (isinstance (nums_rest, tuple))):
                for eachInside in each:
                    self.result -= eachInside
            else:
                self.result -= each
        return self

md = MathDojo()
print(md.add([1], (3,4)).add([3,5,7,8], [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).result)