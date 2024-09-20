#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

void loop_array_adding(int numbers[]) {
    
    int sum = 0;

    for (int i = 0; i < 5; i++) {
        cin >> numbers[i];
        sum += numbers[i];
    }

    cout << "Sum = " << sum << endl;
}

int sum(vector<int>&arr) {
    int sum = 0;

    for (int i = 0; i < arr.size(); i++) {
        sum += arr[i];
    }

    return sum;
}

int array_avg(vector<int> &arr) {
    int sum = 0;

    for (int i = 0; i < arr.size(); i++) {
        sum += arr[i];
    }

    return sum / arr.size();
}

int main() {
    int numbers[5];

    vector<int>sum_of_numbers(5);

    //loop_array_adding(numbers);

    for (int i = 0; i < sum_of_numbers.size(); i++) {
        cin >> sum_of_numbers[i];
    }

    int sum_of_number = sum(sum_of_numbers);
    int array_average = array_avg(sum_of_numbers);
    cout << "Sum = " << sum_of_number << endl;
    cout << "Average = " << array_average << endl;
}
