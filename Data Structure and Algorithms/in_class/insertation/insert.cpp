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
    int arr[10] = {19, 373, 0, 3,2, 3, 20,3, 9, 33};
    int size = sizeof(arr) / sizeof(int);

    insertion_sort(arr, size);

    for (int i = 0; i < size; i++) {
        cout << arr[i] << endl;
    }

}