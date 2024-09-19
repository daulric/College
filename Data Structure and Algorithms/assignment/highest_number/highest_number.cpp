#include <iostream>

using namespace std;

int find_highest_number(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        for (int j = i+1; j < size; j++) {
            int temp;
            int a = arr[i];
            int b = arr[j];

            if (b > a) {
                swap(arr[i], arr[j]);
            }
        }
    }

    return arr[0];
}

int main() {
    int array[5];

    for (int i = 0; i < 5; i++) {
        cout << "Enter Number: " << endl;
        cin >> array[i];
    }

    int highest_number = find_highest_number(array, 5);
    cout << "Highest Number: " << highest_number << endl;
}