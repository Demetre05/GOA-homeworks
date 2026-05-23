# 1) ----------------------------------------------------------------------------------------------------------------------------------

def get_sum(a,b):
    res = 0
    if a == b:
        return a
    else:
        if a < b:
            for i in range(a, b+1):
                res += i
        elif a > b:
            for i in range(b, a+1):
                res += i
        return res
    


# 2) ----------------------------------------------------------------------------------------------------------------------------------

def find_next_square(n):
    if n ** 0.5 != int(n ** 0.5):
        return -1
    else:
        return (n ** 0.5 + 1) ** 2



# 3) ----------------------------------------------------------------------------------------------------------------------------------

def divisors(intr):
    res = []
    for i in range(2, intr):
        if intr % i == 0:
            res.append(i)
    if res == []:
        return f"{intr} is prime"
    return res



# 4) ----------------------------------------------------------------------------------------------------------------------------------

def duplicate_count(text):
    list = []
    for i in text:
        list.append(i.lower())
    
    processed = []
    res = 0
    for n in list:
        if n not in processed:
            count = 0
            for x in list:
                if x == n:
                    count += 1
            if count > 1:
                res += 1
            processed.append(n)
    return res