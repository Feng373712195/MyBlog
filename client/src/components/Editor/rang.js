// 本JS 参考了张鑫旭大神文章
// http://www.zhangxinxu.com/study/201104/range-miniblog-insert-topic.html

"use strict";

export const funGetSelected = function(element){
    if(!window.getSelection){
        //IE浏览器
        return document.selection.createRange().text;
    }else{
        return element.value.substr(element.selectionStart,element.selectionEnd - element.selectionStart)
    }
};

export const funTextAsTopic = function(textObj,textFeildValue){
    textObj.focus();
    if (textObj.createTextRange) {
        var caretPos = document.selection.createRange().duplicate();
        document.selection.empty();
        caretPos.text = textFeildValue;
    }else if(textObj.setSelectionRange){
        var rangeStart = textObj.selectionStart;
        var rangeEnd = textObj.selectionEnd;
        var tempStr1 = textObj.value.substring(0, rangeStart);
        var tempStr2 = textObj.value.substring(rangeEnd);
        textObj.value = tempStr1 + textFeildValue + tempStr2;
        textObj.blur();
    }
}
