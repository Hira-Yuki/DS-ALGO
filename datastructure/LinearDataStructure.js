"use strict";
/*
## 배열(Array)
- 배열(Array)란, 고정된 크기를 갖는 인덱스로 접근할 수 있는 요소들의 집합입니다. 배열의 각 요소는 메모리상에서 연속적으로 위치합니다.

### 배열의 특징
- **임의 접근(Random Access)**: 배열의 원소들이 메모리 상에서 연속적으로 위치하기 때문에, 인덱스를 통해 각 원소에 O(1) 시간 내에 접근할 수 있습니다. 이는 배열의 가장 큰 장점 중 하나입니다.

- **고정된 크기**: 전통적인 배열은 생성 시 지정된 크기를 변경할 수 없습니다. 이는 메모리 효율성을 높이는 동시에, 크기 변경에 따른 복잡성을 줄입니다.

### JavaScript의 배열
- JavaScript에서의 배열은 동적으로 크기가 조정될 수 있으며, 다양한 데이터 타입의 요소를 포함할 수 있습니다. 이는 JavaScript의 유연성을 반영한 것으로, 개발자에게 더 많은 편의를 제공합니다.
- **주의할 점**: JavaScript의 배열은 연관 배열이 아니며, 따라서 인덱스로 사용할 수 있는 값은 음수가 아닌 정수 또는 정수의 문자열 형태여야 합니다. 임의의 문자열을 인덱스로 사용하려면 객체를 사용하는 것이 적합합니다.

### 배열에서 사용할 수 있는 연산
- **배열 생성**: `const arr = new Array(10);` 또는 `const arr = [1, 2, 3];`과 같이 배열을 생성할 수 있습니다.
- **길이 조회**: 배열의 길이를 조회할 때는 `arr.length` 속성을 사용합니다.
- **원소 접근**: `arr[index]`를 통해 특정 인덱스의 원소에 접근할 수 있습니다.
- **원소 추가/삭제**: `push()`, `pop()`, `shift()`, `unshift()` 메서드 등을 사용하여 배열의 끝이나 시작 부분에 원소를 추가하거나 삭제할 수 있습니다. 이러한 연산은 배열의 동적인 성격을 활용하는 예시입니다.

> **참고**: TypeScript에서는 배열의 타입을 명시적으로 선언하여, 배열이 특정 타입의 요소만을 포함하도록 할 수 있습니다. 예: `let numbers: number[] = [1, 2, 3];`

### 성능 고려사항
- 배열의 크기를 동적으로 변경하는 연산은 추가적인 메모리 할당이나 기존 데이터의 복사를 필요로 할 수 있으므로, 큰 배열을 다룰 때는 이러한 비용을 고려해야 합니다.
- 특정 위치에 원소를 추가하거나 삭제하는 연산은 해당 위치 이후의 모든 원소들을 이동시켜야 하므로, 시간 복잡도가 O(n)이 될 수 있습니다. 이러한 연산의 비용을 줄이기 위해서는 연결 리스트 등 다른 자료 구조의 사용을 고려할 수 있습니다.
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
