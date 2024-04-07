// declare empty array
const myArray: number[] = [];

// declare and initialize array
const myOtherArray: string[] = ["apple", "banana", "cherry"];


// Stack 생성자
class Stack {
  private elements: any[] = [];

  public push(element: any): void {
    this.elements.push(element);
  }

  public pop(): any {
    return this.elements.pop();
  }

  public peak(): any {
    if (this.isEmpty()) return undefined;
    return this.elements[this.elements.length - 1]
  }

  public isEmpty(): boolean {
    return this.elements.length === 0;
  }

  public size(): number {
    return this.elements.length;
  }

  public printElements(): void {
    console.log(this.elements);
  }
}

// Queue 생성자
class Queue {
  private elements: any[] = [];

  public enqueue(element: any): void {
    this.elements.push(element);
  }

  public dequeue(): any {
    return this.elements.shift();
  }

  public isEmpty(): boolean {
    return this.elements.length === 0;
  }

  public size(): number {
    return this.elements.length;
  }

  public peak(): any {
    if (this.isEmpty()) return undefined;
    return this.elements[0]
  }

  public printElements(): void {
    console.log(this.elements);
  }
}

// 연결 리스트
class LinkedListNode {
  public data: any

  public next: LinkedListNode | null;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  private head: LinkedListNode | null;
  private tail: LinkedListNode | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  public size(): number {
    return this.length
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public addNode(data: any): void {
    const node = new LinkedListNode(data);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++
  }

  public removeNode(data: any): void {
    if (this.head !== null && this.head.data === data) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let prev = null;

      while (current !== null) {

        if (current.data === data) {
          prev!.next = current.next;

          if (current.next === null) {
            this.tail = prev
          }

          break;
        }

        prev = current;
        current = current.next;
      }
    }
    this.length--;
  }

  public printNode(): void {
    for (let node = this.head; node != null; node = node.next) {
      process.stdout.write(`${node.data} -> `);
    }
    console.log('null');
  }
}