
//依赖于fetch 

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


const  uploadDraftFile = (src,_id,files)=>{
    
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

module.exports = { getDraft,saveDraft,updateDraft,removeDraft,uploadDraftFile }