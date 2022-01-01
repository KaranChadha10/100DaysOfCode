#include<iostream>
using namespace std;

bool search(int arr[], int size, int key){
    for(int i = 0; i < size;i++){
        if(arr[i] == key){
            return true;
        }
    }
}
int main(){
    
    int arr[10] = {4,66,84,3,99,7,51,94,62,10};
    cout<<"Enter an element to search for..."<<endl;
    int key;
    cin>>key;
    bool found = search(arr,10,key);
    if(found){
        cout<<"Element is present"<<endl;
    }
    else{
        cout<<"Element is absent"<<endl;
    }
    return 0;
}