import { describe, it, expect } from "bun:test";
import { TreeNode, levelOrder } from "."; // Adjust the import path as needed

describe("levelOrder", () => {
  it("should return an empty array for an empty tree", () => {
    const root: TreeNode<number> | null = null;
    expect(levelOrder(root)).toEqual([]);
  });

  it("should return [[1]] for a tree with only one node", () => {
    const root = new TreeNode(1);
    expect(levelOrder(root)).toEqual([[1]]);
  });

  it("should return [[1], [2, 3], [4, 5, 6, 7]] for a balanced binary tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
  });

  it("should return [[1], [2], [3], [4]] for an unbalanced tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);

    expect(levelOrder(root)).toEqual([[1], [2], [3], [4]]);
  });
});
