#include <iostream>
#include <vector>

using namespace std;

int linear_search(int array[], int index, int size) {

    for (int i = 0; i < size; i++) {
        if (array[i] == index) {
            return i;
        }
    }

    return -1;
}

int main() {
    int array[9];
    int size = sizeof(array) / sizeof(int);
    int index_to_find;

    for (int i = 0; i < size; i++) {
        cout << "Enter Number: ";
        cin >> array[i];
    }

    cout << endl;
    cout << "Enter Number to Find: ";
    cin >> index_to_find;
    int index_found = linear_search(array, index_to_find, size);

    if (index_found != -1) {
        cout << "Item Found: Index = " << index_found << endl;
    } else {
        cout << "Item not Found!" << endl;
    }

    return 0;
}