# [Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Easy (44.68%) | 2447 | 1927 |

<details>
  <summary><strong>Tags</strong></summary>

  [heap](https://leetcode.com/tag/heap) | [depth-first-search](https://leetcode.com/tag/depth-first-search) | [breadth-first-search](https://leetcode.com/tag/breadth-first-search) | [graph](https://leetcode.com/tag/graph)

</details>

<details>
  <summary><strong>Companies</strong></summary>

  

</details>
<br />
<p>You are given an array of characters <code>letters</code> that is sorted in <strong>non-decreasing order</strong>, and a character <code>target</code>. There are <strong>at least two different</strong> characters in <code>letters</code>.</p>

<p>Return <em>the smallest character in </em><code>letters</code><em> that is lexicographically greater than </em><code>target</code>. If such a character does not exist, return the first character in <code>letters</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><code><strong>Input:</strong> letters = [&quot;c&quot;,&quot;f&quot;,&quot;j&quot;], target = &quot;a&quot;
<strong>Output:</strong> &quot;c&quot;
<strong>Explanation:</strong> The smallest character that is lexicographically greater than 'a' in letters is 'c'.</code></pre>

<p><strong class="example">Example 2:</strong></p>

<pre><code><strong>Input:</strong> letters = [&quot;c&quot;,&quot;f&quot;,&quot;j&quot;], target = &quot;c&quot;
<strong>Output:</strong> &quot;f&quot;
<strong>Explanation:</strong> The smallest character that is lexicographically greater than 'c' in letters is 'f'.</code></pre>

<p><strong class="example">Example 3:</strong></p>

<pre><code><strong>Input:</strong> letters = [&quot;x&quot;,&quot;x&quot;,&quot;y&quot;,&quot;y&quot;], target = &quot;z&quot;
<strong>Output:</strong> &quot;x&quot;
<strong>Explanation:</strong> There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>2 &lt;= letters.length &lt;= 10<sup>4</sup></code></li>
  <li><code>letters[i]</code> is a lowercase English letter.</li>
  <li><code>letters</code> is sorted in <strong>non-decreasing</strong> order.</li>
  <li><code>letters</code> contains at least two different characters.</li>
  <li><code>target</code> is a lowercase English letter.</li>
</ul>

