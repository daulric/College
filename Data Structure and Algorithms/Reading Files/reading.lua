local script_dir = debug.getinfo(1, "S").source:match("@(.*/)")
local file_name = script_dir.."example.txt";

local file_info = io.lines(file_name);
local lines = {};

for line in file_info do
    lines[#lines + 1] = line;
end

print(table.concat(lines, "\n"));