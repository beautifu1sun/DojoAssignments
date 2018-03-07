class SList(object):
    def __init__(self):
        self.head = None
        self.tail = None
    def printAllVals(self):
        pointer = self.head
        while (pointer):
            print (pointer.value)
            pointer = pointer.next
    def AddBack(self, val):
        if self.tail == None and self.head == None:
            newNode = SLNode(val)
            self.head = newNode
            self.tail = newNode
        else: 
            self.tail.next = SLNode(val)
            self.tail = self.tail.next
        return self
    def AddFront(self, val):
        if self.tail == None and self.head == None:
            newNode = SLNode(val)
            self.head = newNode
            self.tail = newNode
        else:
            tmp = self.head
            self.head = SLNode(val)
            self.head.next = tmp
        return self
    def InsertBefore(self, nextVal, val):
        if self.head.value == nextVal:
            tmp = self.head
            self.head = SLNode(val)
            self.head.next = tmp
        else:
            pointer = self.head
            while (pointer.next):
                if pointer.next.value == nextVal:
                    tmp = pointer.next
                    pointer.next = SLNode(val)
                    pointer.next.next = tmp
                    break
                pointer = pointer.next
        return self
    def InsertAfter(self, preval, val):
        pointer = self.head
        while (pointer):
            if pointer.value == preval:
                if pointer.next == None:
                    pointer.next = SLNode(val)
                    self.tail = pointer.next
                else:  
                    tmp = pointer.next
                    pointer.next = SLNode(val)
                    pointer.next.next = tmp
                break
            pointer = pointer.next
        return self
    def RemoveNode(self, val):
        if self.head.value == val:
            self.head = self.head.next
        else:
            pointer = self.head
            while (pointer.next):
                if pointer.next.value == val:
                    tmp = pointer.next.next
                    if tmp == None:
                        self.tail = pointer
                    pointer.next.next = None
                    pointer.next = tmp
                    break
                pointer = pointer.next
        return self
    def ReverseList(self):
        tmp = self.tail
        self.tail = self.head
        self.head = tmp
        lastTemp = self.head
        while (self.tail.next):
            pointer = self.tail
            while(pointer.next):
                if (pointer.next == lastTemp):
                    pointer.next = None
                    lastTemp.next = pointer
                    lastTemp = pointer
                    break
                pointer = pointer.next

class SLNode(object):
    def __init__(self, value):
        self.value = value
        self.next = None

list1 = SList()
list1.head = SLNode(1)
list1.head.next = SLNode(2)
list1.head.next.next = SLNode(3)
list1.head.next.next.next = SLNode(4)
list1.head.next.next.next.next = SLNode(5)
list1.tail = list1.head.next.next.next.next

list1.ReverseList()
list1.printAllVals()
print('---')
print(list1.head.value)
print('---')
print(list1.tail.value)
print('---')

