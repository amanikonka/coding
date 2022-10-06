import tkinter as tk
from tkinter import ttk
root=tk.Tk()
root.title("combobox")
root.geometry("600x600")
ttk.Label(root,text="python life",background="blue",foreground="white",font=("arial",15)).grid(row=0,column=1)
#combobox
n=tk.StringVar()
course=ttk.Combobox(root,width=27,textvariable=n)
course['values']=("pyton","django","machine learning")
course.grid(column=1,row=5)
course.current()
root.mainloop()