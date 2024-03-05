function merge(leftArr, rightArr) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < leftArr.length && j < rightArr.length) {
        if (rightArr[j] > leftArr[i]) {
            results.push(leftArr[i]);
            i++;
        } else {
            results.push(rightArr[j]);
            j++;
        }
    }

    while (i < leftArr.length) {
        results.push(leftArr[i]);
        i++;
    }

    while (j < rightArr.length) {
        results.push(rightArr[j]);
        j++;
    }

    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const center = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, center));
    const right = mergeSort(arr.slice(center));

    return merge(left, right);
}

module.exports = { merge, mergeSort };