<template>
    <div class="contain">
        <go-back :title="title" :bg="bg"></go-back>
        <video controls="" autoplay width="100%" height="auto" name="media">
            <source src="http://202.114.207.128/wx/img/aqjy.mp4" type="video/mp4">
            您的浏览器不支持H5播放器
        </video>
        <div class="btn-contain">
            <van-button type="info" :disabled="time !== 0" size="large" class="button-bg" @click="comfirm">
                <span v-if="time > 0">{{`${time}s`}}</span>
                <span v-else>我已看完视频</span>
            </van-button>
        </div>
    </div>
</template>

<script>
    import goBack from '@/components/goBack'

    export default {
        name: "safe",
        bg: 'bg-blue',
        components: {goBack},
        data() {
            return {
                title: "安全教育",
                bg: 'bg-blue',
                time: 4 * 60
            }
        },
        methods: {
            comfirm() {
                this.$ajax.post('/common_step_api/save_record', {stepId: 'aqjy'}).then((res) => {
                    if (res.data.errcode == '0') {
                        this.$toast({
                            type: 'success',
                            message: res.data.data
                        })
                    } else {
                        this.$toast({
                            type: 'fail',
                            message: res.data.errmsg
                        })
                    }
                })
            }
        },
        mounted() {
            let x = setInterval(() => {
                if (this.time == 0) {
                    clearInterval(x)
                } else {
                    this.time = this.time - 1
                }
            }, 1000)
        }
    }
</script>

<style scoped lang="scss">
    .contain {
        padding: 20px;
        margin: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
    }
</style>