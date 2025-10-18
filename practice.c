// Online C compiler to run C program online
#include <stdio.h>
//55321
void insertionSort(int arr[],int n){
    int temp,i,j;
    for(i = 1; i < n;i++){
        temp = arr[i];
        j = i-1;
        while(j >= 0 && arr[j] > temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}

int linerSearch(int arr[], int target, int n){
    for(int i = 0; i< n; i++){
        if(arr[i] == target){
            return i;
        }
        
    }
    return -1;
}
int BinarySearch(int arr[], int target, int n){
    int low =0;
    int high = n -1;
    while(low <= high){
        int middle = low + (high - low) / 2;
        int value = arr[middle];
        if(value > target) high = middle -1;
        else if(value < target) low = middle +1;
        else return middle;
    }
    return -1;
}//6534
void BubbleSort(int arr[],int n){
    for(int i = 0; i < n -1; i++){
    for(int j = 0; j < n - i -1; j++){
        if(arr[j] > arr[j+1]){
           int temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
    }
}
void SelectionSort(int arr[], int n){
    for(int i = 0; i < n -1; i++){
        int min = i;
        for(int j = i +1; j<n; j++){
            if(arr[min]>arr[j]){
                min = j;
            }
        }
        int temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}
int main() {
    // Write C code here
    int arr[] ={23,32,4,56,23,12,4};
     int arr2[] ={23,32,4,56,23,12,4};
    int n = sizeof(arr) / sizeof(arr[0]);
    BubbleSort(arr2,n);
  insertionSort(arr,n);
printf("Sorted array:\n");
for (int i = 0; i < n; i++)
    printf("Insertion Sort arr[%d] = %d, Bubble Sort arr2[%d] = %d\n", i, arr[i], i, arr2[i]);

     int index = linerSearch(arr,56,n);
     if(index != -1 ){
         printf("the target you searched is in index: %d\n",index);
     }else{
         printf("the target you searched not found");
     }
    int foundInt = BinarySearch(arr,4,n);
    if(foundInt != -1 ){
         printf("the target you searched is in index: %d\n",foundInt);
     }else{
         printf("the target you searched not found");
     }
    
return 0;
}