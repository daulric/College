def factorial(n):
    if n <= 0:
        return 1

    print(n)
    return n * factorial(n - 1)

def inverse_factorial(n):
    x = 1
    factorial = 1 # this is what will return if the number is a valid factorial

    while (factorial < n): # this loops until the factorial variable is more than the initial value inputed
        x += 1
        factorial *= x
    
    if factorial == n: # check to see if the factorial variable that was multiplied is equal to the initial value inputed
        return x # Return the x variable if inputed
    else:
        return -1 # Return -1 to indicate that the factorial variable inputed is not a valid factorial number.

x = factorial(28)
y = factorial(2) * factorial(26)

z = (x / y) # this is for a differnt
print(z)

# Inverse Factorial
print("inverse of x and y: ", f"x: {inverse_factorial(x)}", f"y: {inverse_factorial(y)}") # the y variable outputs -1 because it is not a valid factorial number