# [Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Medium (44.94%) | 6425 | 523 |

<details>
  <summary><strong>Tags</strong></summary>

  [binary-search](https://leetcode.com/tag/binary-search)

</details>

<details>
  <summary><strong>Companies</strong></summary>

  google

</details>
<br />
<p>Given a <strong>sorted</strong> integer array <code>arr</code>, two integers <code>k</code> and <code>x</code>, return the <code>k</code> closest integers to <code>x</code> in the array. The result should also be sorted in ascending order.</p>

<p>An integer <code>a</code> is closer to <code>x</code> than an integer <code>b</code> if:</p>

<ul>
  <li><code>|a - x| &lt; |b - x|</code>, or</li>
  <li><code>|a - x| == |b - x|</code> and <code>a &lt; b</code></li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><code><strong>Input:</strong> arr = [1,2,3,4,5], k = 4, x = 3
<strong>Output:</strong> [1,2,3,4]</code></pre><p><strong class="example">Example 2:</strong></p>
<pre><code><strong>Input:</strong> arr = [1,2,3,4,5], k = 4, x = -1
<strong>Output:</strong> [1,2,3,4]</code></pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>1 &lt;= k &lt;= arr.length</code></li>
  <li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>
  <li><code>arr</code> is sorted in <strong>ascending</strong> order.</li>
  <li><code>-10<sup>4</sup> &lt;= arr[i], x &lt;= 10<sup>4</sup></code></li>
</ul>

