#include <iostream>
#include <string>

using namespace std;

int main() {
    int age = 10;

    int *i_age = &age;

    cout << *i_age << endl;

    age = 100;
    cout << *i_age << endl;

    /// Strin nbf bj
    
    string str = "jjncjnejncj";
    string *i_str = &str;

    cout << *i_str << " " << i_str << endl;

    str = "ndjsjEJIjli";
    cout << *i_str << " " << i_str << endl;
}