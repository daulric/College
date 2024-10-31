local conv = 0.6214;

function display_kilo(kilo)
    local conver = kilo * conv;
    io.write("The converrsion of ", kilo, " to miles is ", conver, " miles")
end

local kilo = io.read();
display_kilo(kilo);