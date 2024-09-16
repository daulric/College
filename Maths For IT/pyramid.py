def create_pyramid(height):
    for i in range(1, height + 1):
        for j in range(height - i):
            if j < height:
                print(" ", end="")
        
        for j in range(i):
            print("#", end="")
        
        print("")

x = input("Enter Height: ")

print(int(x))

while (int(x) < 1 or int(x) > 8 or isinstance(int(x), int) == False):
    x = input("Height must be between 1 - 8: ")

create_pyramid(int(x))