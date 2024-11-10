function CreateNode(value)
    return {
        value = value,
        next = nil,
    }
end

local LinkedList = {}
LinkedList.__index = LinkedList

function LinkedList.new()
    return setmetatable({head = nil}, LinkedList);
end

function LinkedList:print()
    local current = self.head;
    while current do
        io.write(tostring(current.value));
        current = current.next;

        if current ~= nil then
            io.write("->")
        end
    end

    io.write("\n");
end

function LinkedList:add(value)
    if self.head == nil then
        self.head = CreateNode(value);
    else
        local current = self.head;
        while current ~= nil and current.next ~= nil do
            current = current.next;
        end

        current.next = CreateNode(value);
    end
end

function LinkedList:remove(value)
    if not self.head then return end;

    if self.head.value == value then
        self.head = self.head.next;
        return;
    end

    local current = self.head;

    while current ~= nil and current.next ~= nil and current.next.value ~= value do
        current = current.next;
    end

    if current and current.next then
        current.next = current.next.next;
        return;
    end

end

function LinkedList:sort(func)
    if self.head == nil then return end;

    repeat
        local swapped = false;
        local current = self.head;

        while current ~= nil and current.next ~= nil do
            if func(current.value, current.next.value) then
                current.value, current.next.value = current.next.value, current.value;
                swapped = true;
            end

            current = current.next;
        end

    until not swapped
end

function LinkedList:insert_start(value)
    local node = CreateNode(value);
    node.next = self.head;
    self.head = node;
end

function LinkedList:insert_after(value, pos)
    if pos < 1 then return end;

    local newNode = CreateNode(value);
    local temp = self.head;

    if pos == 0 then
        self:insert_start(value);
        return;
    end

    for _ = 1, pos - 1 do
        if not temp then return end;
        temp = temp.next;
    end

    if not temp then return end;
    newNode.next = temp.next;
    temp.next = newNode;
end

function LinkedList:insert_before(value, pos)
    local new_node = CreateNode(value);
    local current_pos = 1;
    local current = self.head;
    local prev;

    while current and current_pos < pos do
        prev = current;
        current = current.next;
        current_pos = current_pos + 1;
    end

    if not current then return end;
    prev.next = new_node;
    new_node.next = current;
end

function LinkedList:getLength()
    if not self.head then return 0; end
    local current = self.head;
    local length = 1;

    while current ~= nil and current.next ~= nil do
        length = length + 1;
        current = current.next;
    end

    return length;
end

function LinkedList:remove_duplicates()
    if not self.head then return end;

    local current = self.head;

    while current do
        local runner = current;

        while runner and runner.next do
            if runner.next.value == current.value then
                runner.next = runner.next.next
            else
                runner = runner.next;
            end
        end

        current = current.next;
    end

end

function LinkedList:clear()
    self.head = nil;
end

return LinkedList;