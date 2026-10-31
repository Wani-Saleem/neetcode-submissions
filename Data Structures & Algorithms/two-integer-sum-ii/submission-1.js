class Solution {
    twoSum(numbers, target) {
        const map = new Map();

        for (let i = 0; i < numbers.length; i++) {
            const remaining = target - numbers[i];

            if (map.has(remaining)) {
                return [map.get(remaining) + 1, i + 1];
            }

            map.set(numbers[i], i);
        }
    }
}