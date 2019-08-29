<template>
    <div>
        <go-back :title="title"></go-back>
        <div class="pad20">
            <div class="title1">
                服装信息
            </div>
            <div class="fee-content" v-for="(item,index) in kindsList" :key="index">
                <div class="title2">
                    {{item.kindname}}
                </div>
                <div class="fee-contain border-top">
                    <van-radio-group v-model="saveList[index]" @change="choose">
                        <div class="fee-item" v-for="(i,index) in item.itemList" :key="index">
                            <div class="fee-title">
                                <van-radio :name="`${i.kindid}:${i.itemid}`" checked-color="#06BEBD">{{i.itemname}}
                                </van-radio>
                            </div>
                            <!--<div class="fee-body">￥10086.00</div>-->
                        </div>
                    </van-radio-group>
                </div>
            </div>
            <!--<div class="fee-content">-->
            <!--<div class="title2">-->
            <!--收费信息-->
            <!--</div>-->
            <!--<div class="fee-contain border-top">-->
            <!--<div style="padding: 30px 0;">-->
            <!--<van-slider-->
            <!--v-model="value"-->
            <!--active-color="#06BEBD"-->
            <!--bar-height="4px"-->
            <!--:max="max"-->
            <!--:min='min'-->
            <!--inactive-color="#A8B6C8">-->
            <!--<div slot="button" class="slider-button">{{ value }}</div>-->
            <!--</van-slider>-->
            <!--</div>-->
            <!--<div>{{value}} 码</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="fee-content">-->
            <!--<div class="title2">-->
            <!--收费信息-->
            <!--</div>-->
            <!--<div class="fee-contain border-top">-->
            <!--<div class="fee-item" v-for="i in 2">-->
            <!--<div class="fee-title">学杂费</div>-->
            <!--<div class="fee-body">￥10086.00</div>-->
            <!--</div>-->
            <!--<div class="fee-item fee-total">-->
            <!--<div class="fee-title" style="font-size: 16px">学杂费</div>-->
            <!--<div class="fee-body color-theme" style="font-size: 24px">￥10086.00</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
        </div>
        <!--<div class="info">-->
        <!--<div>温馨提示</div>-->
        <!--<div>1.缴纳学杂费前先开通建设银行网银。</div>-->
        <!--<div>2.请按照页面显示的步骤先后完成报到。</div>-->
        <!--<div>3.缴纳学杂费前先开通建设银行网银。缴纳学杂费前先开通建设银行网银。缴纳学杂费前先开通建设银行网银。缴纳学杂费前先开通建设银行网银。</div>-->
        <!--<div>4.请按照页面显示的步骤先后完成报到。请按照页面显示的步骤先后完成报到。请按照页面显示的步骤先后完成报到。请按照页面显示的步骤先后完成报到。</div>-->
        <!--</div>-->
        <div class="btn-contain">
            <van-button type="info" size="large" class="button-bg" @click="saveInfo">
                提交
            </van-button>
        </div>
    </div>
</template>

<script>
    import goBack from '@/components/goBack'

    export default {
        name: "clothes",
        data() {
            return {
                title: '选择服装',
                kindsList: [],//服装种类列表
                saveList: [],//保存的字符串数组
                radio: 1,
                value: 33,
                max: 100,
                min: 0,
            }
        },
        components: {goBack},
        methods: {
            getKinds() {//获取服装类型
                this.$ajax.get('/clothes_api/kinds').then(res => {
                    //返回的kindtype  1、单选   2、多选  3、 填空  4、数字
                    this.kindsList = res.data.data;
                    let emptyList = [];
                    this.kindsList.forEach((item) => {
                        emptyList.push(`${item.kindid}:${item.answer}`)
                        this.saveList = emptyList;
                    })
                })
            },
            saveInfo() {//保存信息
                //验证必填
                this.saveList.forEach((item) => {
                    console.log(item)
                    if (!item) {
                        return
                    }
                })
                if (this.kindsList.length === this.saveList.length) {
                    for (let i = 0; i < this.saveList.length; i++) {
                        if (this.saveList[i]) {//必填了

                        } else {
                            this.$toast('请填写完整信息！')
                            return
                        }
                    }
                } else {
                    this.$toast('请填写完整信息！')
                    return
                }
                let string = JSON.stringify(this.saveList);
                this.$ajax.post('/clothes_api/save', {
                    jsonArray: string
                }).then(res => {
                    this.$toast(res.data.errmsg)
                    if (res.data.errcode == 0) {//清空saveList
                        setTimeout(() => {
                            this.saveList = []
                            this.$router.push('/desk')
                        }, 3000)
                    }
                })
            },
            choose(e) {//选择框
                console.log(e)
                console.log(this.saveList)
            },
        },
        mounted() {
            this.getKinds();//拉信息+回选
        }
    }
</script>

<style scoped>
    .title2 {
        padding: 10px;
    }
</style>