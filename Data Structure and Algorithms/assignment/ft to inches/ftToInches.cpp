#include <iostream>

using namespace std;

int ft_to_inches(int ft) {
    return ft * 12;
}

int main() {

    int ft;

    cout << "Enter Feet: ";
    cin >> ft;

    int conversion = ft_to_inches(ft);
    cout << ft << "ft = " << conversion << "inches" << endl;

    return 0;
}