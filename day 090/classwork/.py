def rot13_1(mes):
    res = ""
    lower = "abcdefghijklmnopqrstuvwxyz"
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    rot_lower = "nopqrstuvwxyzabcdefghijklm"
    rot_upper = "NOPQRSTUVWXYZABCDEFGHIJKLM"
    
    for i in mes:
        if i in lower:
            res += rot_lower[lower.index(i)]
        elif i in upper:
            res += rot_upper[upper.index(i)]
        else:
            res += i
    return res


def rot13_2(mes):
    res = ""
    alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    rot = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    
    for i in mes:
        if i in alph:
            res += rot[alph.index(i)]
        else:
            res += i
    return res


def generate_hashtag(s):
    if s == "":
        return False
    
    words = s.split()
    
    if len(words) == 0:
        return False
    
    res = "#"
    
    for w in words:
        first = w[0].upper()
        rest = w[1:].lower()
        res += first + rest
        
    if len(res) > 140:
        return False
    return res