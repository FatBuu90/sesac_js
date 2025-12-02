class User {
    constructor(name, email, address) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.orderHistory = [];
        this.아무거나 = "아무거나";
    }

    addOrder(order) {
        this.orderHistory.push(order);
    }

    // 주문내역을 가져오는 함수 만들기
    getOrderHistory() {
        return this.orderHistory.map(order => order.getOrderSummary());
    }
}

module.exports = User;