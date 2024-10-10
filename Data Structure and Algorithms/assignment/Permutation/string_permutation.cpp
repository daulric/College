#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

bool contains_sameCharacters(string &str1, string &str2) {
    if (str1.length() != str2.length()) return false;

    sort(str1.begin(), str1.end());
    sort(str2.begin(), str2.end());

    return (str1 == str2);
}

int main() {
    string str1;
    string str2;

    cin >> str1;
    cin >> str2;

    bool isSame = contains_sameCharacters(str1, str2);

    cout << (isSame ? "YES" : "NO") << endl;
}