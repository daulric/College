local function check_string_match(str1, str2) 
    if (string.len(str1) ~= string.len(str2)) then
        return false
    end

    local length = string.len(str1);

    local str1Table = {};
    local str2Table = {};
   
    for i = 1, length do
        table.insert(str1Table, str1:sub(i, i));
        table.insert(str2Table, str2:sub(i, i));
    end

    table.sort(str1Table)
    table.sort(str2Table);
    local revised = table.concat(str1Table);
    local revised2 = table.concat(str2Table);

    return revised == revised2;
end

local str1 = io.read();
local str2 = io.read();

local isSame = check_string_match(str1, str2);
if (isSame) then
    print("String Matched")
else
    print("String Not Match!")
end