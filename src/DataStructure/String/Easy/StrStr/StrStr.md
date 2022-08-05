# [Implement strStr()](https://leetcode.com/problems/implement-strstr/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Easy (35.80%) | 4690 | 3852 |

<details>
  <summary><strong>Tags</strong></summary>

  [two-pointers](https://leetcode.com/tag/two-pointers) | [string](https://leetcode.com/tag/string)

</details>

<details>
  <summary><strong>Companies</strong></summary>

  apple | facebook | microsoft | pocketgems

</details>
<br />
<p>Implement <a href="http://www.cplusplus.com/reference/cstring/strstr/" target="_blank">strStr()</a>.</p>

<p>Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>.</p>

<p><strong>Clarification:</strong></p>

<p>What should we return when <code>needle</code> is an empty string? This is a great question to ask during an interview.</p>

<p>For the purpose of this problem, we will return 0 when <code>needle</code> is an empty string. This is consistent to C's <a href="http://www.cplusplus.com/reference/cstring/strstr/" target="_blank">strstr()</a> and Java's <a href="https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)" target="_blank">indexOf()</a>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><code><strong>Input:</strong> haystack = &quot;hello&quot;, needle = &quot;ll&quot;
<strong>Output:</strong> 2</code></pre>

<p><strong>Example 2:</strong></p>

<pre><code><strong>Input:</strong> haystack = &quot;aaaaa&quot;, needle = &quot;bba&quot;
<strong>Output:</strong> -1</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>1 &lt;= haystack.length, needle.length &lt;= 10<sup>4</sup></code></li>
  <li><code>haystack</code> and <code>needle</code> consist of only lowercase English characters.</li>
</ul>

