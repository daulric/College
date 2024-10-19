function create_pyramid(height) 
    for i = 1, height do
        for j = 1, height - i do
            io.write(" ");
        end

        for j = 1, i do
            io.write("#");
        end

        io.write("\n");
    end
end

local height;

while true do
    io.write("Enter height: ");
    height = tonumber(io.read());

    if not height then
        print("Must be a integer: ");
    elseif height > 8 or height < 0 then
        print("height must be between 1 - 8: ")
    else 
        break
    end
end

create_pyramid(height)