-- This is a linear sequential algorithm;
local function getSequence(arr)
    local length = #arr;
    local seq = nil;

    for i = 1, length do
        local increment = i+1;
        
        if increment > length then
            break;
        end

        local temp_seq = arr[increment] - arr[i];

        if seq == nil then
            seq = temp_seq;
        elseif seq ~= temp_seq then
            print("Not a Sequence");
            break;
        end
    end

    return seq, arr
end

local function getPositionSequence(position, n, arr)
    for i = #arr, position do
        local temp = arr[i] + n;
        table.insert(arr, temp);
    end

    return arr[position], arr
end

local seq, array = getSequence({-2, 0, 2})
local positionPoint = getPositionSequence(20, seq, array)
print(positionPoint);