export const createCounter = (n: number) => {
  return () => {
    return n++;
  };
};
