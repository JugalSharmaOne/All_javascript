function binarySearch(sortedArray, key) {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    // key wasn't found
    return -1;
}



// Binary search has O(log n) complexity.



const binarySearch = (list, item) => {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const guess = list[mid]

        if (guess === item) {
            return mid
        }

        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return null //if not found
}

console.log(binarySearch([1, 2, 3, 4, 5], 1)) //0
console.log(binarySearch([1, 2, 3, 4, 5], 5)) //4

console.log(binarySearch([1, 2, 3, 4, 5], 6)) //null






function binary_Search(items, value) {
    var firstIndex = 0,
        lastIndex = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (items[middleIndex] != value && firstIndex < lastIndex) {
        if (value < items[middleIndex]) {
            lastIndex = middleIndex - 1;
        } else if (value > items[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));
console.log(binary_Search(items, 5));


var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));
console.log(binary_Search(items, 5));