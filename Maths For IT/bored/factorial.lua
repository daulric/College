function factorial(x) 
    if  x == 0 then
        return 1
    end

    return x * factorial(x - 1);
end

local x = tonumber(io.read())
print("x:", x, " = factorial(x):"..factorial(x) )