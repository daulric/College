local TreeVisualizer = {}
TreeVisualizer.__index = TreeVisualizer

function TreeVisualizer.new()
    local self = setmetatable({}, TreeVisualizer)
    return self
end

function TreeVisualizer:getHeight(node)
    if not node then
        return 0
    end
    return 1 + math.max(self:getHeight(node.left), self:getHeight(node.right))
end

-- Helper function to get left profile of the tree
function TreeVisualizer:getLeftProfile(node, profile, level, x)
    if not node then return end
    
    profile[level] = profile[level] and math.min(profile[level], x) or x
    self:getLeftProfile(node.left, profile, level + 1, x - 2)
    self:getLeftProfile(node.right, profile, level + 1, x + 2)
end

-- Helper function to get right profile of the tree
function TreeVisualizer:getRightProfile(node, profile, level, x)
    if not node then return end
    
    profile[level] = profile[level] and math.max(profile[level], x) or x
    self:getRightProfile(node.left, profile, level + 1, x - 2)
    self:getRightProfile(node.right, profile, level + 1, x + 2)
end

-- Create the tree representation
function TreeVisualizer:buildTreeString(node, level, x, lines, leftProfile, rightProfile)
    if not node then return end
    
    -- Initialize line if it doesn't exist
    lines[level] = lines[level] or {}
    
    -- Add node value
    local value = tostring(node.data)
    local pos = x - math.floor(#value / 2)
    
    -- Ensure we have enough space
    while #lines[level] < pos + #value do
        table.insert(lines[level], " ")
    end
    
    -- Insert value
    for i = 1, #value do
        lines[level][pos + i - 1] = value:sub(i, i)
    end
    
    -- Add connectors if there are children
    if node.left or node.right then
        lines[level + 1] = lines[level + 1] or {}
        
        if node.left then
            local connectorPos = x - 1
            while #lines[level + 1] <= connectorPos do
                table.insert(lines[level + 1], " ")
            end
            lines[level + 1][connectorPos] = "/"
        end
        
        if node.right then
            local connectorPos = x + 1
            while #lines[level + 1] <= connectorPos do
                table.insert(lines[level + 1], " ")
            end
            lines[level + 1][connectorPos] = "\\"
        end
    end
    
    -- Recurse for children
    self:buildTreeString(node.left, level + 2, x - 2, lines, leftProfile, rightProfile)
    self:buildTreeString(node.right, level + 2, x + 2, lines, leftProfile, rightProfile)
end

function TreeVisualizer:visualize(root)
    if not root then
        io.write("Empty tree\n")
        return
    end
    
    local leftProfile = {}
    local rightProfile = {}
    local lines = {}
    
    -- Build the tree representation
    self:buildTreeString(root, 0, 20, lines, leftProfile, rightProfile)
    
    -- Output the lines
    for i = 0, #lines do
        if lines[i] then
            -- Trim trailing spaces and convert line to string
            local line = table.concat(lines[i])
            while line:sub(-1) == " " do
                line = line:sub(1, -2)
            end
            io.write(line .. "\n")
        end
    end
end

return TreeVisualizer