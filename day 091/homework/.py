def land_perimeter(arr):
    res = 0
    for i in range(len(arr)):
        for x in range(len(arr[i])):
            if arr[i][x] == "X":
                if i > 0:
                    if arr[i-1][x] != "X": res += 1
                else: res += 1
                if i < len(arr[:-1]):
                    if arr[i+1][x] != "X": res += 1
                else: res += 1
                if x > 0:
                    if arr[i][x-1] != "X": res += 1
                else: res += 1
                if x < len(arr[i][:-1]):
                    if arr[i][x+1] != "X": res += 1
                else: res += 1
    return f"Total land perimeter: {res}"