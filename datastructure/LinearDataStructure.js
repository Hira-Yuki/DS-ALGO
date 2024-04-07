"use strict";
/*
## 배열(Array)
- 배열 : 번호(인덱스)와 번호에 대응하는 데이터들로 이루어진 자료 구조, 인접한 메모리 위치에 저장된 동일한 데이터 타입의 요소 모음

원소들이 연속적으로 배치되어 있기에, 임의의 첨자로 각 원소를 접근하는 데에 드는 시간복잡도는 O(1)이다. 따라서 임의 접근(random access)이 가능한 자료구조에 속한다.

> 자바스크립트에서의 배열은 컴퓨터 공학에서 정의하는 배열과 조금 다르다.
> JS에서의 배열은 크기를 조정 하는 것이 가능하고, 다양한 데이터 형식을 혼합하여 저장할 수 있다. 또한 JS에서의 배열은 연관 배열이 아니므로 임의의 문자열을 인덱스로 사용하여 배열 요소에 접근할 수 없다. 하지만, 음수가 아닌 정수(또는 해당 수의 문자열 형식)를 인덱스로 사용하여 접근할 수 있다.

### 배열에서 사용할 수 있는 연산
- 일정한 길이의 빈 배열을 만든다.
- 배열의 길이를 알아본다.
- 주어진 위치에 있는 원소를 알아본다. 원소를 찾는 데에 드는 시간은 O(1).
- 주어진 위치에 새로운 원소를 대입한다. 마찬가지로 위치를 찾는 데에 걸리는 시간은 O(1).
- 주어진 위치에 있는 원소를 삭제한다. 이때 배열의 길이가 하나 줄어들며 O(n)만큼의 시간이 걸린다.

배열은 자바스크립트에서 기본적으로 제공되는 자료형 중 하나이다.
자바스크립트에서 배열에 대해 제공되는 메서드는 굉장히 방대하므로 MDN 문서등을 참고하며 필요한 메서드를 학습하는 것이 좋다.
*/
// declare empty array
const myArray = [];
// declare and initialize array
const myOtherArray = ["apple", "banana", "cherry"];
/*
## 스택(Stact)
후입선출(後入先出/Last In First Out—LIFO)특성을 가지는 자료구조를 일컫는다.

### Stack의 기본 메서드
- **push(data)**: 스택의 가장 윗부분에 데이터를 추가한다.
- **pop()**: 스택에서 가장 위에 있는 데이터를 제거한다. (삭제된 데이터 반환)
- **peek()**: 스택의 가장 위에 있는 데이터를 반환한다. (삭제 X)
- **isEmpty()**: 스택이 빈 경우 true, 그렇지 않은 경우 false를 반환한다.
- **size()**: 스택의 사이즈(length)를 반환한다.

### 스택의 활용 예시
- 웹 브라우저의 뒤로가기(back)
- 실행 취소(undo)
*/
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
/*
## 큐(Queue)
선입선출(先入先出, First In First Out; FIFO)의 자료구조. 대기열이라고도 한다.

### Queue의 기본 메서드
- **Enqueue(data)** : 큐 맨 뒤에 데이터를 추가한다.
- **Dequeue()** : 큐 맨 앞쪽의 데이터를 삭제한다. (삭제된 데이터 반환)
- **isEmpty()** : 큐가 빈 경우 true, 그렇지 않은 경우 false를 반환한다.
- **size()** : 큐의 사이즈(length)를 반환한다.
- **peak()** : 큐 맨 앞의 데이터를 반환한다. (삭제 X)
*/
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
/*
## 연결 리스트(Linked List)
각 노드가 데이터와 포인터를 가지며, 한줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조를 말한다.
### Linked List의 기본 메서드
- **addNode(data)** : 연결 리스트 끝에 새 Node를 추가한다.
- **removeNode(data)** : 연결 리스트에서 data를 탐색한 후 해당 node를 삭제한다.
- **size()** : 연결 리스트의 길이(length)를 반환한다.
- **isEmpty()** :  연결 리스트가 빈 경우 true, 그렇지 않은 경우 false를 반환한다.
*/
class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// 연결 리스트 
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
