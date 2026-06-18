cars = ["Mercedes", "BMW", "Porsche", "Hyundai", "Tesla", "Toyota", "Ferrari", "Audi", "Lexus", "Land Rover"]

print(cars[4])

cars1 = cars[1 : 6]
print(cars1)
print(cars1[-1])

print(cars[0 : -1 : 2])

print(cars[3 : 8 : 3])

cars2 = cars[:5]
print(cars2[::-1])

cars3 = cars
cars[7] = "Lamborgini"
print(cars)
print(cars3)




nums = [5, 7, 19, 10, 8]
ind = 0

for i in range(len(nums)):
    print(nums[ind])
    ind += 1