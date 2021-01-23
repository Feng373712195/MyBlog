
import axios from 'axios';

const request = axios.create({
    baseURL: 'http://127.0.0.1:8082/'
});

/** 发布文章 请求方法 */
const getAtricle = (query = {},skip = 1,limit = 1) =>{

    return  request.post('/api/articles/find',{
                query,
                skip,
                limit
            })
            .then(res => {
                if(res.data.code === 0)
                    return res.data.data
                else
                    return res.data.error
            })
            .catch(err=>{
                console.log(err)
            })
}

const getAtricleList = (query = {},skip = 1,limit = 1) => {

    return  request.post('/api/articles/lists',{
                query,
                skip,
                limit
            })
            .then(res => {
                if(res.data.code === 0)
                    return res.data.data
                else
                    return res.data.error
            })
            .catch(err=>{
                console.log(err)
            })
}

// 保存文章方法
const saveAtricle = (query)=>{
    return  request.post('/articles/save',query)
            .then(res => {
                if(res.data.code === 0)
                    return res.data.data
                else
                    return res.data.error
            })
            .catch(err=>{
                console.log(err)
            })
}

const updateAtricle = (query,update,multi)=>{

    return  request.post('/articles/update',{
                query:query,
                update:update,
                muilt:multi
            })
            .then(res => {
                if(res.data.code === 0)
                    return res.data.data
                else
                    return res.data.error
            })
            .catch(err=>{
                console.log(err)
            })
}

const readAtricle = (_id)=>{

    return  request.post('/articles/read',{_id})
            .then(res => {
                if(res.data.code === 0)
                    return res.data.data
                else
                    return res.data.error
            })
            .catch(err=>{
                console.log(err)
            })
}

const removeAtricle = (query = {})=>{

    return  request.post('/articles/remove',{query:query})
            .then(res => {
                if(res.data.code === 0)
                    return res.data.data
                else
                    return res.data.error
            })
            .catch(err=>{
                console.log(err)
            })
}

const  uploadFile = (src,_id,files)=>{

    let formData = new FormData()

    for(let x in [...files]){
        formData.append(`file${x}`,files[x])
    }

    return  fetch(`${src}/${_id}`, {
                method: "POST",
                body:formData
            })
            .then(res => {return res.json()})
            .then(body => {
                return new Promise( (resolve,reject)=>{
                    if(body.success){
                        resolve(body.data)
                    }
                    else{
                        reject(body.message)
                    }
                })
            })

}

const  uploadImg = (timeStamp,_id)=>{

    return fetch('/articles/uploadImg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({timeStamp:timeStamp,_id:_id})
        })
        .then(res => {return res.json()})
        .then(body => {
            return new Promise( (resolve,reject)=>{
                if(body.code === 0){
                  resolve(body.data)
                }
                else
                  reject(body.error)
            })
        })
}

/** 草稿箱 请求方法 */
const getDraft = (query = {}) =>{

    return  request.post('/drafts/find',{query:query})
    .then(res => {
        if(res.data.code === 0)
            return res.data.data
        else
            return res.data.error
    })
    .catch(err=>{
        console.log(err)
    })
}

const getDraftList = (query = {}) =>{

    return  request.post('/drafts/lists',{query:query})
            .then(res => {
                if(res.data.code === 0)
                    return res.data.data
                else
                    return res.data.error
            })
            .catch(err=>{
                console.log(err)
            })
}

const saveDraft = (query)=>{

    return  request.post('/drafts/save',query)
            .then(res => {
                if(res.data.code === 0)
                    return res.data.data
                else
                    return res.data.error
            })
            .catch(err=>{
                console.log(err)
            })
}

const updateDraft = (query,update,multi)=>{

    return  request.post('/drafts/update',{
                query:query,
                update:update,
                muilt:multi
            })
            .then(res => {
                if(res.data.code === 0)
                    return res.data.data
                else
                    return res.data.error
            })
            .catch(err=>{
                console.log(err)
            })
}

const removeDraft = (query = {})=>{

    return  request.post('/drafts/remove',{query:query})
            .then(res => {
                if(res.data.code === 0)
                    return res.data.data
                else
                    return res.data.error
            })
            .catch(err=>{
                console.log(err)
            })
}

const uploadDraftFile = (src,_id,files)=>{

    let formData = new FormData()

    for(let x in [...files]){
        formData.append(`file${x}`,files[x])
    }

    return  fetch(`//wuzefeng/${src}/${_id}`, {
                method: "POST",
                body:formData
            })
            .then(res => {return res.json()})
            .then(body => {
                return new Promise( (resolve,reject)=>{
                    if(body.success){
                      resolve(body.data)
                    }
                    else
                      reject(body.message)
                })
            })
}


/** 标签管理 请求方法 */

const loadLabel = ()=>{

    return  request.post('/lable/getAllLable')
            .then(res => {
                if(res.data.code === 0)
                    return res.data.data
                else
                    return `获取标签信息失败 ${res.data.error}`
            })
            .catch(err=>{
                console.log(err)
            })
}

const removeLabelHandle = (lable)=>{

    return  request.post('/lable/removeLable',{lable})
            .then(res => {
                if(res.data.code === 0)
                    return res.data.data
                else
                    return `删除标签失败 ${res.data.error}`
            })
            .catch(err=>{
                console.log(err)
            })

}

/**管理员登陆 请求方法*/
const adminlogin = ()=>{

        return request.post('/admin/login')
        .then(res => {
            if(res.data.code === 0)
                return res.data.data
            else
                return `管理员登陆失败 ${res.data.error}`
        })
        .catch(err=>{
            console.log(err)
        })
}


export default {
    getAtricle,
    getAtricleList,
    saveAtricle,
    updateAtricle,
    readAtricle,
    removeAtricle,
    uploadFile,
    uploadImg,
    getDraft,
    getDraftList,
    saveDraft,
    updateDraft,
    removeDraft,
    uploadDraftFile,
    loadLabel,
    removeLabelHandle,
    adminlogin
 }
