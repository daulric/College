#include <iostream>

using namespace std;

int main() {
    double insurance, loan_payment, gas, oil, tires, maintainance;

    // Getting the Inputs Values
    cout << "Loan Payment Cost: $";
    cin >> loan_payment;

    cout << "Insurance Cost: $";
    cin >> insurance;

    cout << "Gas Cost: $";
    cin >> gas;

    cout << "Oil Cost: $";
    cin >> oil;

    cout << "Tires Cost: $";
    cin >> tires;

    cout << "Maintainance Cost: $";
    cin >> maintainance;

    // Calculations
    double monthly_cost = (loan_payment + insurance + gas + oil + tires + maintainance);
    double yearly_cost = (monthly_cost * 12);

    // Display Output
    cout << "|===============================|" << endl;
    cout << " Monthly Cost: $" << monthly_cost << endl;
    cout << " Yearly Cost: $" << yearly_cost << endl;
    cout << "|===============================|" << endl;

}