# [Check If N and Its Double Exist](https://leetcode.com/problems/check-if-n-and-its-double-exist/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Easy (35.85%) | 1215 | 141 |

<details>
  <summary><strong>Tags</strong></summary>

  

</details>

<details>
  <summary><strong>Companies</strong></summary>

  

</details>
<br />
<p>Given an array <code>arr</code> of integers, check if there exist two indices <code>i</code> and <code>j</code> such that :</p>

<ul>
  <li><code>i != j</code></li>
  <li><code>0 &lt;= i, j &lt; arr.length</code></li>
  <li><code>arr[i] == 2 * arr[j]</code></li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><code><strong>Input:</strong> arr = [10,2,5,3]
<strong>Output:</strong> true
<strong>Explanation:</strong> For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]</code></pre>

<p><strong class="example">Example 2:</strong></p>

<pre><code><strong>Input:</strong> arr = [3,1,7,11]
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no i and j that satisfy the conditions.</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>2 &lt;= arr.length &lt;= 500</code></li>
  <li><code>-10<sup>3</sup> &lt;= arr[i] &lt;= 10<sup>3</sup></code></li>
</ul>

