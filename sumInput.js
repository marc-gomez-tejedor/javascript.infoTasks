function sumInput() {
    let arr = [];
    while (true) {
        let input = prompt("?", 0);
        if (input === null || input === "" || !isFinite(input)) {
            break;
        }
        arr.push(+input);
    }
    let sum = 0;
    for (num of arr) {
        sum += num;
    } 
    return sum;
}

alert(sumInput());