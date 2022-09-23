import sys

def selection_sort(list):
    for i in range(0, len(list) - 1):
        min_index = i
        for j in range(i + 1, len(list)):
            if list[j] < list[min_index]:
                min_index = j

                list[i], list[min_index] = list[min_index], list[i]

    return list
                
STDIN = []
userInput = sys.stdin

for line in userInput:
    line = line.lower().strip('\n')
    STDIN.append(line)

print(selection_sort(STDIN))            
