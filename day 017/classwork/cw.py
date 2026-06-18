num = int(input("enter number: "))

if num > 50:
    print(num * 5)
else:
    print(num * num)


password = input("enter password: ")

if password == "goa123":
    print("password is correct")
else:
    print("incorrect password")



sum = 0
num1 = int(input())

for i in range(1, num1 + 1):
    sum += i
print(sum)