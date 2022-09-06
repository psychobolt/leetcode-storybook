# [Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Medium (65.23%) | 11480 | 363 |

<details>
  <summary><strong>Tags</strong></summary>

  [hash-table](https://leetcode.com/tag/hash-table) | [string](https://leetcode.com/tag/string)

</details>

<details>
  <summary><strong>Companies</strong></summary>

  amazon | bloomberg | facebook | uber | yelp

</details>
<br />
<p>Given an array of strings <code>strs</code>, group <strong>the anagrams</strong> together. You can return the answer in <strong>any order</strong>.</p>

<p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><code><strong>Input:</strong> strs = ["eat","tea","tan","ate","nat","bat"]
<strong>Output:</strong> [["bat"],["nat","tan"],["ate","eat","tea"]]</code></pre><p><strong>Example 2:</strong></p>
<pre><code><strong>Input:</strong> strs = [""]
<strong>Output:</strong> [[""]]</code></pre><p><strong>Example 3:</strong></p>
<pre><code><strong>Input:</strong> strs = ["a"]
<strong>Output:</strong> [["a"]]</code></pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>1 &lt;= strs.length &lt;= 10<sup>4</sup></code></li>
  <li><code>0 &lt;= strs[i].length &lt;= 100</code></li>
  <li><code>strs[i]</code> consists of lowercase English letters.</li>
</ul>

