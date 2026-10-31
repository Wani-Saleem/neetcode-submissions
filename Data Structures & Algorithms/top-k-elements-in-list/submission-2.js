
class Solution {
    topKFrequent(nums, k) {
        const map = new Map();
        const result = [];

        // Count frequency
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        // Convert Map into array
        const arr = [...map.entries()];

        // Sort by frequency descending
        arr.sort((a, b) => b[1] - a[1]);

        // Extract top k elements
        for (let i = 0; i < k; i++) {
            result.push(arr[i][0]);
        }

        return result;
    }
}
