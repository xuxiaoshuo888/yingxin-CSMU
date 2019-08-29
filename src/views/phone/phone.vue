<template>
    <div>
        <go-back :title="title" :bg="bg"></go-back>
        <!--<div style="text-align: center;padding: 20px 0;">-->
        <!--<div style="padding: 20px;">请选择运营商</div>-->
        <!--<el-radio v-model="yys" label="联通" border>联通</el-radio>-->
        <!--<el-radio v-model="yys" label="移动" border>移动</el-radio>-->
        <!--</div>-->
        <div class="fee-content">
            <div class="title2" v-if="selectedP" style="padding: 100px 20px 20px;">
                已选号码：{{selectedP}}
            </div>
            <div v-if="!selectedP">
                <div class="title2" style="padding: 20px;">
                    号码列表：
                </div>
                <div class="fee-contain border-top phone-contain">
                    <div v-for="(item,index) in list" :key="index" style="flex: 1;">
                        <div style="text-align: center;">{{item.kindname}}</div>
                        <van-radio-group v-model="phoneNumber" @change="chooseP">
                            <div class="fee-item" v-for="(i,index) in item.itemList" :key="index">
                                <div class="fee-title">
                                    <van-radio :name="JSON.stringify({itemId:i.itemid,kindId:i.kindid,planId:planid})"
                                               checked-color="#06BEBD">
                                        {{i.itemname}}
                                    </van-radio>
                                </div>
                                <div v-if="item.itemList.length === 0">暂无号码</div>
                            </div>
                        </van-radio-group>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-contain" v-if="!selectedP">
            <van-button type="info" size="large" class="button-bg" @click="done">
                选择号码
            </van-button>
        </div>
    </div>
</template>

<script>
    import goBack from '@/components/goBack'

    export default {
        name: "phone",
        components: {goBack},
        data() {
            return {
                bg: 'blue',
                title: '自助选号',
                planid: '',
                stepid: '',
                list: [],
                m: 0,//号码可选数
                selectedP: '',//拿数据-已选手机号
                phoneNumber: '',//选中的手机号

            }
        },
        mounted() {
            this.planid = this.$route.query.planid;
            this.stepid = this.$route.query.stepid;
            this.getmyNum()
            this.getList()
        },
        methods: {
            getList() {//拿号码列表
                this.$ajax.get('/phone_number_api/kinds', {params: {planId: this.planid}}).then(res => {
                    this.list = res.data.data;

                    //判断 没选号码且号码也没有了，怎么
                    let m = 0;
                    this.list.forEach((item) => {
                        m = m + item.total
                    })
                    this.m = m
                    if (m === 0) {//号码已被选完
                        this.$ajax.post('/common_step_api/save_record', {stepId: this.stepid}).then((res) => {
                            if (res.data.errcode == '0') {
                                this.$router.push('/desk')
                            } else {
                                this.$toast({
                                    type: 'fail',
                                    message: res.data.errmsg
                                })
                            }
                        })
                        this.$toast('号码已被选完！')
                    }

                })
            },
            getmyNum() {
                this.$ajax.get('/phone_number_api/find').then(res => {
                    if (res.data.errcode == 0) {
                        this.selectedP = res.data.data.itemname
                    } else {
                        this.$toast(res.data.errmsg)
                    }
                })
            },
            chooseP(e) {//选择号码
                //e是每个radio的name属性
                console.log(e)
            },
            done() {//完成选号
                this.$ajax.post('/phone_number_api/save', JSON.parse(this.phoneNumber)).then(res => {
                    console.log(res)
                    if (res.data.errcode === 0) {
                        this.$toast('选择成功！')
                        setTimeout(() => {
                            this.$router.push('/desk')
                        }, 3000)
                    } else {
                        this.$toast(res.data.errmsg)
                    }

                })
            }
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
    .phone-contain{
        display: flex;

    }
</style>