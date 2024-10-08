export const bestTotalPriceBySlidingWindow = (
  prices: number[],
  k: number
): number => {
  if (prices.length < k) return 0;

  let total = 0;

  for (let i = 0; i < k; i++) {
    total += prices[i];
  }

  let maxTotal = total;

  for (let i = 1; i < prices.length - k; i++) {
    total = total - prices[i - 1] + prices[i + k - 1];
    maxTotal = Math.max(total, maxTotal);
  }

  return maxTotal;
};
