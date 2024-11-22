local LinkedList = require("list")

local list = LinkedList.new();

for i = 10, 1, -1 do
    list:add(math.random(1,5))
end

list:print();
list:sort(function (a, b)
    return a > b
end)

print(list:getLength());
list:print();
list:insert_after(10, 3);
list:insert_before(4, 2);

list:sort(function (a, b)
    return a > b
end);

print(list:getLength());
list:print();
list:print();

list:remove_duplicates()
list:print();
print(list:getLength());

list:clear();
list:print();
print(list:getLength());