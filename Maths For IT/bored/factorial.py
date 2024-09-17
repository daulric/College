def factorial(n):
    if n <= 0:
        return 1

    print(n)
    return n * factorial(n - 1)

x = factorial(28)
y = factorial(2) * factorial(26)

z = (x / y)
print(z)