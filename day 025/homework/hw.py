# index-ი არის ცვლადის თითოეული ელემენტის ინდივიდუალური ნომერი, რომელიც გვეხმარება კონკრეტული ელემენტის მარტივად და
# უშეცდომოდ გამოყენებაში. (პირველი index-ი ყოველთვის 0-ია)

# ელემენტები მარცხნიდან მარჯვნივ 0-ითა და შემდეგ დადებითი ინდექსებით, ხოლო მარჯვნიდან მარცხნივ უარყოფითი ინდექსებითაა დანომრილი.
# ათვლა კი იწყება (-1)-დან, და არა ნულიდან.



shopping_list = ["apple", "banana", "carrot", "cabbage", "potato", "grape", "fish", "beef"]

print(shopping_list)
print(shopping_list[2])
print(shopping_list[4], shopping_list[5])

shopping_list[3], shopping_list[4] = shopping_list[4], shopping_list[3]
print(shopping_list)

shopping_list[6] = "juice"
shopping_list[0], shopping_list[2] = "apple juice", "carrot juice"
print(shopping_list)

print(shopping_list[-4])
print(shopping_list[-7])

print(len(shopping_list))