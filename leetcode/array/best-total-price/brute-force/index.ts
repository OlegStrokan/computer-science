export const bestTotalPrice = (prices: number[], k: number): number => {
  let totalMax = 0;

  for (let i = 0; i <= prices.length - k; i++) {
    let total = prices.slice(i, i + k).reduce((acc, value) => acc + value, 0);
    totalMax = Math.max(total, totalMax);
  }

  return totalMax;
};
