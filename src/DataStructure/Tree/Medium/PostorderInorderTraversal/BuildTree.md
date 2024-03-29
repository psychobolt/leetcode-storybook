# [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Medium (56.62%) | 5370 | 81 |

<details>
  <summary><strong>Tags</strong></summary>

  [array](https://leetcode.com/tag/array) | [tree](https://leetcode.com/tag/tree) | [depth-first-search](https://leetcode.com/tag/depth-first-search)

</details>

<details>
  <summary><strong>Companies</strong></summary>

  microsoft

</details>
<br />
<p>Given two integer arrays <code>inorder</code> and <code>postorder</code> where <code>inorder</code> is the inorder traversal of a binary tree and <code>postorder</code> is the postorder traversal of the same tree, construct and return <em>the binary tree</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/tree.jpg" style="width: 277px; height: 302px;" />
<pre><code><strong>Input:</strong> inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
<strong>Output:</strong> [3,9,20,null,null,15,7]</code></pre>

<p><strong class="example">Example 2:</strong></p>

<pre><code><strong>Input:</strong> inorder = [-1], postorder = [-1]
<strong>Output:</strong> [-1]</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>1 &lt;= inorder.length &lt;= 3000</code></li>
  <li><code>postorder.length == inorder.length</code></li>
  <li><code>-3000 &lt;= inorder[i], postorder[i] &lt;= 3000</code></li>
  <li><code>inorder</code> and <code>postorder</code> consist of <strong>unique</strong> values.</li>
  <li>Each value of <code>postorder</code> also appears in <code>inorder</code>.</li>
  <li><code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.</li>
  <li><code>postorder</code> is <strong>guaranteed</strong> to be the postorder traversal of the tree.</li>
</ul>

