# [Design HashSet](https://leetcode.com/problems/design-hashset/description/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| algorithms | Easy (66.06%) | 2273 | 219 |

<details>
  <summary><strong>Tags</strong></summary>

  

</details>

<details>
  <summary><strong>Companies</strong></summary>

  

</details>
<br />

<p>Design a HashSet without using any built-in hash table libraries.</p>

<p>Implement <code>MyHashSet</code> class:</p>

<ul>
  <li><code>void add(key)</code> Inserts the value <code>key</code> into the HashSet.</li>
  <li><code>bool contains(key)</code> Returns whether the value <code>key</code> exists in the HashSet or not.</li>
  <li><code>void remove(key)</code> Removes the value <code>key</code> in the HashSet. If <code>key</code> does not exist in the HashSet, do nothing.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><code><strong>Input</strong>
[&quot;MyHashSet&quot;, &quot;add&quot;, &quot;add&quot;, &quot;contains&quot;, &quot;contains&quot;, &quot;add&quot;, &quot;contains&quot;, &quot;remove&quot;, &quot;contains&quot;]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
<strong>Output</strong>
[null, null, null, true, false, null, true, null, false]

<strong>Explanation</strong>
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>0 &lt;= key &lt;= 10<sup>6</sup></code></li>
  <li>At most <code>10<sup>4</sup></code> calls will be made to <code>add</code>, <code>remove</code>, and <code>contains</code>.</li>
</ul>

