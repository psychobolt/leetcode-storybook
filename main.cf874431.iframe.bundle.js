(self.webpackChunkleetcode_storybook=self.webpackChunkleetcode_storybook||[]).push([[179],{"./generated-stories-entry.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src/Documentation sync ^\\.[\\\\/](?:Introduction\\.stories\\.mdx)$"),__webpack_require__("./src/Documentation sync ^\\.[\\\\/](?:Development\\.stories\\.mdx)$"),__webpack_require__("./src/DataStructure sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\/(index\\.js%7C[^/]*?\\.stories\\.mdx))$")],module,!1)},"./src/DataStructure/Array/DominantIndex/DominantIndex.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{case1:function(){return case1},default:function(){return DominantIndex_stories},es5:function(){return es5}});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),dominantIndex_es5=__webpack_require__("./src/DataStructure/Array/DominantIndex/dominantIndex.es5.js"),dominantIndex_es5_default=__webpack_require__.n(dominantIndex_es5),DominantIndex_dominantIndex_es5="/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar dominantIndex = function(nums) {\r\n  var i, largestNum = -1, largestIndex = -1;\r\n  for (i = 0; i < nums.length; i++) {\r\n    var num = nums[i]\r\n    if (largestNum < num) {\r\n      largestNum = num;\r\n      largestIndex = i;\r\n    }\r\n  }\r\n  for (i = 0; i < nums.length; i++) {\r\n    if (i === largestIndex) continue;\r\n    if (2 * nums[i] > largestNum) return -1;\r\n  }\r\n  return largestIndex;\r\n};\r\n\r\nmodule.exports = dominantIndex;",testCases=function runTestCase(dominantIndex,_ref){return dominantIndex(_ref.nums)};function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const case1={nums:[3,6,1,0],expected:1},layoutProps={case1:case1};function MDXContent({components:components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Array/Dominant Index",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"dominant-index"},"Dominant Index"),(0,esm.kt)("p",null,"See ",(0,esm.kt)("a",{parentName:"p",href:"https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1147/",target:"_blank",rel:"nofollow noopener noreferrer"},"card"),"."),(0,esm.kt)("h2",{id:"es5"},"ES5"),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"ES5",parameters:{docs:{source:{code:DominantIndex_dominantIndex_es5}}},mdxType:"Story"},(0,esm.kt)("div",null,(0,esm.kt)("label",null,"Input: "),(0,esm.kt)("span",null,JSON.stringify(case1.nums))),(0,esm.kt)("div",null,(0,esm.kt)("label",null,"Output: "),(0,esm.kt)("span",null,JSON.stringify(testCases(dominantIndex_es5_default(),case1)))))))}MDXContent.isMDXComponent=!0;const es5=()=>(0,esm.kt)(react.Fragment,null,(0,esm.kt)("div",null,(0,esm.kt)("label",null,"Input: "),(0,esm.kt)("span",null,JSON.stringify(case1.nums))),(0,esm.kt)("div",null,(0,esm.kt)("label",null,"Output: "),(0,esm.kt)("span",null,JSON.stringify(testCases(dominantIndex_es5_default(),case1)))));es5.storyName="ES5",es5.parameters={storySource:{source:"<div>\n      <label>Input: </label>\n      <span>{JSON.stringify(case1.nums)}</span>\n    </div>\n<div>\n      <label>Output: </label>\n      <span>{JSON.stringify(runTestCase(dominantIndex_es5, case1))}</span>\n    </div>"},docs:{source:{code:DominantIndex_dominantIndex_es5}}};const componentMeta={title:"Array/Dominant Index",includeStories:["es5"]},mdxStoryNameToKey={ES5:"es5"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};var DominantIndex_stories=componentMeta},"./src/DataStructure/Array/Pivot/Pivot.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{case1:function(){return case1},default:function(){return Pivot_stories},es5:function(){return es5}});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),pivot_es5=__webpack_require__("./src/DataStructure/Array/Pivot/pivot.es5.js"),pivot_es5_default=__webpack_require__.n(pivot_es5),Pivot_pivot_es5="/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar pivotIndex = function(nums) {\r\n  for (var i = 0; i < nums.length; i++) {\r\n    var left = 0, right = 0;\r\n    for (var a = 0; a < i; a++) {\r\n      left += nums[a];\r\n    }\r\n    for (var b = i + 1; i < b && b < nums.length; b++) {\r\n      right += nums[b];\r\n    }\r\n    if (left === right) {\r\n      return i;\r\n    }\r\n  }\r\n  return -1;\r\n};\r\n\r\nmodule.exports = pivotIndex;",testCases=function runTestCase(findPivot,_ref){return findPivot(_ref.nums)};function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const case1={nums:[1,7,3,6,5,6],expected:3},layoutProps={case1:case1};function MDXContent({components:components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Array/Find Pivot Index",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"find-pivot-index"},"Find Pivot Index"),(0,esm.kt)("p",null,"See ",(0,esm.kt)("a",{parentName:"p",href:"https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1144/",target:"_blank",rel:"nofollow noopener noreferrer"},"card"),"."),(0,esm.kt)("h2",{id:"es5"},"ES5"),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"ES5",parameters:{docs:{source:{code:Pivot_pivot_es5}}},mdxType:"Story"},(0,esm.kt)("div",null,(0,esm.kt)("label",null,"Input: "),(0,esm.kt)("span",null,JSON.stringify(case1.nums))),(0,esm.kt)("div",null,(0,esm.kt)("label",null,"Output: "),(0,esm.kt)("span",null,JSON.stringify(testCases(pivot_es5_default(),case1)))))))}MDXContent.isMDXComponent=!0;const es5=()=>(0,esm.kt)(react.Fragment,null,(0,esm.kt)("div",null,(0,esm.kt)("label",null,"Input: "),(0,esm.kt)("span",null,JSON.stringify(case1.nums))),(0,esm.kt)("div",null,(0,esm.kt)("label",null,"Output: "),(0,esm.kt)("span",null,JSON.stringify(testCases(pivot_es5_default(),case1)))));es5.storyName="ES5",es5.parameters={storySource:{source:"<div>\n      <label>Input: </label>\n      <span>{JSON.stringify(case1.nums)}</span>\n    </div>\n<div>\n      <label>Output: </label>\n      <span>{JSON.stringify(runTestCase(findPivot_es5, case1))}</span>\n    </div>"},docs:{source:{code:Pivot_pivot_es5}}};const componentMeta={title:"Array/Find Pivot Index",includeStories:["es5"]},mdxStoryNameToKey={ES5:"es5"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};var Pivot_stories=componentMeta},"./src/DataStructure/LinkedList/SinglyLinkedLIst/SinglyLinkedList.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{case1:function(){return case1},default:function(){return SinglyLinkedList_stories},es5:function(){return es5}});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),singlyLinkedList_es5=__webpack_require__("./src/DataStructure/LinkedList/SinglyLinkedLIst/singlyLinkedList.es5.js"),singlyLinkedList_es5_default=__webpack_require__.n(singlyLinkedList_es5),SinglyLinkedLIst_singlyLinkedList_es5="var Node = function (val, next) {\r\n  this.val = val;\r\n  this.next = next || null;\r\n};\r\n  \r\nvar MyLinkedList = function() {\r\n  this.head = null;\r\n};\r\n\r\n/** \r\n * @param {number} index\r\n * @return {number}\r\n */\r\nMyLinkedList.prototype.get = function(index) {\r\n  var i, ptr;\r\n  for(i = 0, ptr = this.head; ptr != null; ptr = ptr.next) {\r\n    if (index === i++) {\r\n      return ptr.val;\r\n    }\r\n  }\r\n  return -1;\r\n};\r\n\r\n/** \r\n * @param {number} val\r\n * @return {void}\r\n */\r\nMyLinkedList.prototype.addAtHead = function(val) {\r\n  if (this.head === null) {\r\n    this.head = new Node(val);\r\n  } else {\r\n    this.head = new Node(val, this.head);\r\n  }\r\n  return null;\r\n};\r\n\r\n/** \r\n * @param {number} val\r\n * @return {void}\r\n */\r\nMyLinkedList.prototype.addAtTail = function(val) {\r\n  if (this.head === null) {\r\n    this.addAtHead(val);\r\n  } else {\r\n    var prev, ptr;\r\n    for(prev = this.head, ptr = prev.next; ptr != null; prev = ptr, ptr = ptr.next);\r\n    prev.next = new Node(val);\r\n  }\r\n  return null;\r\n};\r\n\r\n/** \r\n * @param {number} index \r\n * @param {number} val\r\n * @return {void}\r\n */\r\nMyLinkedList.prototype.addAtIndex = function(index, val) {\r\n  if (index === 0) return this.addAtHead(val);\r\n  if (this.head === null) return null;\r\n  var i, prev, ptr, node = new Node(val);\r\n  for(i = 1, prev = this.head, ptr = prev.next; ptr != null; i++, prev = ptr, ptr = ptr.next) {\r\n    if (index === i) break;\r\n  }\r\n  if (index <= (i + 1)) {\r\n    prev.next = node;\r\n    node.next = ptr;\r\n  }\r\n  return null;\r\n};\r\n\r\n/** \r\n * @param {number} index\r\n * @return {void}\r\n */\r\nMyLinkedList.prototype.deleteAtIndex = function(index) {\r\n    if (this.head === null) {\r\n      return null;\r\n    }\r\n    if (index === 0) {\r\n      this.head = this.head.next;\r\n      return null;\r\n    }\r\n    var i, prev, ptr;\r\n    for(i = 1, prev = this.head, ptr = prev.next; ptr != null; i++, prev = ptr, ptr = ptr.next) {\r\n      if (index === i) {\r\n        prev.next = ptr.next;\r\n        break;\r\n      }\r\n    }\r\n    return null;\r\n};\r\n\r\n/** \r\n * Your MyLinkedList object will be instantiated and called as such:\r\n * var obj = new MyLinkedList()\r\n * var param_1 = obj.get(index)\r\n * obj.addAtHead(val)\r\n * obj.addAtTail(val)\r\n * obj.addAtIndex(index,val)\r\n * obj.deleteAtIndex(index)\r\n */\r\n\r\nmodule.exports = MyLinkedList;",testCases=function runTestCase(LinkedList,_ref){var commands=_ref.commands,args=_ref.args,list=new LinkedList;return commands.map((function(command,i){var func=LinkedList.prototype[command];return func?func.apply(list,args[i]):null}))};function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const case1={commands:["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"],args:[[],[1],[3],[1,2],[1],[1],[1]],expected:[null,null,null,null,2,null,3]},layoutProps={case1:case1};function MDXContent({components:components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Linked List/Singly Linked List/Implementation",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"singly-linked-list-implementation"},"Singly Linked List Implementation"),(0,esm.kt)("p",null,"See ",(0,esm.kt)("a",{parentName:"p",href:"https://leetcode.com/explore/learn/card/linked-list/209/singly-linked-list/1290/",target:"_blank",rel:"nofollow noopener noreferrer"},"card"),"."),(0,esm.kt)("h2",{id:"es5"},"ES5"),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"ES5",parameters:{docs:{source:{code:SinglyLinkedLIst_singlyLinkedList_es5}}},mdxType:"Story"},(0,esm.kt)("div",null,(0,esm.kt)("label",null,"Input: "),(0,esm.kt)("span",null,JSON.stringify(case1.commands))),(0,esm.kt)("div",null,(0,esm.kt)("label",null,"Output: "),(0,esm.kt)("span",null,JSON.stringify(testCases(singlyLinkedList_es5_default(),case1)))))))}MDXContent.isMDXComponent=!0;const es5=()=>(0,esm.kt)(react.Fragment,null,(0,esm.kt)("div",null,(0,esm.kt)("label",null,"Input: "),(0,esm.kt)("span",null,JSON.stringify(case1.commands))),(0,esm.kt)("div",null,(0,esm.kt)("label",null,"Output: "),(0,esm.kt)("span",null,JSON.stringify(testCases(singlyLinkedList_es5_default(),case1)))));es5.storyName="ES5",es5.parameters={storySource:{source:"<div>\n      <label>Input: </label>\n      <span>{JSON.stringify(case1.commands)}</span>\n    </div>\n<div>\n      <label>Output: </label>\n      <span>{JSON.stringify(runTestCase(SinglyLinkedList_es5, case1))}</span>\n    </div>"},docs:{source:{code:SinglyLinkedLIst_singlyLinkedList_es5}}};const componentMeta={title:"Linked List/Singly Linked List/Implementation",includeStories:["es5"]},mdxStoryNameToKey={ES5:"es5"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};var SinglyLinkedList_stories=componentMeta},"./src/Documentation/Development.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:function(){return __page},default:function(){return Development_stories}});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm.kt)("h1",{id:"development"},"Development"),(0,esm.kt)("h2",{id:"contributing-to-leetcode-storybook"},"Contributing to LeetCode Storybook"),(0,esm.kt)("blockquote",null,(0,esm.kt)("p",{parentName:"blockquote"},"Documentation for creating stories will be provided here in the future. For now please, look at examples in the repo and try to use a consistent format. PRs are welcomed! :)")),(0,esm.kt)("h2",{id:"available-scripts"},"Available Scripts"),(0,esm.kt)("p",null,"This project was bootstrapped with ",(0,esm.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app",target:"_blank",rel:"nofollow noopener noreferrer"},"Create React App"),"."),(0,esm.kt)("p",null,"In the project directory, you can run:"),(0,esm.kt)("h3",{id:"npm-start"},(0,esm.kt)("inlineCode",{parentName:"h3"},"npm start")),(0,esm.kt)("p",null,"Runs the app in the development mode.\\\nOpen ",(0,esm.kt)("a",{parentName:"p",href:"http://localhost:3000",target:"_blank",rel:"nofollow noopener noreferrer"},"http://localhost:3000")," to view it in your browser."),(0,esm.kt)("p",null,"The page will reload when you make changes.\\\nYou may also see any lint errors in the console."),(0,esm.kt)("h3",{id:"npm-test"},(0,esm.kt)("inlineCode",{parentName:"h3"},"npm test")),(0,esm.kt)("p",null,"Launches the test runner in the interactive watch mode.\\\nSee the section about ",(0,esm.kt)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/running-tests",target:"_blank",rel:"nofollow noopener noreferrer"},"running tests")," for more information."),(0,esm.kt)("h3",{id:"npm-run-build"},(0,esm.kt)("inlineCode",{parentName:"h3"},"npm run build")),(0,esm.kt)("p",null,"Builds the app for production to the ",(0,esm.kt)("inlineCode",{parentName:"p"},"build-storybook")," folder.\\\nIt correctly bundles Storybook in production mode and optimizes the build for the best performance."),(0,esm.kt)("p",null,"The build is minified and the filenames include the hashes.\\\nYour app is ready to be deployed!"),(0,esm.kt)("h3",{id:"npm-run-eject"},(0,esm.kt)("inlineCode",{parentName:"h3"},"npm run eject")),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Note: this is a one-way operation. Once you ",(0,esm.kt)("inlineCode",{parentName:"strong"},"eject"),", you can't go back!")),(0,esm.kt)("p",null,"If you aren't satisfied with the build tool and configuration choices, you can ",(0,esm.kt)("inlineCode",{parentName:"p"},"eject")," at any time. This command will remove the single build dependency from your project."),(0,esm.kt)("p",null,"Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except ",(0,esm.kt)("inlineCode",{parentName:"p"},"eject")," will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own."),(0,esm.kt)("p",null,"You don't have to ever use ",(0,esm.kt)("inlineCode",{parentName:"p"},"eject"),". The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it."),(0,esm.kt)("h2",{id:"learn-more"},"Learn More"),(0,esm.kt)("p",null,"To learn Storybook, check out the ",(0,esm.kt)("a",{parentName:"p",href:"https://storybook.js.org/",target:"_blank",rel:"nofollow noopener noreferrer"},"Storybook documentation"),"."))}function Development_stories_extends(){return Development_stories_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Development_stories_extends.apply(this,arguments)}MDXContent.isMDXComponent=!0;const Development_stories_layoutProps={};function Development_stories_MDXContent({components:components,...props}){return(0,esm.kt)("wrapper",Development_stories_extends({},Development_stories_layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Documentation/Development",mdxType:"Meta"}),(0,esm.kt)(MDXContent,{mdxType:"MD"}))}Development_stories_MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Documentation/Development",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(Development_stories_MDXContent,null))};var Development_stories=componentMeta},"./src/Documentation/Introduction.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:function(){return __page},default:function(){return Introduction_stories}});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm.kt)("p",null,(0,esm.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/psychobolt/leetcode-storybook/master/logo.png",alt:"main_logo"})),(0,esm.kt)("h1",{id:"leetcode-storybook"},"LeetCode Storybook"),(0,esm.kt)("p",null,(0,esm.kt)("a",{parentName:"p",href:"https://github.com/psychobolt/eetcode-storybook/actions/workflows/main.yml",target:"_blank",rel:"nofollow noopener noreferrer"},(0,esm.kt)("img",{parentName:"a",src:"https://github.com/psychobolt/leetcode-storybook/actions/workflows/main.yml/badge.svg",alt:"Main workflow"})),"\n",(0,esm.kt)("a",{parentName:"p",href:"https://codecov.io/gh/psychobolt/leetcode-storybook/tree/master/src",target:"_blank",rel:"nofollow noopener noreferrer"},(0,esm.kt)("img",{parentName:"a",src:"https://codecov.io/gh/psychobolt/leetcode-storybook/branch/master/graph/badge.svg",alt:"codecov"}))),(0,esm.kt)("p",null,"A list of solved and curated ",(0,esm.kt)("a",{parentName:"p",href:"https://www.leetcode.com",target:"_blank",rel:"nofollow noopener noreferrer"},"LeetCode")," problems with solutions in ES5 and ES6 within the ",(0,esm.kt)("a",{parentName:"p",href:"https://storybook.js.org",target:"_blank",rel:"nofollow noopener noreferrer"},"StorybookJS")," sandbox."),(0,esm.kt)("h2",{id:"motivation"},"Motivation"),(0,esm.kt)("p",null,"Initially my goal was to study a selected of core interview coding questions that would be asked of candidates in various software companies. Upon my journey, I landed with LeetCode. LeetCode is widely use in the industry and highest ranking among FAANG job seekers. Built around a substantial coding problem solving community, the convenience is the ability to run solutions against their test cases and search for advice from the community. However, I was unable to debug coding solutions that I've procured (locked behind their paywall). Thus, by creating this sandbox environment we can get right to solving and understand the code behind the scenes for free. Furthermore, this project will help with documenting problems and solutions, which is not only for my goals but for anyone who is mastering their coding journey. So get your pens or (I mean) fingers ready and let's get pragmatic!"),(0,esm.kt)("h2",{id:"foreword"},"Foreword"),(0,esm.kt)("p",null,"Many people with software industry and computer science backgrounds would probably know that mastering and learning to code is similiar to a art form. There is no one correct or best way to study or learn how to code, but we all wish to become confident in our problem solving abilities of tackling various challenging problems efficiently. Thus, having a background framework of fundamental algorithms and data sturctures would be ever useful. The chapters of the book will provide sample code of data structures, as well as link sample problems that could be derived."),(0,esm.kt)("p",null,"The collection of mine and a curated of many others who provided their solutions is free open knowledge under the MIT License. Feel free to fork and use this repository as your personal sandbox as well. A great way to learn to code is by debugging existing solutions and even implementing/testing on your own. I have no plans to implement these problems in other languages, so you may reproduce these solutions in the IDE of your choice, but what better enironment could you get than debugging and testing within the convenience of a web browser..."),(0,esm.kt)("h2",{id:"development"},"Development"),(0,esm.kt)("p",null,"If you wish the build your own stories and even contribute, please see ",(0,esm.kt)("a",{parentName:"p",href:"https://github.com/psychobolt/leetcode-storybook/blob/master/DEVELOPMENT.md",target:"_blank",rel:"nofollow noopener noreferrer"},"DEVELOPMENT.md")),(0,esm.kt)("h2",{id:"helpful-libraries"},"Helpful Libraries"),(0,esm.kt)("p",null,"A list of libraries you may want to check out. They are awesome!"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"https://github.com/psychobolt/leetcode-storybook-generator",target:"_blank",rel:"nofollow noopener noreferrer"},"psychobolt / leetcode-storybook-generator")," - Coming Soon! A Yeoman Generator that scafolds boilerplate code for your stories."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"https://github.com/LeetCode-OpenSource/vscode-leetcode",target:"_blank",rel:"nofollow noopener noreferrer"},"LeetCode-OpenSource / vscode-leetcode")," - Solve LeetCode problems in VS Code."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"https://github.com/beizhedenglong/leetcode-site-generator",target:"_blank",rel:"nofollow noopener noreferrer"},"beizhedenglong / leetcode-site-generator")," - Generate your personal LeetCode website with one command!"),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"https://github.com/JacobLinCool/LeetCode-Query",target:"_blank",rel:"nofollow noopener noreferrer"},"JacobLinCool / LeetCode-Query")," - A LeetCode Query API for TypeScript & JavaScript. Built for serverless platforms.")))}function Introduction_stories_extends(){return Introduction_stories_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Introduction_stories_extends.apply(this,arguments)}MDXContent.isMDXComponent=!0;const Introduction_stories_layoutProps={};function Introduction_stories_MDXContent({components:components,...props}){return(0,esm.kt)("wrapper",Introduction_stories_extends({},Introduction_stories_layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Documentation/Introduction",mdxType:"Meta"}),(0,esm.kt)(MDXContent,{mdxType:"MD"}))}Introduction_stories_MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Documentation/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(Introduction_stories_MDXContent,null))};var Introduction_stories=componentMeta},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/DataStructure/Array/DominantIndex/dominantIndex.es5.js":function(module){module.exports=function dominantIndex(nums){var i,largestNum=-1,largestIndex=-1;for(i=0;i<nums.length;i++){var num=nums[i];largestNum<num&&(largestNum=num,largestIndex=i)}for(i=0;i<nums.length;i++)if(i!==largestIndex&&2*nums[i]>largestNum)return-1;return largestIndex}},"./src/DataStructure/Array/Pivot/pivot.es5.js":function(module){module.exports=function pivotIndex(nums){for(var i=0;i<nums.length;i++){for(var left=0,right=0,a=0;a<i;a++)left+=nums[a];for(var b=i+1;i<b&&b<nums.length;b++)right+=nums[b];if(left===right)return i}return-1}},"./src/DataStructure/LinkedList/SinglyLinkedLIst/singlyLinkedList.es5.js":function(module){var Node=function Node(val,next){this.val=val,this.next=next||null},MyLinkedList=function MyLinkedList(){this.head=null};MyLinkedList.prototype.get=function(index){var i,ptr;for(i=0,ptr=this.head;null!=ptr;ptr=ptr.next)if(index===i++)return ptr.val;return-1},MyLinkedList.prototype.addAtHead=function(val){return null===this.head?this.head=new Node(val):this.head=new Node(val,this.head),null},MyLinkedList.prototype.addAtTail=function(val){if(null===this.head)this.addAtHead(val);else{var prev,ptr;for(ptr=(prev=this.head).next;null!=ptr;prev=ptr,ptr=ptr.next);prev.next=new Node(val)}return null},MyLinkedList.prototype.addAtIndex=function(index,val){if(0===index)return this.addAtHead(val);if(null===this.head)return null;var i,prev,ptr,node=new Node(val);for(i=1,ptr=(prev=this.head).next;null!=ptr&&index!==i;i++,prev=ptr,ptr=ptr.next);return index<=i+1&&(prev.next=node,node.next=ptr),null},MyLinkedList.prototype.deleteAtIndex=function(index){if(null===this.head)return null;if(0===index)return this.head=this.head.next,null;var i,prev,ptr;for(i=1,ptr=(prev=this.head).next;null!=ptr;i++,prev=ptr,ptr=ptr.next)if(index===i){prev.next=ptr.next;break}return null},module.exports=MyLinkedList},"./src/DataStructure sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\/(index\\.js%7C[^/]*?\\.stories\\.mdx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./Array/DominantIndex/DominantIndex.stories.mdx":"./src/DataStructure/Array/DominantIndex/DominantIndex.stories.mdx","./Array/Pivot/Pivot.stories.mdx":"./src/DataStructure/Array/Pivot/Pivot.stories.mdx","./LinkedList/SinglyLinkedLIst/SinglyLinkedList.stories.mdx":"./src/DataStructure/LinkedList/SinglyLinkedLIst/SinglyLinkedList.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/DataStructure sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\/(index\\.js%7C[^/]*?\\.stories\\.mdx))$"},"./src/Documentation sync ^\\.[\\\\/](?:Development\\.stories\\.mdx)$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./Development.stories.mdx":"./src/Documentation/Development.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/Documentation sync ^\\.[\\\\/](?:Development\\.stories\\.mdx)$"},"./src/Documentation sync ^\\.[\\\\/](?:Introduction\\.stories\\.mdx)$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./Introduction.stories.mdx":"./src/Documentation/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/Documentation sync ^\\.[\\\\/](?:Introduction\\.stories\\.mdx)$"},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[640],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js")}));__webpack_require__.O()}]);