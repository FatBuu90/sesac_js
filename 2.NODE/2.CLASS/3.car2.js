class Car {
    // 객체가 만들어질 때 실행되는 기본 함수
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    welcome() {
        return this.brand + " " + this.model + " 입니다."
    }

    drive() {
        return `${this.brand} 가 자율 주행을 시작합니다.`
    }
}

const myCar = new Car("현대", "K5");
console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.welcome());

const yourCar = new Car("KIA", "모닝");
console.log(yourCar.brand);
console.log(yourCar.model);
console.log(yourCar.welcome());