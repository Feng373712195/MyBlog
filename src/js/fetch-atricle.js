
//依赖于fetch 

const getAtricle = (query = {}) =>{

    return  fetch('/admin/publish/articles/find', {
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

const saveAtricle = (query)=>{

    console.log(query);

    return  fetch('http://localhost:8080/admin/publish/articles/save', {
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

    return  fetch('http://localhost:8080/admin/publish/articles/update', {
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

const removeAtricle = (query = {})=>{
    
    return fetch('http://localhost:8080/admin/publish/articles/remove', {
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
        console.log(files[x].name)

        formData.append(`file${x}`,files[x])
    }

    // fetch(`${src}/${_id}`, {
    //     method: "POST",
    //     body:formData
    // })
    // .then(res => {return res.json()})
    // .then(body => { 
    //     console.log(body)
    // })
    
}

module.exports = { getAtricle,saveAtricle,updateAtricle,removeAtricle,uploadFile }