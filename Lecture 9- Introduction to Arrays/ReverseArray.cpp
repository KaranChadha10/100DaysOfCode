#include<iostream>
using namespace std;

void reverseArray(int arr[], int size){

        int start = 0;
        int end = size - 1;
        while(start <= end){
            swap(arr[start],arr[end]);
            start++;
            end--;
        }
}

void printArray(int arr[],int size){
    for(int i = 0; i < size;i++){ 
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}
int main(){
    
    int arr1[6] = {-2,8,9,11,6,1};
    int arr2[5] = {6,21,56,32,1};

    reverseArray(arr1,6);
    reverseArray(arr2,5);

    printArray(arr1,6);
    printArray(arr2,5);
    
    return 0;
}