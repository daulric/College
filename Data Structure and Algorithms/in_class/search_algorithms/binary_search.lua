local function binarySearch(list, target)
    local right = #list;
    local left = 0;

    while (right > left) do
        local mid = left + math.floor(right - left);
        print("Mid Point:", list[mid]);

        if list[mid] == target then
            return mid;
        elseif list[mid] < target then
            left = mid + 1;
        elseif list[mid] > target then
            right = mid - 1;
        end
    end

    return -1
end

local list = {};

for i = 1, 1000 do
    table.insert(list, math.random(1, 1000)); -- For Randomness;
end

local target = 10;
local result = binarySearch(list, target);
io.write("Index: ", result);