import random

class Hospital(object):
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity
        self.patients = []
    def admit(self, patient):
        if len(self.patients) >= (self.capacity):
            print ("The hospital is full!")
        else:
            patient.bedNumber = random.randint(1,self.capacity)  
            self.patients.append(patient)
            print ("New patient #{} has been added").format(patient.id)
        return self
    def discharge(self, patient):
        if (len(self.patients) > 0):
            for i in range(len(self.patients)):
                if (self.patients[i]==patient):
                    patient.bedNumber = None
                    self.patients.pop(i)
                    print ("Patient #{} has been released").format(patient.id)
                    break
        return self
    def info(self):
        for each in self.patients:
            print("Name: {}, ID: {}, Allergies: {}, Bed Number: {}").format(each.name, each.id, each.allergies, each.bedNumber)
        return self

class Patient(object):
    def __init__(self, id, name, allergies):
        self.id = id
        self.name = name
        self.allergies = allergies
        self.bedNumber = None

#test
patient1 = Patient(3, "Dima", "Cats")
patient2 = Patient(6, "Oleg", "Milk")
patient3 = Patient(19, "Michael", "Nuts")
hosp = Hospital("White Chapel", 600)
hosp.admit(patient1).admit(patient2).admit(patient3).info()
hosp.discharge(patient2).info()

