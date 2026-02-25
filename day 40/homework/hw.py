# Write a function `greet` that returns "hello world!".

def greet():
    return "hello world!"


# We need a function that can transform a string into a number.

def string_to_number(s):
    return int(s)


# Write a program that finds the summation of every number from 1 to num (both inclusive).

def summation(num):
    sum = 0
    for i in range(1, num+1):
        sum += i
    return sum


# Given an array of integers your solution should find the smallest integer.

def find_smallest_int(arr):
    smallest = arr[0]
    for i in arr:
        if i < smallest:
            smallest = i
    return smallest