
"use strict";

function getNowFormatDate() {
    
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

module.exports = { getNowFormatDate }