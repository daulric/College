local Node = {}
Node.__index = Node;

function Node:new(data)
    return setmetatable({
        data = data,
        left = nil,
        right = nil,
    }, Node)
end

local BinaryTree = {}
BinaryTree.__index = BinaryTree;

function BinaryTree:new()
    return setmetatable({root = nil}, BinaryTree);
end

local function insert_value(node, value)
    if (value < node.data) then
        if not (node.left) then
            node.left = Node:new(value);
        else
            insert_value(node.left, value);
        end

    elseif (value > node.data) then
        if not (node.right) then
            node.right = Node:new(value);
        else
            insert_value(node.right, value);
        end
    end
end

function BinaryTree:insert(data)
    if not (self.root) then
        self.root = Node:new(data);
        return;
    end

    insert_value(self.root, data)
end

function Order(node)
    if not (node) then return end;

    Order(node.left);
    io.write(node.data.." ")
    Order(node.right);
end

function BinaryTree:print()
    io.write("Tree Order: ")
    Order(self.root);
    io.write("\n");
end

local tree = BinaryTree:new()

tree:insert(1)
tree:insert(2)
tree:insert(4)
tree:insert(3)
tree:insert(5)
tree:insert(-1)

tree:print()

local function pirnt_tree(node)
    for i, v in pairs(node) do
        if type(v) == "table" then
            pirnt_tree(v);
        else
            print(i, v, getmetatable(v));
        end
    end
end

pirnt_tree(tree)