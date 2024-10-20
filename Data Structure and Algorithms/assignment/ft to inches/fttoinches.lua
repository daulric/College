local function ftToinches(ft) 
    return ft * 12;
end

local ft = tonumber(io.read())
print("Ft to Inches:", ftToinches(ft))