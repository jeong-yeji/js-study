# var vs. let vs. const

## var

### **선언 및 초기화**

`선언 => 초기화` 단계를 거침. 두 단계를 동시에 수행하는 것도 가능.

단, 변수의 선언과 동시에 초기화가 이루어지므로 `undefined`를 할당해 초기화함

_undefined : 아직 변수에 값이 할당되지 않음_

중복 선언 및 재할당 가능

```js
var apple; // undefined
apple = 'yummy';

var banana = 'long';
```

### **scope**

함수의 코드 블록만을 지역 스코프로 인정 => `함수 레벨 스코프`

=> `함수 외부`에서 선언한 변수는 모두 `전역 변수`로 설정됨

### **hoisting**

함수 선언문이 `런타임 이전`에 자바스크립트 엔진에서 먼저 실행됨

```js
console.log(cherry); // undefined
var cherry;
```

---

## let

### **선언 및 초기화**

중복 선언 `불가`, 재할당 `가능`

### **scope**

`블록 레벨 스코프`

### **hoisting**

선언과 초기화가 `분리되어` 진행

```js
console.log(cherry); // Error: Uncaught ReferenceError: cherry is not defined
let cherry;
console.log(cherry); // undefined
cherry = 'sweet';
console.log(cherry); // sweet
```

---

## const

### **선언 및 초기화**

선언과 `동시에` 초기화

중복 선언 `불가`, 재할당 `불가` : 원시값의 재할당은 불가능하나, `객체`의 재할당은 가능함

### **scope**

`블록 레벨 스코프`

### **hoisting**

선언과 초기화가 `동시에` 진행

---

> 변수의 스코프를 좁게 만드는 것을 권장하므로 var보다는 let과 const를, 상수라면 let보다는 const를 사용하는 것이 좋음
