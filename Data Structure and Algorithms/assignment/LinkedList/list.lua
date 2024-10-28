Node = {}
Node.__index = Node;

function Node:new(data)
    return setmetatable({data = data, next=nil}, Node);
end

LinkedList = {}
LinkedList.__index = LinkedList;

function LinkedList:new()
    return setmetatable({head=nil}, LinkedList);
end

function LinkedList:insert_at_beginning(data)
    local newNode = Node:new(data);
    newNode.next = self.head;
    self.head = newNode;
end

function LinkedList:insert_at_end(data)
    local newNode = Node:new(data);

    if not self.head then
        self.head = newNode;
    else
        local temp = self.head;

        while temp.next do
            temp = temp.next;
        end

        temp.next = newNode;
    end
end

function LinkedList:insert_after_position(data, position)

    if position < 0 then return; end

    if position == 0 then
        self:insert_at_beginning(data);
        return;
    end

    local newNode = Node:new(data);
    local temp = self.head;
    local count = 1;

    while temp and count < position do
        temp = temp.next;
        count = count + 1;
    end

    if not temp then return; end

    newNode.next = temp.next;
    temp.next = newNode;
end

function LinkedList:insert_before_position(data, position)
    if (position < 0) then return end;

    if (position == 0) then
        self:insert_at_beginning(data);
        return;
    end

    local NewNode = Node:new(data);
    local temp = self.head;
    local count = 1;

    while (temp and count < position - 1) do
        temp = temp.next;
        count = count + 1;
    end

    if not temp then return; end
    NewNode.next = temp.next;
    temp.next = NewNode;

end

function LinkedList:print_list()
    local temp = self.head;
    io.write("[");
    while temp do
        io.write(temp.data);
        temp = temp.next;
        if temp then
            io.write(" ");
        end
    end

    io.write("]\n");
end

local list = LinkedList:new();

list:insert_at_beginning(2);
list:insert_at_end(1);
list:insert_at_end(3)
list:insert_at_end(4);
list:insert_after_position(5, 1)
list:insert_after_position(6, 2)
list:insert_after_position(7, 3)
list:print_list();
list:insert_before_position(9, 3)

list:print_list();