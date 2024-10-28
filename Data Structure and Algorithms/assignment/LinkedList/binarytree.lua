local TableViewer = require("TableViewer")
local BinaryTreeViewer = require("BinaryTreeViewer")

function CreateNode(data)
    return {
        data = data,
        left = nil,
        right = nil,
    }
end

local BinaryTree = {}
BinaryTree.__index = BinaryTree;

function BinaryTree:new()
    return setmetatable({root = nil}, BinaryTree);
end

local function insert_value(node, value)
    if (value < node.data) then
        if not (node.left) then
            node.left = CreateNode(value);
        else
            insert_value(node.left, value);
        end

    elseif (value > node.data) then
        if not (node.right) then
            node.right = CreateNode(value);
        else
            insert_value(node.right, value);
        end
    end
end

function BinaryTree:insert(data)
    if not (self.root) then
        self.root = CreateNode(data);
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
tree:insert(-1)
tree:insert(0)
tree:insert(9)
tree:insert(-2)
tree:insert(-4)
tree:insert(-3)
tree:insert(2)
tree:insert(4)
tree:insert(3)
tree:insert(5)
tree:insert(133)
tree:insert(14)
tree:insert(12)
tree:insert(13)

tree:print()

--TableViewer.view(tree, 1);
print(BinaryTreeViewer:visualize(tree.root));