function Determinant(x)
    -- Method is a*d - b*c for a 2x2 matrix.
    return (
        ( x[1][1] * x[2][2] )
        - -- Subtract Here!
        ( x[1][2] * x[2][1] )
    );
end

function Determinant3x3(x)
    a = x[1][1]; b = x[1][2]; c = x[1][3];
    d = x[2][1]; e = x[2][2]; f = x[2][3];
    g = x[3][1]; h = x[3][2]; i = x[3][3];

    A = ( a * ( e*i - f*h ) ) - ( b * ( d*i - f*g ) ) + ( c * ( d*h - e*g));
    -- Finding the Determinant which is A
    return A
end

x = {
    {2 , 9},
    {3, 10}
}

x3 = {
    {3, 6, 9},
    {7, 9, 3},
    {8, 2, 4},
}

print("Determinant 2x2 is ", Determinant(x));
print("Determinant 3x3 is ", Determinant3x3(x3))