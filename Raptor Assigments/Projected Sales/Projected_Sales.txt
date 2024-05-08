#include <iostream>

using namespace std;

int main() {
    const double profit_percent = 0.23;

    double projected_sales;
    cout << "Enter Total Amount of Sales: $";
    cin >> projected_sales;

    double profit_gain = (projected_sales * profit_percent);
    cout << "Profit Made is $" << profit_gain << endl;

    return 0;
}