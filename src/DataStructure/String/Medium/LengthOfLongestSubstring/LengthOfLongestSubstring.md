# [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Medium (33.59%) | 28299 | 1213 |

<details>
  <summary><strong>Tags</strong></summary>

  [hash-table](https://leetcode.com/tag/hash-table) | [two-pointers](https://leetcode.com/tag/two-pointers) | [string](https://leetcode.com/tag/string) | [sliding-window](https://leetcode.com/tag/sliding-window)

</details>

<details>
  <summary><strong>Companies</strong></summary>

  adobe | amazon | bloomberg | yelp

</details>
<br />
<p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><code><strong>Input:</strong> s = &quot;abcabcbb&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is &quot;abc&quot;, with the length of 3.</code></pre>

<p><strong>Example 2:</strong></p>

<pre><code><strong>Input:</strong> s = &quot;bbbbb&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> The answer is &quot;b&quot;, with the length of 1.</code></pre>

<p><strong>Example 3:</strong></p>

<pre><code><strong>Input:</strong> s = &quot;pwwkew&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is &quot;wke&quot;, with the length of 3.
Notice that the answer must be a substring, &quot;pwke&quot; is a subsequence and not a substring.</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
  <li><code>s</code> consists of English letters, digits, symbols and spaces.</li>
</ul>

