const myVarObject = {
    _age: 0,

    get age() {
        return this._age;
    },

    set age(NewAge) {
        if (NewAge > 0) {
            this._age = NewAge;
        } else {
            console.log("나이는 0보다 커야 합니다.");
        }
    }
}

// private 변수라서, 접근은 가능하지만 하지말라는 의미
console.log(myVarObject._age);

// getter 함수를 통해서 접근
console.log(myVarObject.age);
myVarObject.age = 20;
console.log(myVarObject.age);