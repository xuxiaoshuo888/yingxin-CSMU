<template>
    <div>
        <go-back :title="title" :bg="bg"></go-back>
        <div style="padding: 40px 10px 0;">
            <div class="pdf-header1 fw900">
                新生现场报到流程
            </div>
            <div class="paragraph paragraph-color">
                <div>院（系）报到处领取报到单―→收费处缴费―→办理餐卡、水卡―→辅导员处报到、领取寝室钥匙和交纳保险。
                </div>
                <div class="fw900">具体流程：</div>
                <div>1、新生到自己所在院（系）报到处报到，领取报到单（办理了生源地助学贷款的家庭经济困难学生到生源地助学贷款回执录入处办理相关手续）。</div>
                <div>2、新生领取报到单后到各收费窗口缴费（办理了生源地助学贷款的学生须主动出示助学贷款受理证明）。</div>
                <div>3、到指定地点办理餐卡、水卡。</div>
                <div>4、到自己所在班级辅导员处报到、领取寝室钥匙和交纳保险。</div>
            </div>
        </div>
        <div class="btn-contain">
            <van-button type="info" size="large" :disabled="btnDis" class="button-bg" @click="done">
                完成注册 <span v-if="btnDis">{{m}}s</span>
            </van-button>
        </div>
    </div>
</template>

<script>
    import goBack from '@/components/goBack'

    export default {
        name: "done",
        components: {goBack},
        data() {
            return {
                bg: 'blue',
                title: '新生现场报到流程',
                btnDis: true,//按钮是否可用
                m: 30
            }
        },
        mounted() {
            console.log(this.$route.query)
            this.count()
        },
        methods: {
            count() {
                let x = setInterval(() => {
                    if (this.m === 0) {
                        clearInterval(x)
                        this.btnDis = false
                    } else {
                        this.m = this.m - 1
                    }
                }, 1000)
            },
            done() {
                //完成注册
                this.$ajax.post('/common_step_api/save_record', {stepId: 'bdd'}).then((res) => {
                    if (res.data.errcode == '0') {
                        this.$toast({
                            type: 'success',
                            message: '完成注册'
                        })
                        setTimeout(() => {
                            this.$router.push('/desk')
                        }, 3000)
                    } else {
                        this.$toast({
                            type: 'fail',
                            message: res.data.errmsg
                        })
                    }
                })

            },
        }
    }
</script>

<style scoped lang="css">
    .pdf-header1 {
        font-size: 22px;
        color: #000;
        text-align: center;
        margin-bottom: 5px;
    }

    .fw900 {
        font-weight: 900;
    }

    .pdf-header2 {
        font-size: 20px;
        color: #000;
        text-align: center;
    }

    .paragraph {
        margin-top: 20px;
        margin-bottom: 50px;
        padding: 10px;

    }

    .paragraph-color {
        background-color: rgba(238, 238, 238, 0.5);
        border: 1px solid #bfbfbf;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
    }

    .paragraph > div {
        text-indent: 34px;
        line-height: 1.8;
    }
</style>