function insertion_sort(Array)
    for i = 2, #Array do

        if Array[i] ~= nil then
            local key = Array[i];
            local j = i - 1

            while j >= 1 and Array[j] > key do
                Array[j+1] = Array[j];
                j = j - 1;
            end

            Array[j+1] = key;
        end
    end
end

local array = {3, 2, 9, 0, 1}
print(table.concat(array, " "))
insertion_sort(array)
print(table.concat(array, " "))