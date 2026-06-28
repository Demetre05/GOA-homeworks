def order(sentence):
    score = 0
    string = ""
    for x in sentence.split():
        if len(x) == 1:
            score += 1
    if len(sentence.split()) == score:
        for i in sorted(sentence.split()):
            string += i + " "
        return string[:-1]
    else:
        result = ""
        numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        for word in sentence.split():
            for num in word:
                if num in numbers:
                    numbers[int(num)] = word
        for i in numbers:
            if len(i) > 1:
                result += i + " "
        return result[:-1]