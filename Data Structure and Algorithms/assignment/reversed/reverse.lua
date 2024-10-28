-- Made the Execution time a little quicker
function ReverseItem(x)
    local item = {};
    for i = string.len(x), 1, -1 do
        table.insert(item, string.sub(x, i, i));
    end

    return table.concat(item, "");
end

local x = io.read();
print(ReverseItem(x));