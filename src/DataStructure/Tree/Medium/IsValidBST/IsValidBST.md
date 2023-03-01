# [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Medium (31.00%) | 13991 | 1153 |

<details>
  <summary><strong>Tags</strong></summary>

  [tree](https://leetcode.com/tag/tree) | [depth-first-search](https://leetcode.com/tag/depth-first-search)

</details>

<details>
  <summary><strong>Companies</strong></summary>

  amazon | bloomberg | facebook | microsoft

</details>
<br />
<p>Given the <code>root</code> of a binary tree, <em>determine if it is a valid binary search tree (BST)</em>.</p>

<p>A <strong>valid BST</strong> is defined as follows:</p>

<ul>
  <li>The left <span data-keyword="subtree">subtree</span> of a node contains only nodes with keys <strong>less than</strong> the node's key.</li>
  <li>The right subtree of a node contains only nodes with keys <strong>greater than</strong> the node's key.</li>
  <li>Both the left and right subtrees must also be binary search trees.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg" style="width: 302px; height: 182px;" />
<pre><code><strong>Input:</strong> root = [2,1,3]
<strong>Output:</strong> true</code></pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg" style="width: 422px; height: 292px;" />
<pre><code><strong>Input:</strong> root = [5,1,4,null,null,3,6]
<strong>Output:</strong> false
<strong>Explanation:</strong> The root node's value is 5 but its right child's value is 4.</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
  <li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

