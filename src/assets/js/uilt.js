//函数防抖
const throttle = (action,delay)=>{
    var last = 0;
    return function(...arg){
        var ctx = this;
        let curr = +new Date();
        if(curr - last > delay){
            action.apply(this,arg)
            last = curr
        }
    }
}

//函数节流
const debounce = (action,idle)=>{
    var time = null;
    return function(...arg){
        var ctx = this;
        clearTimeout(time);
        time = setTimeout(()=>{
            action.apply(ctx,arg)
        },idle)
    }
}

//读取文件URL
const createeObjectURL = (blob)=>{
    if(window.URL){
        return window.URL.createObjectURL(blob)
    }else if(window.webkitURL){
        return window.webkitURL.createObjectURL(blob)
    }else{
        return null;
    }
}

function getBase64Image(img) {  
    var canvas = document.createElement("canvas");  
    canvas.width = img.width;  
    canvas.height = img.height;  
    var ctx = canvas.getContext("2d");  
    ctx.drawImage(img, 0, 0, img.width, img.height);  
    var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();  
    var dataURL = canvas.toDataURL("image/"+ext);  
    return dataURL;  
}

module.exports = { 
    throttle,
    debounce,
    createeObjectURL,
    getBase64Image
 }