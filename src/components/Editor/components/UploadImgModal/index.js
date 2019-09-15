import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createeObjectURL } from '@assets/js/uilt'

import { uploadFile } from '@api'
import './uploadimgmodal.scss'
import { setTimeout } from 'timers';

export default class UploadImgModal extends Component{

    constructor(){
        super();
        this.state = {
            isupload:false,
            btnFlash:{
                color:'',
                text:'上传'
            }
        }
    }

    initState(){
        this.setState({
            isupload:false,
            btnFlash:{
                color:'',
                text:'上传'
            }
        })
        $('#uploadImg')[0].value = '';
        this.props.closeModal()
    }

    isUploadSucess(b){
        this.setState({
            isupload:false,
            btnFlash:{
                color:b?'red':'',
                text:b?'上传成功':'请重新上传'
            }
        })
    }

    async getImgFile(file){
        
        console.log(this.props.timeStamp)

        var that = this;
        this.setState({
            isupload:true
        })

        await uploadFile('/articles/cacheuploadImg',this.props.timeStamp, $('#uploadImg')[0].files)
              .then(()=>{
                 that.props.setImgURL(`/articles/cacheuploadImg/${this.props.timeStamp}/${$('#uploadImg')[0].files[0].name}`)
                 that.isUploadSucess(true);
                 setTimeout(()=>{
                    that.initState();
                 },300)
               })
               .catch( e => { 
                  alert('上传附件失败，请重新上传')
                  that.isUploadSucess(false); 
               })
    }

    render(){
        return(
            <div className="uploadImg-modal" style={{display:this.props.isshow?'block':'none'}} >
                <i className='close' onClick={ ()=>{ this.initState() }} >X</i>
                <span className="tips">请选择图片</span>
                <div className="input-box"><input id="uploadImg" type="file"/></div>
                <button type="button" onClick={this.getImgFile.bind(this)} style={{color:this.state.btnFlash.color}}  className={"ui button " + (this.state.isupload?"loading":"")}>{this.state.btnFlash.text}</button>
            </div>
        )
    }
}