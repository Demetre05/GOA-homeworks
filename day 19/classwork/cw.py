sum = 0

for num in range(5):
    num = int(input("enter number: "))
    sum += num
print(sum)

if sum % 2 == 0:
    print("this number is even")
else:
    print("this number is odd")



num1 = int(input("please, enter number: "))

while num1 % 5 != 0 and num1 % 7 != 0:
    num1 = int(input("please, enter number: "))
print(num1)







balance = 200

if balance >= 1500:
    print("laptop")
elif balance >= 1000:
    print("telephone")
elif balance >= 100:
    print("shoes")
elif balance >= 50:
    print("jacket")
elif balance >= 5:
    print("notebook")
else:
    print("you can't buy anything")



num2 = int(input("enter some number: "))

if num2 > 0:
    print("positive")
elif num2 < 0:
    print("negative")
else:
    print("0")

