local function selection_sort(Array)
    for i = 1, #Array - 1 do
        local min = i;

        for j = i+1, #Array do
            if Array[min] > Array[j] then
                min = j;
            end
        end

        if (min ~= i) then
            Array[min], Array[i] = Array[i], Array[min];
        end

    end
end

local x = {7, 9, 2, -1, 10}

selection_sort(x)

print(table.concat(x, " "))