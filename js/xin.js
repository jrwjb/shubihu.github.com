!function(e, t, a) {

    function r() {
        for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
        requestAnimationFrame(r)
    }
    function n() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function(e) {
            t && t(),
            o(e)
        }
    }
    function o(e) {
        var a = t.createElement("div");
        a.className = "heart",
        s.push({
            el: a,
            x: e.clientX - 5,
            y: e.clientY - 5,
            scale: 1,
            alpha: 1,
            color: c()
        }),
        t.body.appendChild(a)
    }
    function i(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch(t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }
    function c() {
        return "rgb(" + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + ")"
    }
    var s = [];
    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
    function(e) {
        setTimeout(e, 1e3 / 60)
    },
    i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
    n(),
    r()
} (window, document);


//include.js
(function(window, document, undefined) {
var Include39485748323 = function() {}
Include39485748323.prototype = {
//倒序循环
forEach: function(array, callback) {
var size = array.length;
for(var i = size - 1; i >= 0; i--){
callback.apply(array[i], [i]);
}
},
getFilePath: function() {
var curWwwPath=window.document.location.href;
var pathName=window.document.location.pathname;
var localhostPaht=curWwwPath.substring(0,curWwwPath.indexOf(pathName));
var projectName=pathName.substring(0,pathName.substr(1).lastIndexOf('/')+1);
return localhostPaht+projectName;
},
//获取文件内容
getFileContent: function(url) {
var ie = navigator.userAgent.indexOf('MSIE') > 0;
var o = ie ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
o.open('get', url, false);
o.send(null);
return o.responseText;
},
parseNode: function(content) {
var objE = document.createElement("div");
objE.innerHTML = content;
return objE.childNodes;
},
executeScript: function(content) {
var mac = /<script>([\s\S]*?)<\/script>/g;
var r = "";
while(r = mac.exec(content)) {
    eval(r[1]);
}
},
getHtml: function(content) {
    var mac = /<script>([\s\S]*?)<\/script>/g;
    content.replace(mac, "");
    return content;
},
getPrevCount: function(src) {
    var mac = /\.\.\//g;
    var count = 0;
    while(mac.exec(src)) {
        count++;
    }
    return count;
},
getRequestUrl: function(filePath, src) {
    if(/http:\/\//g.test(src)){ return src; }
    var prevCount = this.getPrevCount(src);
    while(prevCount--) {
        filePath = filePath.substring(0,filePath.substr(1).lastIndexOf('/')+1);
    }
    return filePath + "/"+src.replace(/\.\.\//g, "");
},
replaceIncludeElements: function() {
    var $this = this;
    var filePath = $this.getFilePath();
    var includeTals = document.getElementsByTagName("include");
    this.forEach(includeTals, function() {
        //拿到路径  
        var src = this.getAttribute("src");
        //拿到文件内容  
        var content = $this.getFileContent($this.getRequestUrl(filePath, src));
        //将文本转换成节点  
        var parent = this.parentNode;
        var includeNodes = $this.parseNode($this.getHtml(content));
        var size = includeNodes.length;
        for(var i = 0; i < size; i++) {
            parent.insertBefore(includeNodes[0], this);
        }
        //执行文本中的额javascript  
        $this.executeScript(content);
        parent.removeChild(this);
        //替换元素 this.parentNode.replaceChild(includeNodes[1], this);  
    })
}
}
window.onload = function() {
    new Include39485748323().replaceIncludeElements();
}
})(window, document)
