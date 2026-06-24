def high(x):
    alphabet = ".abcdefghijklmnopqrstuvwxyz"
    max_score = 0
    words = x.split()
    highest_word = ""
    
    for word in words:
        score = 0
        for letter in word:
            score += alphabet.index(letter)
        if score > max_score:
            max_score = score
            highest_word = word
    return highest_word



def average_string(s):
    if len(s) == 0:
        return "n/a"
    num_words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    words = s.split()
    score = 0
    for word in words:
        if word in num_words:
            score += num_words.index(word)
        else:
            return "n/a"
    avg = score // len(words)
    return num_words[avg]