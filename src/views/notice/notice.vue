<template>
    <div class="blue-top-bg" style="margin-top: -45px;">
        <div class="bg-blue-band" style="min-height: 300px">
            <!--            style="background-color: white;margin: 0 20px;"-->
            <div class="info-band">
                <div class="name-band">
                    <div class="name">{{xm}}</div>
                    <div class="notice">欢迎你，请完成填写！</div>
                </div>
                <img class="potrait" src="@/assets/img/user1.png" alt="">
            </div>
            <!--<div class="notice">-->
            <!--<p><span style="color: red;">*</span>注意事项</p>-->
            <!--<p v-html="text"></p>-->
            <!--</div>-->
            <div class="pdf-header1 fw900">
                大学安全知识第一篇——防火、防盗、防骗
            </div>
            <div class="paragraph paragraph-color" style="margin-bottom: 200px;">
                <div class="subTitle">防火篇</div>
                <div>
                    火灾是威胁人类安全的重要灾害。大学校园里，也是威胁广大师生生命财产安全的重要因素；校园火灾的发生，不仅给许多家庭带来不幸，使大量的社会财富化为灰烬，而且还会严重影响学校教学、科研的正常运行。因此，做好校园消防工作，为更好的保护国有财产和广大师生的生命财产安全，预防和减少火灾事故，特别是遏制恶性火灾事故的发生，具有十分重要的意义。
                </div>
                <div>
                    遇到火灾时；千万不要慌张，选择最近的逃生出口，并且要弯腰，匍匐等用低姿势撤离，遇有浓烟烈火时，必须把自己的衣服淋湿，再用湿毛巾捂住口鼻撤离，视线不清时，用手摸墙壁徐徐撤离，总之要及时逃生，不能躲，在楼上时要往下走，因为火是往上窜的，但不要盲目跳楼，应尽量等待救援。在等待时，手里拿手电或金属敲打发出声音。跳楼时要选择沙地、泥地或把棉被先扔在地上，拿着被、衣往下跳，这样可以减小冲击力，使脚先落地，也可用绳索自救，滑下去或沿着落水管、电缆线滑下去，只能在室内时可关死门，用湿布堵封，开着窗，用水泼门，冲进门救火时要摸下金属手把，再决定是否可进去救，从门缝看内、外情况（因为会回火，有了空气就会一下子燃烧起来）。
                </div>
                <div>人身上着火后应注意以下几点：</div>
                <div>1、不能奔跑，就地打滚。</div>
                <div>2、可迅速将着火的衣服撕裂脱下。</div>
                <div>3、附近有河水池之类可跳入浅水中。</div>
                <div>4、往身上浇水</div>
                <div class="subTitle">防盗篇</div>
                <div>随着经济的不断发展，当代大学生手中的零用钱越来越多，手机、数码相机、笔记本电脑等一应俱全。这就使社会上不法分子把目光盯住高校,一些师生又不按规定保管公、私财物，使犯罪分子作案易于得手。预防和打击校园盗窃是每个在校学生应尽的责任和义务。增强防盗意识，了解校园内盗窃犯罪的基本情况、规律和特点，掌握防盗的基本常识，是做好防盗、保证安全的基础。</div>
                <div>1．大学校园中发生的盗窃方式有哪几种？</div>
                <div>(1)顺手牵羊：作案分子趁无人或同学不备将放在桌、床等处的钱物信手拈来占为已有。</div>
                <div>(2)窗外钓鱼：作案人用竹竿等工具在窗外将室内他人的物品钩走。</div>
                <div>(3)翻窗入室：作案人翻越没有牢固防范设施的窗户、气窗等入室行窃。</div>
                <div>(4)以推销物品的形式踩点，然后进行偷窃。</div>
                <div>(5)以认老乡形式或困难求助为名窃去银行卡或饭卡密码，取走银行的存款或饭卡的钱。</div>
                <div>2．基本的防盗方法有哪几种？</div>
                <div>(1)贵重物品不用时最好锁在抽屉、柜子(箱子)里或寄存它处。</div>
                <div>(2)饭卡要随身携带，手机拍照保存卡号，丢失后持身份证立即挂失并补办。</div>
                <div>(3)注意保管好自己的钥匙，不要轻易借给他人，防止钥匙失控。</div>
                <div>(4)最后离开宿舍的同学，要关好窗户锁好门，千万不能怕麻烦。</div>
                <div>(5)对形迹可疑的陌生人要提高警惕，留心观察,必要时可拨打保卫处报警电话：88602110。</div>
                <div>(6)晚上休息或假期不在宿舍时，一定要关好门窗，不将贵重物品放于靠窗前的桌上。</div>
                <div class="subTitle">防骗篇</div>
                <div>一些大学生虽然文化知识高，但因踏入社会较晚，社会经验不足，缺乏安全防范意识，法制观念淡薄，从而导致一些案件的发生。据统计表明：发生在大学生中上当受骗案件占学生中发生治安案件的75%以上。而这些案件绝大多数是由于大学生自身安全防范意识淡薄，思想麻痹、财物保管不当，轻信他人，交友不慎等发生的案件，有些造成学生的财产损失，有些甚至危及学生的生命安全。</div>
                <div>1、针对大学生有哪些常见骗术?</div>
                <div>(1)通过上网聊天交友，取得信任后，编造谎言进行诈骗；</div>
                <div>(2)假称自己发生意外，利用同学的同情心理伺机进行诈骗；</div>
                <div>(3)以恋爱为名进行诈骗；</div>
                <div>(4)编造学生在学校受到意外伤害，对学生家长及亲属实施诈骗；</div>
                <div>(5)冒充学校工作人员诈骗学生；</div>
                <div>(6)利用手机发短信息中奖诈骗；</div>
                <div>(7)非法集资诈骗。</div>
                <div>2、预防诈骗的措施有哪些？</div>
                <div>(1)提高防范意识，学会自我保护。学生要积极参加学校组织的法制和安全防范教育活动，多知道、多了解、多掌握一些防范知识，这对于自己有百利而无一害。</div>
                <div>(2)在日常生活中，要做到不贪图便宜、不谋取私利；要提高警惕性，不能轻信花言巧语；不要把自己的家庭地址等情况随便告诉陌生人，以免上当受骗；发现可疑人员要及时报告；上当受骗后更要及时报案、大胆揭发，使犯罪分子受到应有的法律制裁。</div>
                <div>(3)交友谨慎，避免以感情代替理智。对于熟人或朋友介绍的人，要学会“听其言，查其色，辨其行”。</div>
                <div>(4)同学之间要相互沟通、相互帮助。有些同学习惯于把个人之间的交往看作是个人隐私，一旦上当受骗后，无法查处。有些交往关系，在自己认为适合的范围内适当透露或公开，这也是安全的需要。</div>
                <div>温馨提示：保卫处提醒广大师生员工，保管好自己的财物，发现形迹可疑人员及物品被盗、被骗情况请立即拨打校园24小时报警电话88602110。黄金派出所报警电话：88103110.</div>
            </div>
        </div>
        <div class="fixed-bottom">
            <div class="pad20 read">
                <van-checkbox v-model="radio" checked-color="#06BEBD">我已认真阅读上述信息</van-checkbox>
            </div>
            <div class="btn-contain">
                <van-button plain type="danger" size="large" hairline @click="logout">
                    上面不是我的信息
                </van-button>
                <van-button type="info" :disabled="!radio" size="large" class="button-bg" @click="updateRead()">
                    开始报到
                </van-button>
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
    /*
    1、从cookie中读取用户信息
    2、点击开始报道，请求接口，标识已读，跳转到desk
     */
    import goBack from '@/components/goBack'

    export default {
        name: "desk",
        data() {
            return {
                xm: "",
                title: '自助迎新',
                radio: false,
                name: '',
                photo: '',
                text: ''
            }
        },
        components: {goBack},
        methods: {
            init_name() {
                this.xm = this.$store.state.stdInfo.xm
            },
            getText() {
                this.$ajax.post('/notice').then(res => {
                    this.text = res.data.data.configvalue
                })
            },
            updateRead() {
                this.$ajax.post('/update_read_status').then(res => {
                    if (res.data.errcode == 0) {
                        this.$toast(res.data.errmsg)
                        this.$router.push('/desk')
                    } else {
                        this.$toast(res.data.errmsg)
                    }
                })
            },
            logout() {
                this.$toast("请联系管理员！")
                setTimeout(() => {
                    this.$router.push('/')
                }, 3000)
            }
        },
        mounted() {
            this.getText()
            this.init_name()
        }
    }
</script>

<style scoped type="text/css">
    .read {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(168, 182, 200, 1);
        background-color: white;
    }

    body {
        background: url("../../assets/img/Topbar.png") no-repeat scroll;
        background-size: 100% auto;
    }

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

    .subTitle {
        font-weight: 900;
        text-align: center;
        text-indent: 0 !important;
    }
</style>