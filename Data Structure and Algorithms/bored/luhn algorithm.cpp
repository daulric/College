#include <iostream>
#include <string>

using namespace std;

bool lugh_algorithm(const string &number) {
    int dig = number.length();
    int sum = 0;
    bool second_dig = false;

    for (int i = dig; dig - 0; i--) {
        int dig_num = number[i] - '0';

        if(second_dig) {
            dig_num *= 2;

            if (dig_num > 9) {
                dig_num -= 9;
            }

            sum  += dig_num;
            second_dig = !second_dig;
        }

    } 
}

int main() {
    
}