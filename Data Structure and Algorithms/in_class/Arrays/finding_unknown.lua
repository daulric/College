local function find_highest(Array)
    local max = Array[1];

    for i = 2, #Array do
        if Array[i] >= max then
            max = Array[i];
        end
    end

    return max;
end

local x = {}

io.write("enter size of number:")
local size = tonumber(io.read())

for i  = 1, size do
    x[i] = tonumber(io.read())
end

local highest_number = find_highest(x)
print("highest_number: " .. highest_number)