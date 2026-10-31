class Solution {
    removeElement(nums, val) {
        const arr = nums.filter(num => num !== val);

        for (let i = 0; i < arr.length; i++) {
            nums[i] = arr[i];
        }

        return arr.length;
    }
}