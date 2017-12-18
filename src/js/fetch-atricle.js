
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

const  uploadFile = (src,files)=>{

    console.log(files)

    let formData = new FormData()
    formData.append('files',files[0])
    
    fetch(src, {
        method: "POST",
        headers: {
            "Content-Type":"multipart/form-data;boundary=---------7893413"
        },
        body:formData
    })
    .then(res => {return res.json()})
    .then(body => { 
        console.log(body)
    })
    
}

module.exports = { getAtricle,saveAtricle,removeAtricle,uploadFile }