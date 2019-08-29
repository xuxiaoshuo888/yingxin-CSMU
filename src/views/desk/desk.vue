<template>
    <div class="blue-top-bg">
        <go-back :title="title" :bg="bg"></go-back>
        <div class="bg-blue-band">
            <div class="info-band">
                <div class="name-band">
                    <div class="name">{{xm}}</div>
                    <div class="notice">欢迎你，请完成填写！</div>
                </div>
                <img class="potrait" src="@/assets/img/user1.png" alt="">
            </div>
            <div class="index-list-div" @click="toDetail(item.stepid,item.status,item.planid)" v-for="(item,index) in planList" :key="index">
                <div>{{item.stepname}}
                    <!--<van-icon class="state-icon" :name="item.flag ? 'checked' : 'info'"></van-icon>-->
                    <span v-if="item.ismust == '1'">
                        <img class="state-icon" v-if="item.status === '1'" src="@/assets/img/right.png" alt="">
                        <img class="state-icon" v-else src="@/assets/img/warn.png" alt="">
                    </span>
                </div>
                <img v-if="index == 0" src="../../assets/img/1.png">
                <img v-else-if="index == 1" src="../../assets/img/8.png">
                <img v-else-if="index == 2" src="../../assets/img/3.png">
                <img v-else-if="index == 3" src="../../assets/img/4.png">
                <img v-else-if="index == 4" src="../../assets/img/5.png">
                <img v-else-if="index == 5" src="../../assets/img/6.png">
                <img v-else-if="index == 6" src="../../assets/img/7.png">
                <img v-else-if="index == 7" src="../../assets/img/8.png">
                <img v-else-if="index == 8" src="../../assets/img/9.png">
                <img v-else src="../../assets/img/1.png">
            </div>
        </div>
    </div>
</template>
<script>
    /**
     * @author Xus
     * @date 2019/5/6
     * @Description: 首页
     */
    import goBack from '@/components/goBack'

    export default {
        name: "desk",
        data() {
            return {
                xm: "",
                bg: 'blue',
                title: '自助迎新',
                list: [],
                planList: []
            }
        },
        components: {goBack},
        methods: {
            getStdInfo() {//获取学生信息
                this.$ajax.post('/student/find').then(res => {
                    console.log(res.data)
                })
            },
            toDetail(stepid,status,planid) {//通过stepid进行跳转
                switch (stepid) {
                    case 'base'://基本信息
                        this.$router.push('/person');
                        break;
                    case 'hcyhk'://火车优惠卡
                        this.$router.push('/hcyhk');
                        break;
                    case 'bdxx'://抵校登记
                        this.$router.push('/regist');
                        break;
                    case 'room'://选宿舍
                        this.$router.push({path: '/room', query: {}});
                        break;
                    case 'pay'://费用信息
                        this.$router.push('/fees');
                        break;
                    case 'green'://绿色通道
                        this.$router.push('/greenPath');
                        break;
                    case 'jxfff'://军训服选择
                        this.$router.push('/clothes');
                        break;
                    case 'dept'://院系报道
                        this.$router.push('/');
                        break;
                    case 'jffs'://缴费方式
                        this.$router.push('/');
                        break;
                    case 'aqjy'://安全教育
                        this.$router.push('/safe');
                        break;
                    case 'sjxh'://自助选号
                        this.$router.push({path:'/phone',query:{planid:planid,stepid:stepid}});
                        break;
                    case 'bdd'://完成注册
                        if(status === '0'){//未完成
                            this.$router.push('/done');
                        }else{//已完成
                            this.$toast('你已完成该环节！')
                        }
                        break;
                }
            },
            getHj() {//获取环节信息
                // console.log(this.$store.state.stdInfo)
                this.xm = this.$store.state.stdInfo.xm
                let planId = this.$store.getters.stdInfo.planid
                let studentId = this.$store.getters.stdInfo.studentid
                this.$ajax.get('/plan_step_api/steps', {
                    params: {
                        planId: planId,
                        studentId: studentId
                    }
                }).then(res => {
                    this.$toast.clear()
                    this.planList = res.data.data
                    this.$store.state.planList = res.data.data
                })
            },
            getConfig() {//测试
                let id = 'SCHOOL_NAME'
                this.$ajax.get('/help_api/configs/' + id).then(res => {
                    console.log(res.data)
                    this.$toast.clear()
                })
            }
        },
        mounted() {
            // this.getStdInfo()
            this.getHj()
            this.getConfig()
        }
    }
</script>

<style scoped lang="scss">
    /*.blue-top-bg {*/
    /*    background: url("../../assets/img/Topbar.png") no-repeat fixed;*/
    /*    background-size: 100% auto;*/
    /*}*/

</style>