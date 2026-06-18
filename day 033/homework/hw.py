# .append() - ეს ფუნქცია საშუალებას გვაძლევას სიის ბოლოს ახალი ელემენტი დავამატოთ.
# .insert() - იგივე, რაც .append(), მაგრამ ამჯერად შეგვიძლია მივუთითოთ, თუ რომელ ინდექსზე განვათავსებთ ახალ ელემენტს.
# .pop() - ინდექსის მითითებით შეგვიძლია წავშალოთ ნებისმიერი ელემენტი სიიდან.



cars = ["BMW", "Mercedes", "Porsche"]
print(len(cars))



nums = []

for i in range(5):
    num = int(input("enter number: "))
    nums.append(num)
print(nums)



colors = ["red", "green", "blue", "yellow", "purple"]

colors.pop()
print(colors)



animals = ["dog", "cat", "elephant", "lion"]

animals.insert(1, "monkey")
print(animals)



students = []

for i in range(3):
    names = input("enter your name: ")
    students.append(names)

students.insert(0, "teacher")
students.pop(-1)
print(len(students))
print(students)





# custom ფუნქცია არის ჩვენით შექმნილი ფუნქცია რომელსაც ვიყენებთ კოდის ბლოკის შესაქმნელად და გამოსაყენებლად ფუნქციის სახელის
# გამოძახების მეშვეობით. გვჭირდება იმისთვის, რომ ჩვენთვის საჭირო ფუნქციების ერთობლიობა მრავალჯერ დავწეროთ და ყოველ ჯერზე
# უზარმაზარი ბლოკის დაწერა არ მოგვიწიოს, რითაც დროსაც დავზოგავთ და შეცდომის დაშვების რისკსაც შევამცირებთ.

# custom ფუნქციის შესაქმნელად ჯერ უნდა დავწეროთ def(define, definition), შემდგომ ფუნქციის სახელი მოვიფიქროთ, ფრჩხილებში
# საჭიროების და მიხედვით პარამეტრები გავუწეროთ, ორწერტილი დავსვათ, ახალ ხაზზე ჩამოვიდეთ, ინდენტაცია გამოვყოთ და კოდის ბლოკი
# დავწეროთ. მზადაა! შემდგომ კი შეგვეძლება ამ ფუნქციის გამოძახება ფრჩხილებში არგუმენტების მითითებით(იმ შემთხვევაში, თუ პარამეტრები
# გავუწერეთ).



num_1 = int(input("enter num1: "))
num_2 = int(input("enter num2: "))

def sum(num1, num2):
    return num1 + num2
print(sum(num_1, num_2))



num = int(input("enter some number: "))

def number(num):
     if num % 2 == 0:
         print("this number is even")
     else:
         print("this number is odd")
number(num)



num3 = int(input("enter number: "))

def number1(num3):
    return num3**2
print(number1(num3))



def sentence(words):
    return words.upper()
print(sentence("Hello, how are you"))



def introduction(name, surname):
    return f"Hello, my name is {name} and my surname is {surname}"
print(introduction("Demetre", "Ghlonti"))