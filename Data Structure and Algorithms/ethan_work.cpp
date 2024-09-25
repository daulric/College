#include <iostream>

using namespace std;

int largest_num(int arr[], int size) {
    int largest = arr[0];

    for (int i = 1; i < size; i++) { 
        if (arr[i] > largest){
            largest = arr[i];
        }
    }

    return largest;
}

int main() {
    int array[] = {3, 5, 7, -4, 2};

    int size = sizeof(array) / sizeof(int);
    int largestval = largest_num(array, size);

    cout << largestval << endl;
    return 0;
}