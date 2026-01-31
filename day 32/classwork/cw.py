names = ["Demetre", "Daviti", "Giorgi", "Nika", "Saba"]

name = input("enter your name: ")

names.append(name)
print(names)

names.insert(3, "Tarieli")
print(names)

names.pop(4)
print(names)

names.remove("Tarieli")
print(names)



if name in names:
    print(names.index(name))
else:
    print("not index in list")