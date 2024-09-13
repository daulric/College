#include <iostream>
#include <string>

using namespace std;

bool lugh_algorithm(const string &number) {
    int dig = number.length();
    int sum = 0;
    bool second_dig = false;

    for (int i = dig - 1; i >= 0; i--) {
        int dig_num = number[i] - '0';

        if (second_dig) {
            dig_num *= 2;
            if (dig_num > 9) {
                dig_num -= 9;
            }
        }

        sum += dig_num;
        second_dig = !second_dig;
    } 

    return (sum % 10 == 0);
}

int main() {
    cout << "Enter Your Credit Card Number" << endl;
    string Cred_Number;
    cin >> Cred_Number;

    if (lugh_algorithm(Cred_Number)) {
        cout << "Credit Card Number is valid" << endl;
    } else {
        cout << "Credit Card Number is not valid" << endl;
    }

}