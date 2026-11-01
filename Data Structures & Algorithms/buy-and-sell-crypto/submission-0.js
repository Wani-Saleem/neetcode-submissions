class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let start = prices[0];
        let profit = 0;

        for (let i = 1; i < prices.length; i++) {

            if (prices[i] > start) {
                profit = Math.max(profit, prices[i] - start);
            } else {
                start = prices[i];
            }
        }

        return profit;
    }
}