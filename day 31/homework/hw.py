# dot notation - ჩაშენებულ ფუნქციებს ეწოდება, რაც ნიშნავს, რომ გარკვეული ფუნქცია განკუთვნილია და მუშაობს მხოლოდ ერთ კონკრეტულ
# მონაცემთა ტიპზე.



# .upper() ფუნქცია მთელ სტრინგს upper_case-ით წერს:

print("lOnDoN".upper()) # LONDON
print("washington".upper()) # WASHINGTON
print("mERceDeS".upper()) # MERCEDES


# .lower() ფუნქცია მთელ სტრინგს lower_case-ით წერს:

print("cANaDa".lower()) # canada
print("BMW".lower()) # bmw
print("tABlE".lower()) # table


# .capitalize() ფუნქცია-ს სტრინგში მხოლოდ პირველი ასო upper_case-ში გადაჰყავს:

print("dOG".capitalize()) # Dog
print("CAT".capitalize()) # Cat
print("rOoF".capitalize()) # Roof


# .title() ფუნქციას სტრინგის თითოეული სიტყვის პირველი ასო გადაჰყავს upper_case-ში:

print("i lOVe gOa".title()) # I Love Goa
print("heLlO, hoW aRe yOU".title()) # Hello, How Are You
print("wHAT arE YoU dOIng".title()) # What Are You Doing


# .find() ფუნქცია საჭიროა სტრინგში გარკვეული მონაკვეთის პოვნაში:

print("I'm fine, what about you?".find("what")) # index = 10
print("hello".find("l")) # index = 2
print("computer".find("comp")) # index = 0