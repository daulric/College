def polynomial(n):
    for x in range(0, n):
        for y in range(0, n):
            print(x * y)

def bubbleSort(n):
    for x in n:
        for y in n:
            temp = 0
            if x > y:
                temp = y
                y = x
                x = y
    
    print(n)

polynomial(10)