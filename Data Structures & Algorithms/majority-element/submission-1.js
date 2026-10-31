class Solution {
    majorityElement(nums) {
        const map = new Map(); 
        const number = Math.floor(nums.length / 2);

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        for (const [key, value] of map) {
            if (value > number) {
                return key;
            }
        }
    }
}