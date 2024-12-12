local function fibonacci(x)
    if (x <= 0) then return 0 end;
    if (x == 1) then return 1 end;
    return fibonacci(x - 2) + fibonacci(x - 1);
end

print(fibonacci(10));