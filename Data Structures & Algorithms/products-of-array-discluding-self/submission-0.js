class Solution {
    /**
     * @param {number[]} nums
     * @returns {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length).fill(1);

        let left = 1;

        // First loop: Left product
        for (let i = 0; i < nums.length; i++) {
            output[i] = left;
            left *= nums[i];
        }

        let right = 1;

        // Second loop: Right product
        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= right;
            right *= nums[i];
        }

        return output;
    }
}