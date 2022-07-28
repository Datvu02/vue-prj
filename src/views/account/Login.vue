<template>
    <div id="container">
        <div class="login">
            <!-- Đăng nhập -->
            <div class="loginTop" v-if="change">
                <img :src="url">
                <div class="loginForm">
                    <div class="inputLogin">
                        <input type="text" placeholder="Email" v-model="email" :class="{ error_format: errorE }">
                        <div class="error" v-if="errorE">
                            <i class="el-icon-warning"></i>
                            {{ errorEMessage }}
                        </div>
                    </div>
                    <div class="inputLogin">
                        <input type="password" placeholder="Mật khẩu" v-model="password" :class="{ error_format: errorPass }">
                        <div class="error" v-if="errorPass">
                            <i class="el-icon-warning"></i>
                            {{ errorPassMessage }}
                        </div>
                    </div>

                    <div class="forget">
                        <button @click="function () {change = false}">Quên mật khẩu?</button>
                    </div>

                    <button class="btn" @click="validate(0)">ĐĂNG NHẬP</button>
                </div>
            </div>
            <!-- Lấy lại mật khẩu -->
            <div class="loginTop" v-else>
                <div class="title">LẤY LẠI MẬT KHẨU</div>
                <div class="description">
                    Bạn vui lòng nhập email đăng nhập để nhận email hướng dẫn lấy lại mật khẩu.
                </div>
                <div class="loginForm">
                    <div class="inputLogin">
                        <input placeholder="Email" v-model="email" :class="{ error_format: errorE }">
                        <div class="error" v-if="errorE">
                            <i class="el-icon-warning"></i>
                            {{ errorEMessage }}
                        </div>
                    </div>
                    <button class="btn" @click="validate(1)">GỬI EMAIL</button>
                </div>
                <div class="return">
                    <button @click="function () {change = true}">
                        Trở về trang đăng nhập
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "loginAcc",
    data() {
        return {
            url: 'https://lh3.googleusercontent.com/uWQE_jIELr_7D0lCEEQnj-UE9Gf4X1sqH-Kwzwen3sVj_SJFpjRpvEbMy14i3kvEyL4w=s170',
            email: '',
            password: '',
            change: true,
            errorE: false,
            errorPass: false,
            errorEMessage: '',
            errorPassMessage: ''
        }
    },
    methods: {
        validate(check) {
            let bool = true;
            if (check === 1) {
                this.password = 123456
            }
            if (this.email === '') {
                this.errorE = true
                this.errorEMessage = 'Email không được để trống!!!'
                bool = false
            }else {
                if (!this.validateEmail(this.email)) {
                    this.errorE = true
                    this.errorEMessage = 'Email sai định dạng!!!'
                    bool = false
                }
            }

            if (this.password === '') {
                this.errorPass = true
                this.errorPassMessage = 'Mật khẩu không được để trống!!!'
                bool = false
            }else {
                if (this.password.length < 7) {
                    this.errorPass = true
                    this.errorPassMessage = 'Mật khẩu phải lớn hơn 6 ký tự!!!'
                    bool = false
                }
            }


            if (bool) {
                if(check === 0) {
                    this.$router.push({ path: '/admin' })

                }else this.sendMail()
                this.email = this.password = ''
            }
        },
        validateEmail: function (email) {
            let data = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return data.test(email);
        },
        sendMail() {
            this.change = true
            this.$message({
                message: 'Gửi email thành công.',
                type: 'success'
            });
        },
    },
    watch: {
        email(value) {
            if (value !== '') {
                this.errorE = false
            }
        },
        password(value) {
            if (value !== '') {
                this.errorPass = false
            }
        }
    }
}
</script>

<style scoped lang="scss">
    #container {
        background-image: linear-gradient(160deg,#057abd,#41cfbf);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        .login {
            width: 100%;
            max-width: 398px;
            background-color: white;
            border-radius: 10px;
            padding: 24px;

            .loginTop {
                img {
                    width: 200px;
                    margin-bottom: 24px;
                }
                .loginForm {
                    .inputLogin {
                        input {
                            width: 94%;
                            border-radius: 4px;
                            font-size: 14px;
                            color: #253036;
                            border: 1px solid #d8e0ea;
                            outline: unset;
                            padding: 18px 12px;
                            margin-bottom: 10px;
                        }
                        .error {
                            margin-top: 8px;
                            color: red;
                            font-size: 12px;
                            text-align: left;

                            i {
                                margin-right: 4px;
                            }
                        }
                    }

                    .forget {
                        button {
                            margin: 8px 0 24px 0;
                            padding: 6px 8px;
                            float: right;
                            background-color: white;
                            border: none;
                            cursor: pointer;
                            color: #0080dd;
                            font-size: 14px;
                        }
                        div {
                            clear: both;
                        }
                    }
                    .btn {
                        width: 100%;
                        color: #fff;
                        font-size: 14px;
                        height: 50px;
                        line-height: 18px;
                        background-color: #0080dd;
                        border-radius: 4px;
                        border: none;
                        cursor: pointer;
                    }
                }
                .title {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 40px;
                }
                .description {
                    text-align: left;
                    font-size: 14px;
                    margin-bottom: 8px;
                    line-height: 20px;
                }
                .return {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 8px;
                    padding-top: 24px;

                    button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 8px;
                        font-size: 14px;
                        color: #0080dd;
                        border: none;
                        background-color: white;
                        cursor: pointer;

                        i {
                            font-size: 20px;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
</style>