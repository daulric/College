#include <iostream>

using namespace std;

void bubble_sort(int arr[], int size) {
    // create a loop to sort the elements;
    for (int i = 0; i < size; i++) {
        for (int j = i+1; j < size; j++) {
            if (arr[j] < arr[i]) {
                // swap if number is greater;
                swap(arr[i], arr[j]);
            }
        }
    }
}


int main() {
    int arr[8];
    // Find the size of the array;
    int size = sizeof(arr) / sizeof(int);

    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    // Sorts the array
    bubble_sort(arr, size);

    // Output the results
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
}