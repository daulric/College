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

int main() {
    int n;
    cin >> n;

    vector<int> array(n);

    for (int i = 0; i < n; i++) {
        cin >> array[i];
    }

    sort_numbers(array);

    int highest = array[n-1];
    int lowest = array[0];
    int avg = find_avg(array);

    cout << highest << endl;
    cout << lowest << endl;
    cout << avg << endl;

    return 0;
}