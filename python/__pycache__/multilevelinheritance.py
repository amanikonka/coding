class parent:
    def fun1(self):
        print("this is parent")
class child(parent):
    def fun2(self):
        print("this is child")
class grandchild(child):
    def fun3(self):
        print("this is grandchild")
obj=grandchild()
obj.fun1()
obj.fun2()
obj.fun3()