// 1번 예제
for (i = 1; i <= 5; i++) {
    let line = '';
    for (j = 0; j <= i; j++) {
        line += '*';
    }
    console.log(line);
}
// 개선된 코드
for (i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// 2번 예제
for (i = 5; i > 0; i--) {
    let line = '';
    for (j = i; j > 0; j--) {
        line += '*';
    }
    console.log(line);
}
for (i = 5; i >= 1; i--) {
    console.log("*".repeat(i));
}

// 3번 예제
for (i = 0; i < 5; i++) {
    let line = '';
    for (k = 0; k < 4 - i; k++){
        line += ' ';
    }
    for (j = 0; j <= i; j++) {
        line += '*';
    }
    console.log(line);
}
console.log("3. 오른쪽 삼각형 그리기 - 개선된 코드");
for (let i = 1; i <= 5; i++) {
    console.log(" ".repeat(5-i) + "*".repeat(i));
}

// 4번 예제
for (i = 5; i > 0; i--) {
    let line = '';
    for (k = 0; k < 5 - i; k++){
        line += ' ';
    }
    for (j = i; j > 0; j--) {
        line += '*';
    }
    console.log(line);
}
console.log("4. 오른쪽 역삼각형 그리기 - 개선된 코드");
for (let i = 5; i >= 1; i--){
    console.log(" ".repeat(5-i) + "*".repeat(i));
}