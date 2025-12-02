class Order {
    constructor(user) {
        this.user = user;
        this.products = [];
        this.totalAmount = 0;
    }

    addProduct(product, quanatity) {
        // 논리적으로 생각해서 상품 다룰 방법 생각
        if (product.checkAvailability(quanatity)) {
            this.products.push({product, quanatity});
            this.totalAmount += product.price * quanatity;
        } else {
            console.log(`상품에 재고가 부조고합니다. ${product.name} 을 주문하실 수 없습니다.`)
        }
    }
    
    getOrderSummaryOLDJS() {
        const items = [];

        for (let i = 0; i< this.products.length; i++) {
            const { product, quanatity } = this. products[i];

            items.push({
                name: product.name,
                quanatity: quanatity,
                price: product.price
            })
        }

        return {
            user: this.user.name,
            totalAmount: this.totalAmount,
            items: items
        }
    }

    getOrderSummary() {
        // 고차함수를 써서 반환하는 가장 Modern JS 스타일
        return {
            // 내가 원하는 걸 key, value로 반환할 것
            user: this.user.name,
            totalAmount: this.totalAmount,
            items: this.products.map(( { product, quanatity} ) => ({
                name: product.name,
                quanatity: quanatity,
                price: product.price
            }))
        }
    }
}

module.exports = Order;