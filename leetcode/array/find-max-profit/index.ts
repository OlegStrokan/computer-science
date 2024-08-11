export const findMaxProfix = (prices: number[]) => {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  while (sell < prices.length) {
    if (prices[sell] > prices[buy]) {
      const profit = prices[sell] - prices[buy];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return maxProfit;
};

/*
buy 0 sell 1 max 0
[7,1,2,5,2,7]

7 > 1 = non profitable
buy = 1 sell 1
1 < 2 = profitable
buy 1 sell 2
2 < 5 = profitable (more profit)
buy 1 sell 5 
5 > 2 = non profitable
buy 1 sell 5
2 < 7 = profitable (more profit)
buy 1 sell 7

*/
