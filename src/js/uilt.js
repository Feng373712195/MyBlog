
//获取当前日期时间 
const getNowFormatDate = ()=>{
    const date = new Date()
    const fromDate = {
        year:date.getFullYear(),
        month:() => {
           let m = date.getMonth() + 1
           return (m>1 && m<=9)?(m = `0${m}`):m
        },
        strDate:() =>{
            let s =date.getDate()
            return (s>= 0 && s<= 9)?(s = `0${s}`):s
        },
        week:()=>{
            let weeks = {0:"星期天",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"}
            return weeks[date.getDay()]
        },
        hours:date.getHours(),
        minutes:()=>{
            let min = date.getMinutes()
            return (min.toString().length === 1?`0${min}`:min)
        },
        seconds:()=>{
            let sec =  date.getSeconds()
            return (sec.toString().length === 1?`0${sec}`:sec)
        }
    } 

    var {  year,month,strDate,week,hours,minutes,seconds } = fromDate;
    return `${year}-${month()}-${strDate()} ${week()} ${hours}:${minutes()}:${seconds()}`;
};

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
    getNowFormatDate,
    throttle,
    debounce,
    createeObjectURL,
    getBase64Image
 }