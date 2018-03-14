var marked = require('marked');
var hljs = require('highlight.js');

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});
  
// Synchronous highlighting with highlight.js
marked.setOptions({
    highlight: function (code,lang) {
        return hljs.highlightAuto(code).value;
    }
});

export default marked
