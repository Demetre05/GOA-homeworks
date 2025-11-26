num = 10

while num >= -10:
    print(num)
    num -=1


num1 = 1

while num1 < 100:
    print(num1)
    num1 += 2



attempts = 3

while attempts > 0:
    entered = input("enter password: ")

    if entered == "goa123":
        print("password is correct!")
        break
    else:
        attempts -= 1
        print("Password is incorrect! Try again")
        
        if attempts > 0:
            print(f"{attempts} attempts left")
        else:
            print("")

