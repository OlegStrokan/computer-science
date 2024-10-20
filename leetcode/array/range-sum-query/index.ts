export class RangeSumQuery {
  public prefixSum: number[];

  constructor(nums: number[]) {
    this.prefixSum = new Array(nums.length + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
      this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
    }
  }
  public sumRange(left: number, right: number): number {
    return this.prefixSum[right + 1] - this.prefixSum[left];
  }
}
