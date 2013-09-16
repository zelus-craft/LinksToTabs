
Links to Tabs
=======================

Description
-----------

Sometimes you really just want to open every link in a Feedly Feed in new tabs.

How-to:
-----------

1. Make a bookmark and give it a title and description so you don't forget what it is.

2. Use this bookmark location.
	```js
	javascript: (function (){var jsCode = document.createElement('script'); jsCode.setAttribute('id', 'openLinksInTabs.js'); jsCode.setAttribute('src', 'https://raw.github.com/zelus-craft/LinksToTabs/master/openLinksInTabsMinified'); document.body.appendChild(jsCode); }());
	```

 ![](https://raw.github.com/zelus-craft/LinksToTabs/master/img/Bookmark%20Tutorial.png)

3. Go to a webpage, like your Feedly Feed, and middleclick your new bookmark.

4. If your web browser says "X has prevented this site from opening Y pop-up windows" then you can override it with the options button that appears.

Extra:
------

If you use the following bookmark location with a specific hostname then that hostname's links will be ignored and will not be opened in new tabs.
	```js
	javascript:(function(){function r(e){var t={};for(var n=0;n<e.length;n++)t[e[n]]=true;var r=[];for(var i in t)r.push(i);return r}var e=document.getElementsByTagName("a"),t=[];for(var n in e){if(!/**HOSTNAME HERE**/i.exec(e[n].href)){t.push(e[n].href)}}t=r(t);for(var n=0;n<t.length-1;n++){window.open(t[n],"_blank")}})()
	```

**Warning:** Your browser may crash when you try to open more than 30 links at once.