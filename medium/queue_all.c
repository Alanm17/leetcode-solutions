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

// pr queue
#include <stdio.h>
#define SIZE 100

struct node{
    int data;
    int pry;
};

struct node pq[SIZE];
int size =0;
int isFull(){
    return size == SIZE;
}

int isEmpty(){
    return size == 0;
}

void enqueue(int data, int pry){
    if(isFull()){
        printf("The queue is currently full\n");
    }
    
    pq[size].data = data;
    pq[size].pry = pry;
    size++;
    
    for(int i = 0; i < size -1; i++){
        for(int j =0; j < size - i -1; j++){
            if(pq[j].pry > pq[j+1].pry){
                struct node temp = pq[j];
                pq[j] = pq[j+1];
                pq[j+1] = temp;
            }
        }
    }
    
}
void dequeue(){
    if(isEmpty()){
        printf("is empty");
    }
    printf("shifted element pr: %d  data: %d\n", pq[0].pry, pq[0].data);
    for(int i =1; i < size; i++){
        pq[i -1] = pq[i];
    }
    size--;
}
void prinList(){
    if(isEmpty()){
        printf("the queue has nothin to show\n");
    }
    
    for(int i = 0; i < size; i++){
        printf("pr: %d  data: %d\n", pq[i].pry, pq[i].data);
    }
}
void main(){
    enqueue(34,4);
       enqueue(34,3);
          enqueue(34,2);
             enqueue(34,1);
             prinList();
             dequeue();
    
}