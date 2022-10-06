from datetime import datetime
from typing import final
name=input("enter your name")
#list of items
lists='''
maggi RS 100/kg
rice Rs 10/kg
paneer Rs 120/kg
oil Rs 10/kg
'''
print(lists)
#declaration
price=0
pricelist=[]
Finalfinalprice=0
totalprice=0
ilist=[]
qlist=[]
plist=[]
#rates per item
items= {'maggi':100,'rice':10,'paneer':100,'oil':120}
option=int(input("for list of items press1:"))
if option==1:
        print(lists)
        for i in range(len(items)):
                inp1=int(input("if you want to buy press1 or 2 for exist"))
                if inp1==2:
                        break
                if inp1==1:
                        item=input("enter your items")
                        quantity=int(input("enter quantity:"))
                        if item in items.keys():
                                price=quantity*(items[item])
                                pricelist.append((item,quantity,items,price))
                                totalprice+=price
                                ilist.append(item)
                                qlist.append(quantity)
                                plist.append(price)
                                gst=(totalprice*5)/100
                                finalamount=gst+totalprice
                        else:
                                print("not avalible item")
                        
                else:
                                print("entered the wrong item")
                                int=input("yes or no bill:")
                                if inp=='yes':
                                        pass
                                if finalamount!=0:
                                        for i in range(len(pricelist)):
                                                print(i,ilist[i],qlist[i],plist[i])


                                
