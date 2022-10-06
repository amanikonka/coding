import tkinter as tk
from tkinter import ttk
from tkinter import scrolledtext
root=tk.Tk()
root.title("scrolledtext")
root.geometry("600x600")
ttk.Label(root,text="python life",background="blue",foreground="white",font=("arial",15)).grid(row=0,column=1)
#scrolled
text1=scrolledtext.ScrolledText(root,wrap=tk.WORD,width=40,height=10)
text1.grid(column=0,padx=10,pady=10)
text1.focus()


root.mainloop()