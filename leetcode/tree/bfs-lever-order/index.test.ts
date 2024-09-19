import { describe, it, expect } from "bun:test";
import { ThreeNode, levelOrder } from "."; // Adjust the import path as needed

describe("levelOrder", () => {
  it("should return an empty array for an empty tree", () => {
    const root: ThreeNode<number> | null = null;
    expect(levelOrder(root)).toEqual([]);
  });

  it("should return [[1]] for a tree with only one node", () => {
    const root = new ThreeNode(1);
    expect(levelOrder(root)).toEqual([[1]]);
  });

  it("should return [[1], [2, 3], [4, 5, 6, 7]] for a balanced binary tree", () => {
    const root = new ThreeNode(1);
    root.left = new ThreeNode(2);
    root.right = new ThreeNode(3);
    root.left.left = new ThreeNode(4);
    root.left.right = new ThreeNode(5);
    root.right.left = new ThreeNode(6);
    root.right.right = new ThreeNode(7);

    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
  });

  it("should return [[1], [2], [3], [4]] for an unbalanced tree", () => {
    const root = new ThreeNode(1);
    root.left = new ThreeNode(2);
    root.left.left = new ThreeNode(3);
    root.left.left.left = new ThreeNode(4);

    expect(levelOrder(root)).toEqual([[1], [2], [3], [4]]);
  });
});
