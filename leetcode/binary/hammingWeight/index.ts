export const hammingWeightV1 = (num: number): number => {
  let response = 0;
  while (num > 0) {
    response += num % 2;
    num = num >> 1;
  }
  return response;
};

export const hammingWeightV2 = (num: number): number => {
  let response = 0;
  while (num > 0) {
    num = num & (num - 1);
    response++;
  }
  return response;
};
