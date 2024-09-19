import type { ThreeNode } from "../bfs-lever-order";

class TreeNode<T> {
  public value: T;
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;

  constructor(val: T) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

export const rightSideView = (root: TreeNode<number> | null): number[] => {
  const result: number[] = [];

  if (!root) return result;

  const queue: (ThreeNode<number> | null)[] = [root];

  while (queue.length > 0) {
    const levelSize: number = queue.length;
    let rightMostValue: number | null = null;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (node) {
        rightMostValue = node.value;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    if (rightMostValue !== null) {
      result.push(rightMostValue);
    }
  }

  return result;
};
