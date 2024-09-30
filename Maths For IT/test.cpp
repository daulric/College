#include <iostream>

using namespace std;

void create_pyramid(int height) {
    for (int i = 1; i <= height; i++) {
        // Print leading spaces
        for (int j = 0; j < height - i; j++) {
            cout << " ";
        }
        // Print hashes
        for (int j = 0; j < i; j++) {
            cout << "#";
        }
        cout << endl;
    }
}

int main() {
    int height;

    cout << "Enter Height: ";

    while (true) {
        cin >> height;

        // Check if the input is a valid integer
        if (cin.fail()) {
            cin.clear(); // Clear the error flag
            cin.ignore(numeric_limits<streamsize>::max(), '\n'); // Ignore invalid input
            cout << "Height must be an integer. Try again: ";
        } else if (height < 1 || height > 8) {
            cout << "Height must be between 1 - 8. Try again: ";
        } else {
            break; // Valid integer input in the correct range
        }
    }

    create_pyramid(height);
    return 0;
}
