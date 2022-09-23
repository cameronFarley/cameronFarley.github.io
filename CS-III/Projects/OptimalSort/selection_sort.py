import sys

def selection_sort(list):
    indexing_length = range(0, len(list)-1)

    for i in indexing_length:
        min_value = i

        for j in (i+1, len(list)):
            if list[j] < list[min_value]:
                min_value = j

        if min_value != i:
            list[min_value], list[i] = list[i], list[min_value]

    return list

STDIN = []
userInput = sys.stdin

for line in userInput:
    line = line.lower().strip('\n')
    STDIN.append(line)

print(selection_sort(STDIN))            
