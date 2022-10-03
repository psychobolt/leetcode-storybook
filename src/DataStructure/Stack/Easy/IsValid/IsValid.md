# [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Easy (40.82%) | 15911 | 796 |

<details>
  <summary><strong>Tags</strong></summary>

  [string](https://leetcode.com/tag/string) | [stack](https://leetcode.com/tag/stack)

</details>

<details>
  <summary><strong>Companies</strong></summary>

  airbnb | amazon | bloomberg | facebook | google | microsoft | twitter | zenefits

</details>
<br />
<p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>

<p>An input string is valid if:</p>

<ol>
  <li>Open brackets must be closed by the same type of brackets.</li>
  <li>Open brackets must be closed in the correct order.</li>
  <li>Every close bracket has a corresponding open bracket of the same type.</li>
</ol>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><code><strong>Input:</strong> s = &quot;()&quot;
<strong>Output:</strong> true</code></pre>

<p><strong>Example 2:</strong></p>

<pre><code><strong>Input:</strong> s = &quot;()[]{}&quot;
<strong>Output:</strong> true</code></pre>

<p><strong>Example 3:</strong></p>

<pre><code><strong>Input:</strong> s = &quot;(]&quot;
<strong>Output:</strong> false</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
  <li><code>s</code> consists of parentheses only <code>'()[]{}'</code>.</li>
</ul>

