var maxSubArray = function(nums) {
    let maxSoFar = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        maxSoFar = Math.max(current, current + maxSoFar);
        max = Math.max(max, maxSoFar);
    }
    return max;
};


// Maximum Subarray(Kadane 's algorithm approach) - JavaScripthttps://javascript.tutorialink.com › maximum-subarray-...


function maxSubarray(array) {

    var currentMax = array[0];
    var max = array[0];

    for (var i = 0; i < array.length; i++) {
        // Compare 0 and currentMax + array[i]
        // IF it is less than 0, it is going to be 0 (Reset)
        //    it is more than 0, it will be currentMax + next element
        currentMax = Math.max(array[i], currentMax + array[i]);

        // Compare max or currentMax value, pick up one.
        max = Math.max(max, currentMax);

    }

    // Return max at the end of loop
    return max;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // === 6
console.log(maxSubarray([-2, -1])) // === -1
console.log(maxSubarray([-2, 1])) // === 1
console.log(maxSubarray([1])) // === 1
console.log(maxSubarray([1, 2])) // === 3