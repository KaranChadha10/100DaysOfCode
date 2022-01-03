#include<iostream>
using namespace std;

void print(int arr[], int size){
    for(int i = 0; i < size;i++){
        cout << arr[i] <<" ";
    }
    cout <<endl;
}

void swapAlternate(int arr[], int size){
    for(int i = 0; i < size;i+2){
        if(i+1 < size){
            swap(arr[i], arr[i+1]);
        }
    }
}
int main(){

    int even[8] ={6,22,74,81,99,43,66,52};
    int odd[5] = {41,66,25,96,7};

    swapAlternate(even,8);
    print(even,8);
    // swapAlternate(odd,5);
    return 0;
}