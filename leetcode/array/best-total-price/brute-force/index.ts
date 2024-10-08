export const bestTotalPriceBruteForce = (
  prices: number[],
  k: number
): number => {
  let totalMax = 0;

  for (let i = 0; i <= prices.length - k; i++) {
    let total = 0;
    for (let j = 0; j < k; j++) {
      total += prices[i + j];
    }
    totalMax = Math.max(totalMax, total);
  }

  return totalMax;
};
