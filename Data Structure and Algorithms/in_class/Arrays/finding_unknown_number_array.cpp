#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int highest_number_in_array(vector<int> &array) {
    for (int i = 0; i < array.size(); i++) {
        for (int j = i+1; j < array.size(); j++) { 
            if (array[j] > array[i]) {
                swap(array[j], array[i]);
            }
        }
    }

    return array[0];
}

int finding_highest_v2(vector<int>& array) {
    int max = array[0];

    for (int i = 1; i < array.size(); i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

int main() {

    int n;
    cin >> n;

    vector<int> array(n);

    for (int i = 0; i < n; i++) {
        cin >> array[i];
    }

    int highest_number = highest_number_in_array(array);
    int highest_number_v2 = finding_highest_v2(array);
    cout << "Highest number is " << highest_number_v2 << endl;

    return 0;
}