"use strict";
// declare empty array
const myArray = [];
// declare and initialize array
const myOtherArray = ["apple", "banana", "cherry"];
// Stack 생성자
class Stack {
    constructor() {
        this.elements = [];
    }
    push(element) {
        this.elements.push(element);
    }
    pop() {
        return this.elements.pop();
    }
    peak() {
        if (this.isEmpty())
            return undefined;
        return this.elements[this.elements.length - 1];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    size() {
        return this.elements.length;
    }
    printElements() {
        console.log(this.elements);
    }
}
// Queue 생성자
class Queue {
    constructor() {
        this.elements = [];
    }
    enqueue(element) {
        this.elements.push(element);
    }
    dequeue() {
        return this.elements.shift();
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    size() {
        return this.elements.length;
    }
    peak() {
        if (this.isEmpty())
            return undefined;
        return this.elements[0];
    }
    printElements() {
        console.log(this.elements);
    }
}
// 연결 리스트
class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    size() {
        return this.length;
    }
    isEmpty() {
        return this.length === 0;
    }
    addNode(data) {
        const node = new LinkedListNode(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    removeNode(data) {
        if (this.head !== null && this.head.data === data) {
            this.head = this.head.next;
        }
        else {
            let current = this.head;
            let prev = null;
            while (current !== null) {
                if (current.data === data) {
                    prev.next = current.next;
                    if (current.next === null) {
                        this.tail = prev;
                    }
                    break;
                }
                prev = current;
                current = current.next;
            }
        }
        this.length--;
    }
    printNode() {
        for (let node = this.head; node != null; node = node.next) {
            process.stdout.write(`${node.data} -> `);
        }
        console.log('null');
    }
}
