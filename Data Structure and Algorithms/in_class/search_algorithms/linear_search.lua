function LinearSearch(Array, index)
    for i, v in pairs(Array) do
        if v == index then
            return i
        end
    end

    return -1
end


local Items = {
    gas = 5,
    book = 10,
}

local foundItem = LinearSearch(Items, 5)
print(foundItem ~= -1 and "found" or "not found")
print(foundItem)