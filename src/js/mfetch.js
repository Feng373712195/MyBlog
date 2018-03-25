
/** 发布文章 请求方法 */
/** 依赖于fetch */

const getAtricle = (query = {},skip = 0,limit = 1) =>{
    return  fetch('/articles/find', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({query,skip,limit})
            })
            .then(res => res.json())
            .then(body => {
                return new Promise( (resolve,reject)=>{
                    if(body.code === 0)
                      resolve(body.data)
                    else
                      reject(body.error)
                })  
            })
}

const saveAtricle = (query)=>{

    console.log(query);

    return  fetch('/articles/save', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(query)
            })
            .then(res => {return res.json()})
            .then(body => { 
                    return new Promise( (resolve,reject)=>{
                            if(body.code === 0)
                              resolve(body.data)
                            else
                              reject(body.error)
                        }) 
            })

}

const updateAtricle = (query,update,multi)=>{

    return  fetch('/articles/update', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({query:query,update:update,muilt:multi})
            })
            .then(res => {return res.json()})
            .then(body => { 
                    return new Promise( (resolve,reject)=>{
                            if(body.code === 0)
                            resolve(body.data)
                            else
                            reject(body.error)
                        }) 
            })
}


const readAtricle = (_id)=>{

    return  fetch('/articles/read',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({_id})
            })
            .then(res => {return res.json()})
            .then(body => { 
                    return new Promise( (resolve,reject)=>{
                            if(body.code === 0)
                            resolve(body.data)
                            else
                            reject(body.error)
                        }) 
            })
}

const removeAtricle = (query = {})=>{
    
    return fetch('/articles/remove', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({query:query})
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
                    else
                    reject(body.message)
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
/** 依赖于fetch */

const getDraft = (query = {}) =>{

    return  fetch('/drafts/find', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({query:query})
            })
            .then(res => res.json())
            .then(body => {
                return new Promise( (resolve,reject)=>{
                    if(body.code === 0)
                      resolve(body.data)
                    else
                      reject(body.error)
                })  
            })
}

const saveDraft = (query)=>{

    console.log(query);

    return  fetch('/drafts/save', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(query)
            })
            .then(res => {return res.json()})
            .then(body => { 
                    return new Promise( (resolve,reject)=>{
                            if(body.code === 0)
                              resolve(body.data)
                            else
                              reject(body.error)
                        }) 
            })

}

const updateDraft = (query,update,multi)=>{

    return  fetch('/drafts/update', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({query:query,update:update,muilt:multi})
            })
            .then(res => {return res.json()})
            .then(body => { 
                    return new Promise( (resolve,reject)=>{
                            if(body.code === 0)
                            resolve(body.data)
                            else
                            reject(body.error)
                        }) 
            })
}

const removeDraft = (query = {})=>{
    
    return fetch('/drafts/remove', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({query:query})
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


const uploadDraftFile = (src,_id,files)=>{
    
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
                    else
                      reject(body.message)
                }) 
            })
    
}


/** 标签管理 请求方法 */
/** 依赖于fetch */

const loadLabel = ()=>{

    return fetch('/lable/getAllLable', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    }
            })
            .then(res => {return res.json()})
            .then(body => {
                return new Promise( (resolve,reject)=>{
                    if(body.code === 0){
                      resolve(body.lables)
                    }
                    else
                      reject(`获取标签信息失败 ${body}`)
                })
            })
}


/**管理员登陆 请求方法*/
const adminlogin = ()=>{
    return fetch('/admin/login',{ method: 'POST' })
           .then(function(res) {
                return res.json();
            })
            .then(body => {
                return new Promise( (resolve,reject)=>{
                    if(body.code === 0){
                    resolve()
                    }
                    else
                    reject(`管理员登陆失败 ${body}`)
                })
            })
}


module.exports = { 
    getAtricle,
    saveAtricle,
    updateAtricle,
    readAtricle,
    removeAtricle,
    uploadFile,
    uploadImg,
    getDraft,
    saveDraft,
    updateDraft,
    removeDraft,
    uploadDraftFile,
    loadLabel,
    adminlogin
 }
