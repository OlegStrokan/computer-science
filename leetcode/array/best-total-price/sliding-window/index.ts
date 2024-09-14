export const bestTotalPriceBySlidingWindow = (
  prices: number[],
  k: number
): number => {
  if (prices.length < k) {
    return 0;
  }

  let total = prices.slice(0, k).reduce((acc, value) => acc + value, 0);
  let maxTotal = total;
  for (let i = 1; i <= prices.length - k; i++) {
    total = total - prices[i - 1] + prices[i + k - 1];
    maxTotal = Math.max(maxTotal, total);
  }

  return maxTotal;
};
