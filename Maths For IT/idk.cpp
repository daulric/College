#include <iostream>
using namespace std;

int main(){

    char Friday[6];

    for (int i = 0; i < 6; i++){
        cin >> Friday[i];
    }

    for (int i = 0; i < 6; i++){
        cout << Friday[i] << " ";
    }

    return 0;
}