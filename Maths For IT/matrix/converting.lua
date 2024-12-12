local hex_vals = {
    [10] = 'A',
    [11] = 'B',
    [12] = 'C',
    [13] = 'D',
    [14] = 'E',
    [15] = 'F'
}


local function dec_to_binary(x)
    if x == 0 then return "0" end

    local remainders = {};
    local divisor = x;

    while (divisor > 0) do
        table.insert(remainders, (divisor % 2));
        divisor = math.floor(divisor / 2);
    end

    local binary_number = "";

    for i = #remainders, 1, -1 do
        binary_number = binary_number..remainders[i];
    end

    return binary_number;
end

local binary_number = dec_to_binary(16);
print("bin", binary_number);

local function dec_to_hex(x)
    
    if x == 0 then return 0 end

    local divisor = x;
    local remainders = {};

    while divisor > 0 do
        table.insert(remainders, (divisor % 16));
        divisor = math.floor(divisor / 16);
    end

    local hex_number = "";

    for i = #remainders, 1, -1 do
        local hex = remainders[i];
        if (hex_vals[hex]) then
            hex_number = hex_number..hex_vals[hex];
        else
            hex_number = hex_number.. hex;
        end
    end

    return hex_number;
end

local hex_num = dec_to_hex(2637);
print("hex", hex_num);

local function dec_to_oct(x)

    if x == 0 then return "0" end;

    local remainders = {};
    local divisor = x;

    while (divisor > 0) do
        table.insert(remainders, (divisor % 8));
        divisor  = math.floor(divisor / 8);
    end

    local octal_number = "";

    for i = #remainders, 1, -1 do
        octal_number = octal_number.. remainders[i];
    end

    return octal_number;
end

local octal_num = dec_to_oct(347);
print("oct", octal_num);

local function bin_to_dec(x)
    local num = tostring(x);

    local bin_splits = {};

    string.gsub(num, ".", function (c)
        table.insert(bin_splits, c);
    end)

    local dec_number = 0;

    for i = #bin_splits, 1, -1 do
        local nux = math.floor(2^(#bin_splits-i));
        local nux2 = tonumber(bin_splits[i]);
        dec_number = dec_number + (nux * nux2);
    end

    return dec_number;
end

local bin_convert = bin_to_dec(binary_number);
print("bin - dec", bin_convert);

local function hex_to_dec(x)
    local num = tostring(x);

    local hex_splits = {};

    string.gsub(num, ".", function (c)
        table.insert(hex_splits, c);
    end)

    local dec_number = 0;

    for i = #hex_splits, 1, -1 do
        local nux = math.floor(16^(#hex_splits-i));
        local temp_str = string.upper(hex_splits[i]);

        local val = nil;

        for k, v in pairs(hex_vals) do
            if (v == temp_str) then
                val = k;
                break;
            end
        end

        if val then
            dec_number = dec_number + ( nux *  val);
        else
            dec_number = dec_number + (nux * tonumber(temp_str));
        end

    end

    return dec_number

end

local hex_convert = hex_to_dec(hex_num);
print("hex - dec", hex_convert);

local function oct_to_dec(x)
    local num = tostring(x);

    local oct_splits = {};

    string.gsub(num, ".", function (c)
        table.insert(oct_splits, c);
    end)

    local dec_number = 0;

    for i = #oct_splits, 1, -1 do
        local nux = math.floor(8^(#oct_splits-i));
        local nux2 = tonumber(oct_splits[i]);
        dec_number = dec_number + (nux * nux2);
    end

    return dec_number;
end

local oct_convert = oct_to_dec(octal_num);
print("oct - dec", oct_convert);

local function dec_to_custom_base(x, base)

        if (type(base) ~= "number") then return "0" end;

        if x == 0 then return "0" end;
    
        local remainders = {};
        local divisor = x;
    
        while (divisor > 0) do
            table.insert(remainders, (divisor % base));
            divisor  = math.floor(divisor / base);
        end
    
        local base_number = "";
    
        for i = #remainders, 1, -1 do
            base_number = base_number.. remainders[i];
        end
    
        return base_number;
end

local custom_base_convert = dec_to_custom_base(100, 5);
print("dec to custom base:", custom_base_convert);