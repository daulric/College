#include <iostream>

using namespace std;

int main() {

    int arr[10];
    double avg = 0;
    int size = sizeof(arr) / sizeof(*arr);

    for (int i = 0; i < 10 ; i++) {
        cin >> arr[i];
        avg += arr[i];
    }

    int sum = arr[3] + arr[4];
    cout << "Sum of Element 4 and 5 is " << sum << endl;
    cout << "Avg of All Elements is " << (avg / size) << endl;


    return 0;
}