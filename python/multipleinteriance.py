class father:
    def fun1(self):
        print("father")
class mother:
    def fun2(self):
        print("mother")
class child(father,mother):
    def fun3(self):
        print("child")
obj=child()
obj.fun1()        