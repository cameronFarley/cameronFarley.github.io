import sys

def insertion_sort(list):
    index = range(1, len(list))
    for j in index:
        min_value = list[j]

        if list[j-1] > min_value and j > 0:
            list[j], list[j-1] = list[j-1], list[j]
            j -= 1
        else:
            list[j], list[j-1] = list[j], list[j-1]
            j -= 1

    return list

STDIN = []
userInput = sys.stdin

for line in userInput:
    line = line.lower().strip('\n')
    STDIN.append(line)

print(insertion_sort(STDIN))            
