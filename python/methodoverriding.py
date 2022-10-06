class A:
    def display(self):
        print("this is classA")
class B(A):
    def display(self):
        print("this is class B")
        super().display()
obj=B()
obj.display()