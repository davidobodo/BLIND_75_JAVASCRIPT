// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function timeToSell(prices) {
	let lp = 0;
	let rp = 1;
	let maxP = 0;

	while (rp < prices.length) {
		if (prices[lp] < prices[rp]) {
			maxP = Math.max(maxP, prices[rp] - prices[lp]);
		} else {
			lp = rp;
		}
		rp++;
	}

	return maxP;
}

/**
 * Two pointers
 * Right pointer always after left pointer
 * If our left pointer is lower than right pointer, then move left pointer to that position cause that shows a possibility to buy stock at a low price
 */

/**
 * [7,1,5,3,6,4] 5
 * [7,6,4,3,1] 0
 */