<template>
    <div>
        <go-back :title="title"></go-back>
        <div class="pad20">
            <img src="@/assets/img/jzdj.png" alt="" style="width: 100%;height: auto;margin-bottom: 20px;">
            <div class="index-list-div" @click="onShow_way">
                <div class="left-head">交通方式</div>
                <div class="right-content">{{way || '点击选取'}} ›</div>
            </div>
            <div class="index-list-div" @click="onShow_datetime">
                <div class="left-head">到达时间</div>
                <div class="right-content">{{arriveTime || '点击选取'}} ›</div>
            </div>
            <div class="index-list-div" @click="onshow_station">
                <div class="left-head">到达站点</div>
                <div class="right-content">{{station || '点击选取'}} ›</div>
            </div>

            <div class="index-list-div">
                <div class="left-head">同行人数(不含自己)</div>
                <div class="right-content">{{fellow}}</div>

            </div>
            <!--<div style="padding: 30px 16px;">-->
            <!--<van-slider-->
            <!--v-model="fellow"-->
            <!--active-color="#06BEBD"-->
            <!--bar-height="4px"-->
            <!--:max="max"-->
            <!--:min='min'-->
            <!--inactive-color="#A8B6C8">-->
            <!--&lt;!&ndash;                    <div slot="button" class="slider-button">{{ value }}</div>&ndash;&gt;-->
            <!--</van-slider>-->
            <!--</div>-->
            <div style="padding: 30px 16px;">
                <el-slider
                        v-model="fellow"
                        :step="1"
                        :max="max"
                        :min="min"
                        show-stops>
                </el-slider>
            </div>
        </div>
        <!--<div class="info">-->
        <!--<div>温馨提示</div>-->
        <!--<div>1.缴纳学杂费前先开通建设银行网银。</div>-->
        <!--<div>2.请按照页面显示的步骤先后完成报到。</div>-->
        <!--</div>-->
        <div class="btn-contain">
            <van-button type="info" size="large" class="button-bg" @click="submit">
                提交
            </van-button>
        </div>
        <!--        交通方式-->
        <van-popup v-model="show_way" position="bottom" overlay>
            <van-picker
                    show-toolbar
                    title="交通方式"
                    :columns="ways"
                    @confirm="confirm_way"
                    @cancel="cancel_way"
            />
        </van-popup>
        <!--到达时间-->
        <van-popup v-model="show_time" position="bottom" overlay>
            <van-datetime-picker
                    type="datetime"
                    title="到达时间"
                    @confirm="confirm_datetime"
                    @cancel="cancel_datetime"
                    @change="formatTime"
                    :min-date="minDate"
                    :max-date="maxDate"
            />
        </van-popup>
        <!--        到达站点-->
        <van-popup v-model="show_station" position="bottom" overlay>
            <van-picker
                    show-toolbar
                    title="达到站点"
                    :columns="stations"
                    @confirm="confirm_station"
                    @cancel="cancel_station"
            />
        </van-popup>
    </div>
</template>

<script>
    /**
     * @author Xus
     * @date 2019/5/6
     * @Description: 抵校登记
     */
    import goBack from '@/components/goBack'
    import {Actionsheet, Slider, Picker, Popup} from 'vant'

    export default {
        name: "regist",
        data() {
            return {
                arrive_info: "",//
                show_way: false,//交通方式
                ways: [],//交通方式选项列表
                way: "",//当前选中的交通方式
                arriveTime: '',//到达时间
                show_time: false,
                stations: [],//到达地点列表
                station: '',
                show_station: false,
                fellow: 0,//同行人数
                max: 10,
                min: 0,
                title: '接站登记',
                minDate: new Date(2019, 7, 20, 0, 0),
                maxDate: new Date(2019, 8, 30, 23, 59),
                // chooseList: [//缓交方式
                //     {name: '国家助学贷款'},
                //     {name: '生源地贷款'},
                //     {name: '其他'}
                // ],
                // banList: [
                //     {name: '招商银行', id: ''},
                //     {name: '建设银行', id: ''},
                //     {name: '中国银行', id: ''}
                // ],
                // show: false,//控制缓交方式actionsheet展示与否
                // show_bank: false,//控制银行列表展示与否
                // currentChoose: {},//当前选中的缓交方式
                // currentChoose_bank: {},//当前选中的银行
                // code: '',//验证码
                // reason: "",//原因
                // heightRange: {maxHeight: 500, minHeight: 150}
            }
        },
        components: {
            goBack,
            [Actionsheet.name]: Actionsheet,
            [Slider.name]: Slider,
            [Picker.name]: Picker,
            [Popup.name]: Popup
        },
        methods: {
            onShow_way() {
                this.show_way = true
            },
            confirm_way(value) {
                this.way = value
                this.show_way = false
            },
            cancel_way() {
                this.show_way = false
            },
            onShow_datetime() {
                this.show_time = true
            },
            confirm_datetime() {
                this.show_time = false
            },
            cancel_datetime() {
                this.show_time = false
            },
            onshow_station() {
                this.show_station = true
            },
            confirm_station(value) {
                this.station = value
                this.show_station = false
            },
            cancel_station() {
                this.show_station = false
            },
            getTime() {
                let t = new Date()
                let year = t.getFullYear();
                let month = t.getMonth() + 1;
                let day = t.getDate();
                let hour = t.getHours();
                let minute = t.getMinutes();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (day >= 0 && day <= 9) {
                    day = "0" + day;
                }
                if (hour >= 0 && hour <= 9) {
                    hour = "0" + hour;
                }
                if (minute >= 0 && minute <= 9) {
                    minute = "0" + minute;
                }
                let dateTime = `${year}-${month}-${day} ${hour}:${minute}`
                console.log(dateTime)
                this.arriveTime = dateTime;
            },
            getInfo() {//获取学生到校信息
                this.$ajax.get('/arrive_api/arrive_info').then(res => {
                    this.arrive_info = res.data.data
                    this.$toast.clear()
                    if (this.arrive_info) {
                        this.station = this.arrive_info.ddz
                        this.arriveTime = this.arrive_info.ddrq
                        this.way = this.arrive_info.jtfs
                        this.fellow = this.arrive_info.txrs
                    }
                })
            },
            getWay() {//获取交通方式
                this.$ajax.get('/arrive_api/transports').then(res => {
                    let way = []
                    for (let i = 0; i < res.data.data.length; i++) {
                        way.push(res.data.data[i].codeitemname)
                    }
                    this.ways = way
                    this.$toast.clear()
                })
            },
            getStation() {//获取车站信息
                this.$ajax.get('/arrive_api/stations').then(res => {
                    let stations = []
                    for (let i = 0; i < res.data.data.length; i++) {
                        stations.push(res.data.data[i].codeitemname)
                    }
                    this.stations = stations
                    this.$toast.clear()
                })
            },
            formatTime(e) {
                let endTimeArr = e.getValues();//["2019", "03", "22", "17", "28"]
                this.arriveTime = `${endTimeArr[0]}-${endTimeArr[1]}-${endTimeArr[2]} ${endTimeArr[3]}:${endTimeArr[4]}`
            },
            submit() {
                if (this.station && this.arriveTime && this.way) {
                    this.$ajax.post('/arrive_api/save', {
                        arriveStation: this.station,
                        arriveTime: this.arriveTime,
                        number: this.fellow,
                        transport: this.way
                    }).then(res => {
                        this.$toast(res.data.data)
                        if (res.data.errcode == 0) {
                            setTimeout(() => {
                                this.$router.push('/desk')
                            }, 3000)
                        }
                    })
                } else {
                    this.$toast('请完整填写表单！')
                }
            }
        },
        mounted() {
            this.getTime()
            this.getInfo()
            this.getWay()
            this.getStation()
        }
    }
</script>

<style scoped>
    /*
      覆盖vant原生样式
       */
    .van-cell {
        padding: 24px 16px !important;
        font-size: 16px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    }

    input {
        text-align: right !important;
    }


</style>