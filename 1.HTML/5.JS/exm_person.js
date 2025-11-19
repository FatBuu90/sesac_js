let person = {
    name : "Jane",
    age : 30,
    greet : function() {
        console.log("안녕하세요, 저는 "+this.name+" 입니다. 저는 "+this.age+"살입니다.")
    }
}