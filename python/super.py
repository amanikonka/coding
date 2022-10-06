class A:
    def _init_(self):
     print("a")
    def fun1(self):
     print("father")
class B(A):
    def _init_(self):
     print("b")
    super().__init__()
    def fun2(self):
     print("mother")
obj=B()        