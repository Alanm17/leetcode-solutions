// here this is a class for creating a new node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Insert at the beginning

//Linked list: 10 → 20 → 30
// Insert 5 at the beginning → 5 → 10 → 20 → 30

//temp = newNode // 5
// newNode = head // we joyda newNode bu endi 10
// head = temp // head bu 5
// head.next = newNode;
function insertHead(head, value) {
  // created node equaling to 5 points to null
  let newNode = new Node(value);
  newNode.next = head;
  head = newNode;
  console.log(head);
  return head;
}
insertHead(10, 5);
// insert after 20 Linked list: 10 → 20 → 30
function insertTarget(head, target, value) {}
// here this is a class for creating a new node 
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// create head (first node = 1)
let head = new Node(1);
let current = head;

// loop to add nodes 2 → 10
for (let i = 2; i <= 10; i++) {
  current.next = new Node(i);
  current = current.next;
}
function printList(head) {
  let values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values.join(" -> "));
}

// test it
printList(head);
// check result
// console.log(head);
//Insert at the beginning
 
//Linked list: 10 → 20 → 30
// Insert 5 at the beginning → 5 → 10 → 20 → 30


 //temp = newNode // 5
// newNode = head // we joyda newNode bu endi 10
// head = temp // head bu 5
// head.next = newNode;
function insertHead(head,value){
 let newNode = new Node(value)
 newNode.next = head
 console.log(newNode)
 return newNode
}

//insert after 20 Linked list: 10 → 20 → 30
function insertAfter(head,target,value){
    let newNode = new Node(value)
  
    while(head !== null){
        if(head.val === target){
        let temp = head.next;
        head.next = newNode;
        newNode.next = temp
        console.log(head)
        return head
        }
        head = head.next;

    
    }
    return head
}

// let temp = insertAfter(head,3,4)

var removeNthFromEnd = function(head, n) {
    let dummy = new Node(0) // dummy = 0
    dummy.next = head // dummy 0 .next = head
    let fast = dummy
    let slow = dummy
    for(let i =0; i < n; i++){
        fast = fast.next// here i am in 
    }
    // O(n)
    
    while(fast.next != null){ // this place is 5 -> null
     slow = slow.next // here we are in 3 index which is 2 from last
     fast = fast.next
        
    }
    slow.next = slow.next.next;
    return dummy.next
};
var removeNthFromEnd = function(head, n) {
    const dummy = new Node(0,null) // dummy = 0
    dummy.next = head // dummy 0 .next = head
    let fast = dummy, slow = dummy
    while(n){
        fast = fast.next// here i am in 
        n--
    }
    // O(n)
    
    while(fast.next){ // this place is 5 -> null
     slow = slow.next // here we are in 3 index which is 2 from last
     fast = fast.next
        
    }
    slow.next = slow.next.next;
    return dummy.next
};

printList(removeNthFromEnd(head,2))
function createNodeArr(array){
    const dummy = new Node(0)
    let current = dummy
    for(let num of array){
        current.next = new Node(num)
        current = current.next
    }
    return dummy.next
}

const l1 = createNodeArr([1 , 2 , 3 , 4 , 5])
const l2 = createNodeArr([1 , 2 , 3 , 4 , 5])
console.log(l1)


var addTwoNumbers = function(l1, l2) {
    const arr1 =[]
    const arr2 =[]
    const result = []
     while(l1 !== null && l2 !== null){
       arr1.push(l1.val)
       arr2.push(l2.val)

      l1 = l1.next
      l2 = l2.next
      
     } 
     let i,j;
     let lengthof1 = arr1.length
     while(lengthof1){
          let carry =  (arr[i] + arr[j]) % 10
          result.push()
          i++
          j++
         }
     }
    console.log(arr1,arr2)
   return result
};
console.log(addTwoNumbers(l1,l2))





