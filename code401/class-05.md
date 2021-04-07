# What I Learnt Today

## Linked Lists

- data structures that contains nodes that point to the next node in the list
- Node - individual item or link which contains data
Types of linkedlist:

- Singly - only one reference, which points to next node in the list

- Doubly - two references, one to the next node and the other to the previous node

Next property - leads to the next node and is important when traversing linked lists

Traversing linked lists

- Create a current property at the head (starting node)
- Make a while that checks whether current is null or not
- Evaluate data extracted from current property
- Use the next property (current.next) to move on to the next node

It is important that all references to each link/node is properly assigned

Differences between LinkedList and Arrays:

- Array needs 7 bytes of memory all in one place, where as linked lists memory in one place and can have be scattered throughout
- Arrays are static data structures, where as linked lists ae dynamic data structures. If arrays were to grow or shrink in size, it will always need a given size and amount of memory.
