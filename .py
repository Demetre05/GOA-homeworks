def is_anagram(test, original):

    l_test = test.lower()
    list = []

    l_original = original.lower()
    list1 = []

    for i in l_test:
        list.append(i)

    for i in l_original:
        list1.append(i)

    if list in list1:
        return True
    return False

# print(is_anagram("hello", "olleh"))




def anagram(a, b):
    if a in b:
        return False
    return True

# print(anagram("hello", "olleh"))




if "hello" in "helol":
    print(True)
else:
    print(False)



def anagram(a1, b1):
    c = 0
    a = a1.lower()
    b = b1.lower()
    for i in a:
        if i in b:
            c += 1
    if len(b) == 1:
        return False
    elif c == len(b):
        return True
    return False