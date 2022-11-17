# [Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Medium (58.55%) | 7823 | 266 |

<details>
  <summary><strong>Tags</strong></summary>

  [tree](https://leetcode.com/tag/tree) | [depth-first-search](https://leetcode.com/tag/depth-first-search)

</details>

<details>
  <summary><strong>Companies</strong></summary>

  microsoft

</details>
<br />
<p>You are given a <strong>perfect binary tree</strong> where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:</p>

<pre><code>struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}</code></pre>

<p>Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to <code>NULL</code>.</p>

<p>Initially, all next pointers are set to <code>NULL</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/14/116_sample.png" style="width: 500px; height: 171px;" />
<pre><code><strong>Input:</strong> root = [1,2,3,4,5,6,7]
<strong>Output:</strong> [1,<span>#</span>,2,3,<span>#</span>,4,5,6,7,<span>#</span>]
<pre><strong>Explanation: </strong>Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with <span>'#'</span> signifying the end of each level.</pre></code></pre>

<p><strong class="example">Example 2:</strong></p>

<pre><code><strong>Input:</strong> root = []
<strong>Output:</strong> []</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li>The number of nodes in the tree is in the range <code>[0, 2<sup>12</sup> - 1]</code>.</li>
  <li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow-up:</strong></p>

<ul>
  <li>You may only use constant extra space.</li>
  <li>The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.</li>
</ul>
