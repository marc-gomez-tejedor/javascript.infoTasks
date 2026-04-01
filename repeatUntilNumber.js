function readNumber() {
    let output;
    let input = prompt("enter a number", 0);
    if (isFinite(input)) {
        output = +input;
        return output;
    }
    while (!isFinite(input)) {
        input = prompt("enter a number", 0);
        if (isFinite(input)) {
            output = +input;
            return output;
        } else if (input == null || input == '') {
            output = "null";
            alertResult(output);
            return null;
        }
    }    
}

alert(`Read ${readNumber()}`);