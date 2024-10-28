function ReverseItem(x)
    local item = {};
    local reversed_item = {};

    for i = 1, string.len(x) do
        table.insert(item, string.sub(x, i, i));
    end

    for i = string.len(x), 1, -1 do
        table.insert(reversed_item, item[i]);
    end

    return table.concat(reversed_item, "");
end

local x = io.read();
print(ReverseItem(x));