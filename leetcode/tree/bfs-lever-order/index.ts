export class TreeNode<T> {
  public value: T;
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export const levelOrder = (root: TreeNode<number> | null): number[][] => {
  const result: number[][] = [];
  if (!root) return result;

  let queue: TreeNode<number>[] = [root];

  while (queue.length !== 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node) {
        currentLevel.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    if (currentLevel.length > 0) {
      result.push(currentLevel);
    }
  }

  return result;
};
