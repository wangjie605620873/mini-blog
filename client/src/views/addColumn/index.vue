<template>
    <div>
      <page-header title="添加分类"></page-header>
      <div class="__block_box">
        <h4 class="__block_box_header">添加分类</h4>
        <div class="max-width">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="分类名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="分类描述">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <div class="upload">
              <span>上传封面</span>
              <el-upload
                class="upload-demo"

                action="http://127.0.0.1:5555/addColumnUploadImg"  :on-success="handleAvatarSuccess"

                drag
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </div>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
</template>
<script>
  import PageHeader from '../../components/PageHeader/index.vue'
  export default {
    components:{
      PageHeader
    },
    data(){
      return{
        form: {
          name: '',
          desc: '',
        },
        imgUrl : "",
      }
    },
    created(){
      $axios({
        url : "http://127.0.0.1:5555/admin/getColumn",
        method : "POST"
      }).then((res)=>{
        console.log(res)
      })
    },
   methods: {
     onSubmit() {
       if (this.form.name===""){
         this.$message.error({message:"请填写分类名称!",showClose:true});
         return
       }else if (this.form.desc===""){
         this.$message.error({message:"请填写分类描述!",showClose:true});
         return
       }else if(this.imgUrl === ""){
         this.$message.error({message:'请上传分类封面！',showClose:true});
         return
       }

      $axios({
        url : "http://127.0.0.1:5555/admin/addColumn",
        method : "POST",
        data : {
          name : this.form.name,
          desc : this.form.desc,
          imgUrl : this.imgUrl
        }
      }).then((res)=>{
        console.log(res)
      })

     },
     handleAvatarSuccess(res, file) {
       this.imageUrl = URL.createObjectURL(file.raw);
       if (res.code === 200){
         this.imgUrl = res.url
       }else{
         this.$message.error({message:'上传失败！',showClose:true});
       }
     },
   }
  }
</script>
<style lang="less" scoped>
  .max-width{
    width: 860px;
  }
  .upload{
    display: flex;
    margin-bottom:40px;

  }
  .upload span{
    margin-left: 13px;
    text-align: right;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
  }
  .el-form-item{
    text-align: left;
  }
</style>