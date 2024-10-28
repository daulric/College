-- TableViewer.lua
local TableViewer = {}

-- Function to view the table with optional indentation for readability
function TableViewer.view(t, indent)
    indent = indent or 0
    local prefix = string.rep("  ", indent) -- Indent based on recursion level
    
    for k, v in pairs(t) do
        if type(v) == "table" then
            print(prefix .. tostring(k) .. " = {")
            TableViewer.view(v, indent + 1)
            print(prefix .. "}")
        else
            print(prefix .. tostring(k) .. " = " .. tostring(v))
        end
    end
end

function TableViewer.viewTree(node, prefix, isLeft)
    if node then
        -- Print the current node
        local connector = isLeft and "+-- " or "`-- "
        print(prefix .. connector .. tostring(node.data))

        -- New prefix for the next depth
        local newPrefix = prefix .. (isLeft and "|   " or "    ")

        -- Display right child first, then left child
        TableViewer.viewTree(node.right, newPrefix, false)
        TableViewer.viewTree(node.left, newPrefix, true)
    end
end

return TableViewer