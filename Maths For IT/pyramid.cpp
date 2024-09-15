#include <iostream>
#include <typeinfo>


using namespace std;

void create_pyramid(int height) {
    for (int i = 1; i <= height; i++) {

        for (int j = 0; j < height; j++) {
            cout << " ";
        }

        for (int j = 0; j < height - 1; j++) {
            cout << "#";
        }

        cout << endl;
    }
}

int main() {
    int height;

    cout << "Enter Height: ";
    cin >> height;

    while (height < 1 || height > 8) {
        cout << "Height must be between 1 - 8: ";
        cin >> height;
    }

    create_pyramid(height);
    return 0;
}