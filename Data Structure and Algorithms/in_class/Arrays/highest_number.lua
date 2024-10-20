local x = {}

for i = 1, 5 do
    x[i] = tonumber(io.read())
end

table.sort(x, function (a, b)
    return a > b
end)

local highest_number = x[1];
local lowest_number = x[5];

print(
    "highest_number", highest_number,
    "lowest_number", lowest_number
)