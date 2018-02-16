class Call(object):
    def __init__(self, id, name, phoneNum, time, reason):
        self.id = id
        self.name = name
        self.phoneNum = phoneNum
        self.time = time
        self.reason = reason
    def display(self):
        print ("ID: {}, NAME: {}, PHONE#: {}, REASON: {}, TIMEOFCALL: {}").format(self.id, self.name, self.phoneNum, self.reason, self.time)
        return self

class CallCenter(object):
    def __init__(self, calls):
        self.calls = calls
        self.queueSize = len(self.calls)
    def add(self, call):
        self.calls.append(call)
        self.queueSize+=1
        return self
    def remove(self):
        self.calls.pop(0)
        self.queueSize-=1
        return self
    def removeByNum(self, num):
        for each in self.calls:
            if (each.phoneNum == num):
                self.calls.remove(each)
                self.queueSize-=1
        return self
    def sortCallersByTime(self):
        for passnum in range(len(self.calls)-1,0,-1):
            for i in range(passnum):
                if self.calls[i].time > self.calls[i+1].time:
                    temp = self.calls[i]
                    self.calls[i] = self.calls[i+1]
                    self.calls[i+1] = temp
        return self
    def info(self):
        text = ""
        for each in self.calls:
            text += each.name + " " + str(each.phoneNum) + "\n"
        text += "Queue size: " + str(self.queueSize)
        print(text)
        return self

#test
caller1 = Call(1, "Dima", 9172910945, "14jan18-3:40pm", "refund")
caller2 = Call(2, "Eric", 2329504585, "14jan18-3:42pm", "trouble call")
caller3 = Call(3, "Quon", 2043254485, "14jan18-3:39pm", "installation")
callcent = CallCenter([caller1,caller2])
callcent.info()
callcent.removeByNum(2329504585).add(caller3).info()
callcent.sortCallersByTime().info()
