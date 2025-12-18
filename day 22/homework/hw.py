# 1)___________________________________________________________________________________________________________________________________

num = int(input("enter number: "))

while num < 25:
    if num % 2 == 0:
        print("this number is even")
    else:
        print("this number is odd")
    num += 1

# 2)___________________________________________________________________________________________________________________________________

num1 = int(input("enter number1: "))

if num1 % 2 == 0:
    print("this number is even")
elif num1 % 3 == 0:
    print("this number is multiple of three")
elif num1 % 4 == 0:
    print("this number is multiple of four")
elif num1 % 5 == 0:
    print("this number is multiple of five")
else:
    print("other numbers")

# 3)___________________________________________________________________________________________________________________________________

for i in range(20):
    if i == 10:
        print("we are on the halfway there!")
    elif i % 2 == 0:
        print("this number is even")
    else:
        print("this number is odd")
    