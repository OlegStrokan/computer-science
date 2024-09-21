import { describe, expect, it } from "bun:test";
import { rightSideView } from ".";
import { TreeNode } from "../bfs-lever-order";

describe("rightSideView", () => {
  it("should return the right side view of a balanced binary tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.right = new TreeNode(5);
    root.right.right = new TreeNode(4);

    const result = rightSideView(root);
    expect(result).toEqual([1, 3, 4]);
  });

  it("should return the right side view of a tree with only left children", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);

    const result = rightSideView(root);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("should return the right side view of a tree with only right children", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(4);

    const result = rightSideView(root);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("should return an empty array for an empty tree", () => {
    const result = rightSideView(null);
    expect(result).toEqual([]);
  });

  it("should return the right side view of a single node tree", () => {
    const root = new TreeNode(1);
    const result = rightSideView(root);
    expect(result).toEqual([1]);
  });
});
