// 1번 예제
for (i = 0; i < 5; i++) {
    let line = '';
    for (j = 0; j <= i; j++) {
        line += '*';
    }
    console.log(line);
}

// 2번 예제
for (i = 5; i > 0; i--) {
    let line = '';
    for (j = i; j > 0; j--) {
        line += '*';
    }
    console.log(line);
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