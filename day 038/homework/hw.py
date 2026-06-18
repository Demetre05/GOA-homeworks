# default პარამეტრი არის პარამეტრი, რომელსაც გააჩნია ქარხნული მნიშვნელობა, ანუ ამ პარამეტრს თავიდანვე აქვს მინიჭებული მნიშვნელობა და
# საჭიროა, რომ ეს მნიშვნელობა გამოაჩინოს იმ შემთხვევაში, თუ მომხმარებელმა ამ პარამეტრში სხვა არაფერი შეიტანა.



user_name = input("enter your name: ")

def my_name(name = "Demetre"):
    a = ""
    for i in range(len(name)):
        print(name[i])
        a += name[i]
    return a
print(my_name(user_name))