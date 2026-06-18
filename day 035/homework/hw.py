# custom function არის ფუნქცია, რომელიც ჩვენით შეგვიძლია შევქმნათ და საჭიროა მრავალი კოდის ერთ ფუნქციაში მოსაქცევად. რომ ყოველ
# ჯერზე არ მოგვიწიოს უზარმაზარი კოდის ბლოკის დაწერა.
# ფუნქციის შექმნის ინსტრუქცია:
# 1) ვწერთ "def" keyword-ს;
# 2) ვწერთ ფუნქციის სახელს;
# 3) ბრჩხილებში ვწერთ პარამეტრებს(თუ ეს საჭიროა, გააჩნია ფუნქციას);
# 4) გადმოვდივართ შემდეგ ხაზზე და ვწერთ კოდის ბლოკს;
# 5) return-ით ვაბრუნებთ ფუნქციის საბოლოო პასუხს.



your_name = input("enter your name: ")

def greet(name):
    greeting = f"hello, my name is {name}"
    return greeting

print(greet(your_name))



height = int(input("enter your height: "))
weight = int(input("enter your weight: "))

def bmi(height, weight):
    b = f"your bmi is {weight / height}"
    return b

print(bmi(height, weight))