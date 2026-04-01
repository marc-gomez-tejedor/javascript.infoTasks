function getMaxSubSum(arr) {
    let best = 0;
    let current = 0;
    for (num of arr) {
        if (current+num >= 0) {
            current += num;
            if (current > best) {
                best = current;
            }
        } else {
            current = 0;
        }
    }
    return best;
}
