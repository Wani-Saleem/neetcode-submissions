class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        const arr = nums1.filter((num, index) => index < m);

        for (let i = 0; i < n; i++) {
            arr.push(nums2[i]);
        }

        arr.sort((a, b) => a - b);

        for (let i = 0; i < arr.length; i++) {
            nums1[i] = arr[i];
        }
    }
}
