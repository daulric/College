#include <iostream>

using namespace std;

void insertion_sort(int arr[], int size) {
    for (int i = 1; i < size; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 and arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = key;
    }
}

int main() {
    int arr[5];
    int size = sizeof(arr) / sizeof(int);

    for (int i = 0; i < 5; i++) {
        cin >> arr[i];
    }

    insertion_sort(arr, size);
    cout << "------------------" << endl;

    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }

}