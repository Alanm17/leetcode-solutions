// Online C compiler to run C program online
#include <stdio.h>
#define SIZE 5
int queue[SIZE];
int front = -1, rear = -1;

void enqueue(int data){
   if(rear == -1 && front == -1){
        front = rear =0;
        queue[rear] = data;
    }else  if(((rear+1)%5) == front){
        printf("overFlow\n");
    }else{
       rear = (rear+1)%5;
        queue[rear] = data;
    }

    
}


void dequeue(){
    if(rear == -1 && front ==-1){
    printf("Array is Empty");
}else if(front == rear){
    rear = front = -1;
}else{
front=(front+1)%5;
}
}

void display(){
    if(rear ==-1 && front == -1) return;
    int i = front;
    while(i != rear){
        printf("index[%d] %d\n",i, queue[i]);
        i=(i+1)%5;
    }
     printf("index[%d] %d\n ",i, queue[rear]);
}






int main() {
    
enqueue(34);

enqueue(40);
enqueue(50);
dequeue();
enqueue(60);
enqueue(70);
enqueue(80);
dequeue();
enqueue(90);
display();
    // Write C code here
 

    return 0;
}