from pickle import OBJ
from signal import default_int_handler


class Mobile:
    def _init_(self,Brand,Camera,Price):
      self.Brand=Brand
      self.Camera=Camera
      self.Price=Price     
    def display(self):
     print("Brand:",self.Brand)
     print("Camera:",self.Camera)
     print("Price:",self.Price)
obj=Mobile('apple','10mpa','20rs')
obj.display()     

