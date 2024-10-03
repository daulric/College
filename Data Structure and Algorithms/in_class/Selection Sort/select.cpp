#include <iostream>

using namespace std;

void selection_sort(int arr[], int size) {
    for (int i = 0; i < size-1; i++) {

        int min_index = i;

        for (int j = i+1; j < size; j++) {
            if (arr[min_index] > arr[j]) {
                min_index = j;
            }

        }

        if (min_index != i) {
            swap(arr[i], arr[min_index]);
        }

    }
}

int main() {
    int arr[5];
    int size = sizeof(arr) / sizeof(int);

    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    selection_sort(arr, size);
    cout << "-------" << endl;

    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }

}