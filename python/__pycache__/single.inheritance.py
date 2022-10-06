class parent:
    def fun1(self):
        print("this is parent")
class child(parent):
    def fun2(self):
        print("this is child") 
obj=child()
obj.fun2()
obj.fun1()