function leftTriangle(num_of_rows) {
    for (let row = 1; row <= num_of_rows; row++) {
        let stars = "";
        for (let col = 1; col <= row; col++) {
            stars += "*";
        }
        console.log(start);
    }
}

function rightTriangle(num_of_rows) {
    for (let row = 1; row <= num_of_rows; row++) {
        let stars = "";
        for (let space = num_of_rows; space > row; space--) {
            stars += " ";
        }
        for (let star = 1; star <= row; star++) {
            stars += "*"; 
        }
        console.log(stars);
    }
}

leftTriangle(1);