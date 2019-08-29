<template>
    <div>
        <go-back :title="title" :bg="bg"></go-back>
        <div style="padding: 40px 10px 0;">
            <div class="pdf-header1 fw900">
                关于2019级家庭经济困难新生资助事宜的温馨提示
            </div>
            <div class="paragraph paragraph-color">
                <div>亲爱的2019级同学：
                </div>
                <div>
                    欢迎你成为长沙医学院的一员。相信你对即将开启的大学生活充满憧憬，懂事的你可能会因为家庭经济困难,担心大学学费和生活费给父母增加经济负担。下面的信息可能对你有所帮助，请你认真阅读了解，并与父母、亲人分享。
                </div>
                <div class="fw900">一、生源地助学贷款
                </div>
                <div>
                    <span class="fw900">1.办理机构：</span>助学贷款是国家帮扶家庭经济困难学生的重要资助措施。如果你的家庭缴纳大学学费和住宿费有困难，可以申请国家助学贷款。
                    <span class="fw900">在我校就读的省内外家庭经济困难学生，需要办理国家助学贷款的，可向户籍所在县（市、区）学生资助管理机构（一般为教育局内设机构）申请办理生源地助学贷款。我校已不再开办高校（校园地）助学贷款。</span>
                </div>
                <div><span class="fw900">2.学校账户信息：</span>如果助学贷款经办银行要求提供长沙医学院的账户信息，请按以下内容提供。
                </div>
                <div>账户名：长沙医学院
                </div>
                <div>开户行：交通银行长沙望城支行</div>
                <div>账户：<span class="fw900">431899991010006666642</span></div>
                <div>
                    <span class="fw900">3.学费缴纳：</span>如果你办理了生源地助学贷款的同学，请在缴纳学费时主动出示助学贷款办理或受理证明，只需缴纳应缴纳费用总金额减去贷款金额之后的部分（汇款交费亦同）。助学贷款属于学费缓交，待经办银行将款项划入学校账户之后（助学贷款到账时间一般为10-11月），用于抵扣缓交的学费。黑龙江省哈尔滨银行生源地助学贷款、江西农信社生源地助学贷款，助学贷款直接划入学生办理的银行卡上，请同学们在收到助学贷款后，及时主动到学校财务处缴纳欠缴的学费。
                </div>
                <div>
                    <span class="fw900">4.回执录入：</span>如果你办理了国家开发银行生源地信用助学贷款，在开学报到时须将加盖当地资助中心公章的《国家开发银行生源地信用助学贷款受理证明》上半部分交校学生资助管理中心（报到现场绿色通道处）进行回执录入。如果中途需放弃办理助学贷款，应主动告知学校。未交回执，导致回执未录入的，助学贷款将无法办理。如助学贷款经办银行为其他银行的，请同学们根据当地学生资助管理机构的要求在规定的时间内办理好相应手续。
                </div>
                <div class="fw900">二、家庭经济困难学生认定</div>
                <div>
                    家庭经济困难学生认定工作于每年9月集中进行。经过学校认定的家庭经济困难学生，可申请各类助学金、奖学金（大二及其以上年级），参与勤工助学等，以多种方式缓解经济压力。有意申请家庭经济困难认定的同学，可提前了解《家庭经济困难学生认定申请表》（样表）需要填报的内容，准备好相关证明材料，到校后根据学校安排如实填报提交，并将你的家庭经济情况如实告知辅导员。
                </div>
                <div>以下是认定的主要参考因素，可根据自身真实家庭经济状况，提供支撑材料：</div>
                <div>
                    1.建档立卡贫困家庭学生、最低生活保障家庭学生（包含农村低保和城镇低保家庭）、特困供养学生、孤儿、烈士子女、建档立卡困难职工子女、家庭经济困难残疾学生（学生本人残疾）和家庭经济困难残疾人子女（学生父母一方或者双方残疾）等，提供相关证件材料复印件，必要时，配合提供证件/证明原件。
                </div>
                <div>
                    2.影响家庭经济状况的其他重要致困原因，提供相应的佐证材料。如家庭遭受重大自然灾害、重大突发意外事件，学生本人或者其主要家庭成员长期患病尤其是重大疾病，需要承担巨额医疗费用等导致家庭经济特别困难的。
                </div>
                <div>3.其他因素：家庭收入水平，家庭劳动力数量、劳动能力，职业状况（失业、下岗等），家庭负担（赡养负担、教育负担尤其是因学致困的），家庭负债（因学、因病负债等）等。根据实际情况提供佐证材料。</div>
                <div>诚信是立身之本。各位同学应如实填写家庭经济困难学生认定申请表，提供能够真实反映家庭经济状况的证明材料。填报虚假信息、提供虚假证明材料的，一经发现，会被取消受助资格，留下个人诚信不良记录。</div>
                <div>祝愿每一位新同学都能顺利开启美好的大学时代！</div>
                <div style="text-align: right;margin-top: 30px">学生资助管理中心</div>
                <div style="text-align: right">2019年8月2日</div>

            </div>


        </div>
    </div>
</template>

<script>
    import goBack from '@/components/goBack'

    export default {
        name: "pdf",
        components: {goBack},
        data() {
            return {
                bg: 'blue',
                title: '绿色通道',
                fileName: ''
            }
        },
        mounted() {
            console.log(this.$route.query)
            this.fileName = this.$route.query.fileName
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
    .fw900{
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