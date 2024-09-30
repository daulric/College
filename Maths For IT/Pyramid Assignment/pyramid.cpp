#include <iostream>
#include <limits>

using namespace std;

void create_pyramid(int height) {
    for (int i = 1; i <= height; i++) {

        for (int j = 0; j < height - i; j++) {
            cout << " ";
        }
        
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

        if (cin.fail()) {
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            cout << "Height Must be an Integer: ";
        } else if (height < 1 || height > 8) {
            cout << "Height must be between 1 - 8: ";
        } else {
            break;
        }

    }

    create_pyramid(height);
    return 0;
}