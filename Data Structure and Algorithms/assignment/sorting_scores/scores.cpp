#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

void sort_numbers(vector<int>&arr) {
    sort(arr.begin(), arr.end());
}

int find_avg(vector<int>&arr) {
    int sum = 0;

    for (int i = 0; i < arr.size(); i++) {
        sum += arr[i];
    }

    return (sum / arr.size());
}

int find_lowest(vector<int>&arr) {
    return arr[0];
}

int find_highest(vector<int>&arr, int n) {
    return arr[n - 1];
}

int main() {
    int n;
    cin >> n;

    vector<int> array(n);

    for (int i = 0; i < n; i++) {
        cin >> array[i];
    }

    sort_numbers(array);

    int highest = find_highest(array, n);
    int lowest = find_lowest(array);
    int avg = find_avg(array);

    cout << highest << endl;
    cout << lowest << endl;
    cout << avg << endl;

    return 0;
}