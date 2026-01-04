# type ფუნქციის მეშვეობით ჩვენ შეგვიძლია გავიგოთ მასში დაწერილი რიცხვის ან ქექსტის მონაცემთა ტიპი.  მაგ:
a = "python"
b = 55
c = 1.6
d = True

print(type(a))
print(type(b))
print(type(c))
print(type(d))

# data convertion ნიშნავს მონაცემთა ტიპის ხელოვნურად შეცვლას. ამის გასაკეთებლად გვჭირდება ფუნქციები: int, str, float, bool.
# int - რიცხვის დასაწერად
# str - ტექსტური მონაცემის დასაწერად
# float - ათწილადის დასაწერად
# bool - true და false-ის დასაწერად

#მაგ: 

print(int(50.7))
print(int(79.8))
print(int(46.1))

print(str(28))
print(str(59))
print(str(34))

print(float(7))
print(float(9))
print(float(6))

print(bool(1))
print(bool(0))
print(bool(1))
print(bool(0))





a1 = int(input("number1: "))
b1 = int(input("number2: "))
c1 = int(input("number3: "))

print(a1 + b1 + c1)

a1 = str(input("number1: "))
b1 = str(input("number2: "))
c1 = str(input("number3: "))

print(a1 + b1 + c1)



a2 = (input("enter your name: "))
b2 = int((input("write number: ")))

print(a2 * b2)




