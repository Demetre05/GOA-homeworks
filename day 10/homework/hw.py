# შედარებითი ოპერატორები: >, <, >=, <=, ==, !=.
# მაგ:

# > :
30 > 25
67 > 4
34 > 9
89 > 78
56 > 27

# < :
7 < 8
45 < 80
36 < 43
12 < 15
26 < 35

# >= :
51 >= 48
5 >= 5
74 >= 57
23 >= 6
68 >= 68

# <= :
7 <= 10
37 <= 47
45 <= 45
68 <= 69
34 <= 59

# == :
7 == 7
5 == 5
67 == 67
49 == 49
39 == 39

# != :
9 != 8
58 != 4
94 != 62
53 != 47
79 != 108



# ლოგიკური ოპერატორების მეშვეობით ჩვენ შეგვიძლია ლოგიკური მსჯელობით გავარკვიოთ, სწორია წინადადება თუ მცდარი

# true and true = True
# true and false = False
# false and true = False
# false and false = False

# true or true = True
# true or false = true
# false or true = true
# false or false = False

# მაგ:
print(15 > 10 and 7 > 4)
print(27 > 8 and 9 < 6)
print(38 < 29 and 63 > 70)

print(17 > 12 or 9 < 3)
print(3 < 7 or 5 > 2)
print(26 < 19 or False)



num1 = 67
num = int(input("write number: "))
print(num > num1)


name = "demetre"
name1 = input("enter your name: ")
print(name == name1)


age = int(input("enter your age: "))
print(age > 18)
