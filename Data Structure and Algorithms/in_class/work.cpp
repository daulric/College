#include <iostream>

using namespace std;

const double Kilo_to_Miles = 0.6214;

void getKilo(double &kilo) {
    cout << "Input Kilo: ";
    cin >> kilo;
}

void show_Miles(double kilo) {
    double miles = kilo * Kilo_to_Miles;
    cout << "The conversion of " << kilo << " to miles is " << miles << " miles" << endl;
}

int main() {
    double kilo;
    getKilo(kilo);
    show_Miles(kilo);
}