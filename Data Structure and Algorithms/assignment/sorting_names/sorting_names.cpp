#include <iostream>
#include <algorithm>

using namespace std;

void sort_names(string arr[], int size) {
    sort(arr, arr+size);
}

int main() {

    string names[10];
    int size = sizeof(names) / sizeof(*names);

    for (int i = 0; i < size; i++) {
        cout << "Enter Name: ";
        cin >> names[i];
    }

    for (int i = 0; i < size; i++) {
        cout << names[i] << " ";
    }

    sort_names(names, size);

    for (int i = 0; i < size; i++) {
        cout << names[i] << " ";
    }

    return 0;
}