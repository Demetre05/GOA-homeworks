def my_len(x):
    c = 0
    for i in x: c += 1
    return c
print(my_len("hello"))


def my_find(word, letters):
    i = 0
    while word[i] != letters[0]:
        i += 1
    return i
print(my_find("hello", "el"))


list = ["hello", "goodbye", "hi", "ok"]


def my_insert(a, i, v):
    return a[:i] + [v] + a[i:]
print(my_insert(list, 2, "fine"))


def my_range(n):
    l = []
    i = 0
    while i < n:
        l.append(i)
        i += 1
    return l
print(my_range(7))