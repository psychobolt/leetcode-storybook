# [Number of Islands](https://leetcode.com/problems/number-of-islands/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Medium (55.06%) | 17142 | 395 |

<details>
  <summary><strong>Tags</strong></summary>

  [depth-first-search](https://leetcode.com/tag/depth-first-search) | [breadth-first-search](https://leetcode.com/tag/breadth-first-search) | [union-find](https://leetcode.com/tag/union-find)

</details>

<details>
  <summary><strong>Companies</strong></summary>

  amazon | facebook | google | microsoft | zenefits

</details>
<br />
<p>Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>'1'</code>s (land) and <code>'0'</code>s (water), return <em>the number of islands</em>.</p>

<p>An <strong>island</strong> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><code><strong>Input:</strong> grid = [
  [&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;0&quot;],
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;],
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;]
]
<strong>Output:</strong> 1</code></pre>

<p><strong>Example 2:</strong></p>

<pre><code><strong>Input:</strong> grid = [
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;]
]
<strong>Output:</strong> 3</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>m == grid.length</code></li>
  <li><code>n == grid[i].length</code></li>
  <li><code>1 &lt;= m, n &lt;= 300</code></li>
  <li><code>grid[i][j]</code> is <code>'0'</code> or <code>'1'</code>.</li>
</ul>

