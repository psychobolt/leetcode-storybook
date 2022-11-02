# [01 Matrix](https://leetcode.com/problems/01-matrix/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Medium (43.99%) | 5908 | 291 |

<details>
  <summary><strong>Tags</strong></summary>

  [depth-first-search](https://leetcode.com/tag/depth-first-search) | [breadth-first-search](https://leetcode.com/tag/breadth-first-search)

</details>

<details>
  <summary><strong>Companies</strong></summary>

  google

</details>
<br />
<p>Given an <code>m x n</code> binary matrix <code>mat</code>, return <em>the distance of the nearest </em><code>0</code><em> for each cell</em>.</p>

<p>The distance between two adjacent cells is <code>1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/24/01-1-grid.jpg" style="width: 253px; height: 253px;" />
<pre><code><strong>Input:</strong> mat = [[0,0,0],[0,1,0],[0,0,0]]
<strong>Output:</strong> [[0,0,0],[0,1,0],[0,0,0]]</code></pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg" style="width: 253px; height: 253px;" />
<pre><code><strong>Input:</strong> mat = [[0,0,0],[0,1,0],[1,1,1]]
<strong>Output:</strong> [[0,0,0],[0,1,0],[1,2,1]]</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>m == mat.length</code></li>
  <li><code>n == mat[i].length</code></li>
  <li><code>1 &lt;= m, n &lt;= 10<sup>4</sup></code></li>
  <li><code>1 &lt;= m * n &lt;= 10<sup>4</sup></code></li>
  <li><code>mat[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
  <li>There is at least one <code>0</code> in <code>mat</code>.</li>
</ul>

