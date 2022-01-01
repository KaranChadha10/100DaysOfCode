#include<iostream>
using namespace std;


void printArray(int arr[],int size){
    cout<<"printing the array"<<endl;
    for(int i = 0; i < size;i++){
        cout << arr[i] << " ";
    }
    cout<<"printing done"<<endl;
}
int main(){
    
    //declare
    int number[15];

    //accessing an array
    cout<<"value at 14 index is "<<number[14]<<endl;

    //initializing an array
    int second[3] ={5,7,11};

    cout<<"value at 2 index is "<<second[2]<<endl;

    int third[15] ={2,7};
    int n =15;
    printArray(third,15);

    //initializing all locations with zero
    int fourth[10] = {0};
    n=10;
    printArray(fourth,10);   
    
    
    return 0;
}