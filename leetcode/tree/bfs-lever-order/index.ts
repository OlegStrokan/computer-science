export class ThreeNode<T> {
  public value: T;
  public left: ThreeNode<T> | null;
  public right: ThreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export const levelOrder = (root: ThreeNode<number> | null): number[][] => {
  const result: number[][] = [];
  if (!root) return result;

  let queue: (ThreeNode<number> | null)[] = [root];

  while (queue.length !== 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (node) {
        currentLevel.push(node.value);
        queue.push(node.left);
        queue.push(node.right);
      }
    }

    if (currentLevel.length > 0) {
      result.push(currentLevel);
    }
  }

  return result;
};
