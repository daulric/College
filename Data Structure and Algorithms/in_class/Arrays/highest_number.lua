local x = {}

for i = 1, 5 do
    x[i] = tonumber(io.read())
end

local function largest_num(x)
    local highest = x[1];

    for i = 2, #x do
        if (x[i] > highest) then
            highest = x[i];
        end
    end

    return highest;
end


local highest_number = largest_num(x);
print("highest_number", highest_number)