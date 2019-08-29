<template>
    <div>
        <go-back :title="title" :bg="bg"></go-back>
        <div class="blue-top-bg">
            <div class="band">
                <div class="title1">当前选择</div>
                <div class="title2">
                    <img src="@/assets/img/2.png" alt="">&nbsp;&nbsp;&nbsp;<span>{{room || '暂无数据'}}</span>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="indent0">温馨提示</div>
            <div>到校后持校园一卡通和一寸照片（一张）到所在楼栋办理登记入住手续。填写文明住宿公约，录入一卡通信息，领取宿舍钥匙。住宿服务电话：027-67886401</div>
        </div>
        <!--<div class="fixed-bottom">-->
        <!--<div class="btn-contain">-->
        <!--<van-button type="default" plain size="large" @click="toRoomList">-->
        <!--重新选择-->
        <!--</van-button>-->
        <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    /**
     * @author Xus
     * @date 2019/5/6
     * @Description: 选宿舍
     */
    import goBack from '@/components/goBack'

    export default {
        name: "room",
        components: {goBack},
        data() {
            return {
                bg: 'blue',
                title: '选择宿舍',
                room: '',//当前宿舍信息
            }
        },
        methods: {
            toRoomList() {
                this.$router.push('roomList')
            },
            //获取学生的住宿信息
            getStep() {
                let xh = this.$store.getters.stdInfo.xh;
                let sfzh = this.$store.getters.stdInfo.sfzh;
                let mm = sfzh.toUpperCase().substring(sfzh.length - 6)
                this.$ajax.post('/dorm_api/room_info',
                    {
                        username: xh,
                        card: mm
                    }).then(res => {
                    if (res.data.errcode == '0') {
                        this.room = res.data.data.fullname
                    } else {
                        this.$Toast(res.data.errmsg)
                    }
                }).catch(err => {
                    this.$toast(JSON.stringify(err))
                })
            },
            comfirm() {
                this.$ajax.post('/dorm_api/save_record', {stepId: 'room'})
            }
        },
        mounted() {
            this.getStep()
            this.comfirm()
        }
    }
</script>

<style scoped type="text/css">
    .band {
        box-shadow: 0px 0px 40px 0px rgba(62, 107, 103, 0.16);
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        padding: 20px;
        min-height: 300px;
        background-color: rgba(255, 255, 255, 1);
        background: url("../../assets/img/bg.png") no-repeat scroll bottom;
        background-size: 100% auto;
    }
</style>