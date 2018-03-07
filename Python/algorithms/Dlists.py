class DLNode(object):
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

class DList(object):
    def __init__(self):
        self.head = None
        self.tail = None

    def printAllValues(self):
        pointer = self.head
        while (pointer):
            print (pointer.value)
            pointer = pointer.next

    def AddBack(self, val):
        #if list is empty
        if self.tail == None and self.head == None:
            newNode = DLNode(val)
            self.head = newNode
            self.tail = newNode
        else: 
            self.tail.next = DLNode(val)
            self.tail.next.prev = self.tail
            self.tail = self.tail.next
        return self

    def AddFront(self, val):
        #if list is empty
        if self.tail == None and self.head == None:
            newNode = DLNode(val)
            self.head = newNode
            self.tail = newNode
        else:
            self.head.prev = DLNode(val)
            self.head.prev.next = self.head 
            self.head = self.head.prev
        return self

    def RemoveNode(self, val):
        #if val is head
        if self.head.value == val:
            self.head = self.head.next
            self.head.prev = None
        #if val is tail    
        elif self.tail.value == val:
            self.tail = self.tail.prev
            self.tail.next = None
        else:
            pointer = self.head
            while (pointer):
                if pointer.value == val:
                    pointer.prev.next = pointer.next
                    pointer.next.prev = pointer.prev
                    pointer.prev = None
                    pointer.next = None
                    break
                pointer = pointer.next
        return self

    def InsertBefore(self, nextVal, val):
        #if before head
        if self.head.value == nextVal:
            self.head.prev = DLNode(val)
            self.head.prev.next = self.head
            self.head = self.head.prev
        else:
            pointer = self.head.next
            while (pointer):
                if pointer.value == nextVal:
                    pointer.prev.next = DLNode(val)
                    pointer.prev.next.prev = pointer.prev
                    pointer.prev.next.next = pointer
                    pointer.prev = pointer.prev.next
                    break
                pointer = pointer.next
        return self

    def InsertAfter(self, preval, val):
        #if after tail
        if self.tail.value == preval:
            self.tail.next = DLNode(val)
            self.tail.next.prev = self.tail
            self.tail = self.tail.next
        else:
            pointer = self.head
            while (pointer):
                if pointer.value == preval:
                    pointer.next.prev = DLNode(val)
                    pointer.next.prev.next = pointer.next
                    pointer.next.prev.prev = pointer
                    pointer.next = pointer.next.prev
                    break
                pointer = pointer.next
        return self

list1 = DList()
list1.AddBack(1)
list1.AddBack(2)
list1.AddBack(3)
list1.AddBack(4)
list1.AddBack(5)
list1.AddFront(0)
list1.RemoveNode(5)
list1.InsertAfter(4, 5)
list1.InsertBefore(5, 8)
list1.printAllValues()
print('---')
print(list1.head.value)
print('---')
print(list1.tail.value)
print('---')