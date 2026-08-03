def dashatize(n):
    res = ""
    if n < 0:
        n *= -1
    text = str(n)
    for i in range(len(text)):
        if int(text[i]) % 2 == 0:
            res += text[i]
        else:
            res += "-" + text[i] + "-"
    return res.strip("-").replace("--", "-")


def transpose(matrix):
    result = []
    min_matrix = []
    iter_count = len(matrix[0])
    for i in range(iter_count):
        for l in matrix:
            min_matrix.append(l[0])
            l.pop(0)
        result.append(min_matrix)
        min_matrix = []
    return result


def group_by_commas(n):
    if n >= 1000:
        result = ""
        text = str(n)
        for i in range(len(text)):
            if (len(text[i:]) - 1) % 3 == 0:
                result += text[i] + ","
            else:
                result += text[i]
        return result[:-1]
    return str(n)


def compute_depth(n):
    count = 0
    seen = []
    while len(seen) < 10:
        count += 1
        mult = n * count
        for i in str(mult):
            if i not in seen:
                seen.append(i)
    return count