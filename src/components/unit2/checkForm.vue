<template>
    <div class="container">
       <form action="">
            <div>
                <label for="">Tên: <span>*</span> </label>
                <input type="text" v-model="data.name">
                <p v-if="!data.name">Vui lòng nhập tên!!</p>
            </div>
            <div>
                <label for="">Số điện thoại: <span>*</span> </label>
                <input type="text" v-model="data.phone">
                <p v-if="!data.phone">Vui lòng nhập số điện thoại!!</p>
            </div>           
            <div>
                <label for="">Mật khẩu: <span>*</span> </label>
                <input type="password" v-model="data.pass">
                <p v-if="!data.pass">Vui lòng nhập password!!</p>
                <p v-if="data.pass.length < 8 && data.pass">Mật khẩu chưa đủ 8 ký tự!!</p>
            </div>           
            <div>
                <label for="">Nhập lại mật khẩu: <span>*</span> </label>
                <input type="password" v-model="data.cfPass">
                <p v-if="!data.cfPass || data.cfPass !== data.pass">{{ error.cfPass }}</p>
            </div>                     
            <p class="sub" @click="sub">Submit</p> 
       </form>
    </div>
</template>

<script>
export default {
    name: "checkForm",
    data() {
        return {
            check: true,
           data: {
                name: '',
                phone: '',
                pass: '',
                cfPass: ''
            },
            error: {
                name: '',
                phone: '',
                pass: '',
                cfPass: ''
            },
        }
    },
    methods: {
        sub(){
            // alert(this.data.pass.length);
            this.check = true;
            if(!this.data.name){
                this.error.name = 'Vui lòng nhập vào trường này!!';
                this.check = false;
            }else{
                this.error.name = ''
            }
            if(!this.data.phone){
                this.error.phone = 'Vui lòng nhập vào trường này!!'
                this.check = false;
            }else if(typeof this.data.phone !== 'number'){
                this.error.phone = 'Vui lòng chỉ nhập số!!'
                this.check = false;
            }else{
                this.error.phone = ''
            }
            if(!this.data.pass){
                this.error.pass = 'Vui lòng nhập vào trường này!!'
                this.check = false;
            }else{
                this.error.pass = ''
            }
            if(!this.data.cfPass){
                this.error.cfPass = 'Vui lòng nhập vào trường này!!'
                this.check = false;
            }else if (this.data.cfPass !== this.data.pass) {
                this.error.cfPass = 'Mật khẩu chưa trùng khớp!!'
                this.check = false;
            }else{
                this.error.cfPass = ''
                this.check = true;
            }
            if (this.check == true) {
                alert('Đăng nhập thành công')
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .container{
        float: left;
        text-align: left;
        padding: 10px;
        width: 400px;
        form{
            .sub{
                width: 60px;
                color: black;
                text-align: center;
                height: 30px;
                background-color: #ccc;
                cursor: pointer;
                padding: 10px;
                line-height: 30px;
                border-radius: 5px;
            }
            span{
                color: red;
            }
            p{
                color: red;
            }
            input{
                width: 200px;
                height: 20px;
                float: right;
            }
            div{
                height: 70px;
            }
        }
    }
</style>