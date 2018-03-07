class Underscore(object):
    def map(self, arr, callback):
        result = []
        for each in arr:
            result.append(callback(each))
        return result
    def reduce(self, arr, callback, memo=0):
        result = memo
        for each in arr:
            result = callback(result, each)
        return result
    def find(self, arr, callback):
        for each in arr:
            if callback(each):
                return each
        return None        
    def filter(self, arr, callback):
        result = []
        for each in arr:
            if callback(each):
                result.append(each)    
        return result
    def reject(self, arr, callback):
        result = []
        for each in arr:
            if not callback(each):
                result.append(each)    
        return result

_ = Underscore()
def mapDef(memo, num):
    return memo + num

print(_.map([1,2,3], lambda x: x * 3))
print(_.reduce([1,2,3], mapDef))
print(_.find([1,3,5], lambda x: x % 2 ==0))
print(_.filter([1,2,3,4,5,6], lambda x : x % 2 == 0))
print(_.reject([1,2,3,4,5,6], lambda x : x % 2 == 0))