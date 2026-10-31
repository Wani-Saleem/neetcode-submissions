class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = "";
        let start = 0;

        while (start < word1.length || start < word2.length) {
            if (start < word1.length) {
                result += word1[start];
            }

            if (start < word2.length) {
                result += word2[start];
            }

            start++;
        }

        return result;
    }
}