-- This is a linear sequential algorithm;
local function getSequence(arr)
    local length = #arr;
    local seq = nil;

    for i = 1, length do
        local increment = i+1;
        
        if increment > length then
            return;
        end

        local temp_seq = arr[increment] - arr[i];

        if seq == nil then
            seq = temp_seq;
        elseif seq ~= temp_seq then
            print("Not a Sequence");
            return
        end
    end

    return seq, arr
end

local function getPositionSequence(position, n, arr)
    -- The position parameter is to figure out what is the index value for the given position.

    if (n == nil and arr == nil) or position == nil then
        return;
    end

    for i = #arr, position do
        local temp = arr[i] + n;
        table.insert(arr, temp);
    end

    return arr[position], arr
end

return {
    GetSequence = getSequence,
    GetPositionSequence = getPositionSequence,
}