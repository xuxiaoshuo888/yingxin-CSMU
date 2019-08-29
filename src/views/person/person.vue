<template>
    <div>
        <go-back :title="title"></go-back>
        <el-tabs v-model="activeName" @tab-click="handleClick" :before-leave="beforeLeave">
            <el-tab-pane label="基本信息" name="1">
        <span slot="label">
          基本信息
        </span>
                <el-card>
                    <el-form ref="form" :model="Info" label-width="100px" size="small">
                        <el-form-item label="姓名:">
                            <div class="item-content">{{Info.xm || '暂无数据'}}</div>
                        </el-form-item>
                        <el-form-item label="身份证号:">
                            <div class="item-content">{{Info.sfzh || '暂无数据'}}</div>
                        </el-form-item>
                        <el-form-item label="考生号:">
                            <div class="item-content">{{Info.ksh || '暂无数据'}}</div>
                        </el-form-item>
                        <el-form-item label="学号:">
                            <div class="item-content">{{Info.xh || '暂无数据'}}</div>
                        </el-form-item>
                        <el-form-item label="性别:">
                            <div class="item-content">{{Info.xb || '暂无数据'}}</div>
                        </el-form-item>
                        <el-form-item label="民族:">
                            <div class="item-content">{{Info.mz || '暂无数据'}}</div>
                        </el-form-item>
                        <el-form-item label="学院:">
                            <div class="item-content">{{Info.deptname || '暂无数据'}}</div>
                        </el-form-item>
                        <el-form-item label="专业:">
                            <div class="item-content">{{Info.majorname || '暂无数据'}}</div>
                        </el-form-item>
                        <el-form-item label="班级:">
                            <div class="item-content">{{Info.classname || '暂无数据'}}</div>
                        </el-form-item>
                        <el-form-item label="政治面貌:">
                            <div class="item-content">{{Info.zzmm || '暂无数据'}}</div>
                        </el-form-item>
                        <el-form-item label="出生年月:">
                            <div class="item-content">{{Info.csrq || '暂无数据'}}</div>
                        </el-form-item>
                        <el-form-item label="入学年月:">
                            <div class="item-content">{{Info.rxny || '暂无数据'}}</div>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="辅导员信息" name="2">
                <el-card>
                    <el-form ref="form" :model="Info" size="mini">
                        <div v-if="Info.headmaster && Info.headmaster.length > 0">
                            <el-form-item label="" v-for="(item,index) in Info.headmaster" :key="index">
                                <div class="item-content" v-if="item.lx == 'bzr'">
                                    <div class="item-content-div">
                                        <div>
                                            <van-icon name="manager-o" style="vertical-align: middle;"/>
                                            辅导员：
                                        </div>
                                        <div>{{item.xm}}</div>
                                    </div>
                                    <div class="item-content-div">
                                        <div>
                                            <van-icon name="phone-o" style="vertical-align: middle;"/>
                                            联系电话：
                                        </div>
                                        <div>{{item.tel}}</div>
                                    </div>
                                    <div class="item-content-div">
                                        <div>
                                            <van-icon name="friends-o" style="vertical-align: middle;"/>
                                            学院官方QQ群：
                                        </div>
                                        <div>
                                            {{item.qqteam || '暂无数据'}}
                                        </div>
                                    </div>
                                </div>
                            </el-form-item>
                        </div>
                        <div v-else-if="(!Info.headmaster) || (Info.headmaster.length == 0)">
                            <el-form-item label="辅导员:" v-for="(item,index) in Info.headmaster" :key="index">
                                <div class="item-content" v-if="item.lx == 'bzr'">暂无数据</div>
                            </el-form-item>
                        </div>
                    </el-form>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="学生信息" name="3">
                <el-form ref="form_xsxx" :model="Info" :rules="rule_std" label-position="top" size="mini">
                    <el-form-item label="曾用名">
                        <el-input v-model="Info.cym"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="lxdh">
                        <el-input type="number" v-model="Info.lxdh"></el-input>
                    </el-form-item>
                    <el-form-item label="生源地" prop="syd">
                        <el-select v-model="Info.syd">
                            <el-option
                                    v-for="item in province"
                                    :label="item.codeitemname"
                                    :key="item.codeitemid"
                                    :value="item.codeitemname"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="户口性质" prop="hkxz">
                        <el-select v-model="Info.hkxz" placeholder>
                            <el-option
                                    v-for="item in household"
                                    :label="item.codeitemname"
                                    :key="item.codeitemid"
                                    :value="item.codeitemid"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="婚姻情况" prop="hjqk">
                        <el-select v-model="Info.hjqk">
                            <el-option
                                    v-for="item in marriages"
                                    :label="item.codeitemname"
                                    :key="item.codeitemid"
                                    :value="item.codeitemname"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="所在校区" prop="xq">
                        <el-select v-model="Info.xq" placeholder>
                            <el-option
                                    v-for="item in campus"
                                    :label="item.codeitemname"
                                    :key="item.codeitemid"
                                    :value="item.codeitemname"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="户口所在地" prop="hkszd">
                        <el-input v-model="Info.hkszd"></el-input>
                    </el-form-item>
                    <el-form-item label="户口详细地址" prop="hkszdz">
                        <el-input v-model="Info.hkszdz"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭人口数" prop="jtrks">
                        <el-input type="number" v-model="Info.jtrks"></el-input>
                    </el-form-item>
                    <el-form-item label="全年总收入（元）" prop="nsr">
                        <el-input type="number" v-model="Info.nsr"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭经济情况" prop="jjqk">
                        <el-input v-model="Info.jjqk"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭电话" prop="jtdh">
                        <el-input type="number" v-model="Info.jtdh"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭现住址" prop="jtzz">
                        <el-input v-model="Info.jtzz"></el-input>
                    </el-form-item>
                    <el-form-item label="QQ号" prop="qqh">
                        <el-input type="number" v-model="Info.qqh"></el-input>
                    </el-form-item>
                    <el-form-item label="毕业中学" prop="byxx">
                        <el-input v-model="Info.byxx"></el-input>
                    </el-form-item>
                    <el-form-item label="毕业学校邮编" prop="byxxyb">
                        <el-input type="number" v-model="Info.byxxyb"></el-input>
                    </el-form-item>
                    <el-form-item label="是否独生子女" prop="sfds">
                        <el-radio-group v-model="Info.sfds">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否烈士子女" prop="sfls">
                        <el-radio-group v-model="Info.sfls">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="家庭详细信息" name="4">
                <el-form ref="form_knrd" :model="Info" :rules="rule_knrd" label-position="top" size="mini">
                    <el-form-item label="是否贫困家庭" prop="sfpkjt">
                        <el-radio-group v-model="Info.sfpkjt">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <div v-if="Info.sfpkjt == '是'">
                        <el-form-item label="是否建档立卡平困户" prop="sfjdlkpkh">
                            <el-radio-group v-model="Info.sfjdlkpkh">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="是否城镇低保" prop="sfczdb">
                            <el-radio-group v-model="Info.sfczdb">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="是否农村低保" prop="sfncdb">
                            <el-radio-group v-model="Info.sfncdb">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="是否农村特困供养" prop="sfnctkgy">
                            <el-radio-group v-model="Info.sfnctkgy">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="是否残疾人子女" prop="sfcjrzn">
                            <el-radio-group v-model="Info.sfcjrzn">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="是否单亲家庭" prop="sfdq">
                            <el-radio-group v-model="Info.sfdq">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="是否家中有大病患者" prop="sfjzydbhz">
                            <el-radio-group v-model="Info.sfjzydbhz">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="是否孤儿" prop="sfge">
                            <el-radio-group v-model="Info.sfge">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="是否军烈属或优抚子女" prop="sfjlshyfzn">
                            <el-radio-group v-model="Info.sfjlshyfzn">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="是否父母丧失劳动能力" prop="sffmssldnl">
                            <el-radio-group v-model="Info.sffmssldnl">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="是否家庭遭受自然灾害" prop="sfjtzfzrzh">
                            <el-radio-group v-model="Info.sfjtzfzrzh">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <!--<el-form-item label="自然灾害情况描述" prop="jtzrzhms">-->
                            <!--<el-input v-model="Info.jtzrzhms"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="是否家庭遭受突发意外事件" prop="sfjtzctfywsj">-->
                            <!--<el-radio-group v-model="Info.sfjtzctfywsj">-->
                                <!--<el-radio label="是"></el-radio>-->
                                <!--<el-radio label="否"></el-radio>-->
                            <!--</el-radio-group>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="突发意外事件具体描述" prop="tfywsjms">-->
                            <!--<el-input v-model="Info.tfywsjms"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="是否残疾" prop="sfcj">-->
                            <!--<el-radio-group v-model="Info.sfcj">-->
                                <!--<el-radio label="是"></el-radio>-->
                                <!--<el-radio label="否"></el-radio>-->
                            <!--</el-radio-group>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="残疾类型" prop="cjlx">-->
                            <!--<el-select v-model="Info.cjlx">-->
                                <!--<el-option-->
                                        <!--v-for="item in disabilities"-->
                                        <!--:label="item.codeitemname"-->
                                        <!--:key="item.codeitemid"-->
                                        <!--:value="item.codeitemname"-->
                                <!--&gt;</el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="是否低收入家庭" prop="sfdfrjt">-->
                            <!--<el-radio-group v-model="Info.sfdfrjt">-->
                                <!--<el-radio label="是"></el-radio>-->
                                <!--<el-radio label="否"></el-radio>-->
                            <!--</el-radio-group>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="家庭主要收入来源" prop="jtzysrly">-->
                            <!--<el-select v-model="Info.jtzysrly">-->
                                <!--<el-option-->
                                        <!--v-for="item in incomeSources"-->
                                        <!--:label="item.codeitemname"-->
                                        <!--:key="item.codeitemid"-->
                                        <!--:value="item.codeitemname"-->
                                <!--&gt;</el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="家庭劳动人口总数" prop="jtldlrks">-->
                            <!--<el-input type="number" v-model="Info.jtldlrks"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="家庭人均年收入" prop="jtrjnsr">-->
                            <!--<el-input type="number" v-model="Info.jtrjnsr"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="家庭成员失业数" prop="jtcyssrs">-->
                            <!--<el-input type="number" v-model="Info.jtcyssrs"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="家庭适龄就学子女数" prop="jtsljxzns">-->
                            <!--<el-input type="number" v-model="Info.jtsljxzns"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="赡养人口数" prop="syrks">-->
                            <!--<el-input type="number" v-model="Info.syrks"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="本人月均消费数" prop="bryjshf">-->
                            <!--<el-input type="number" v-model="Info.bryjshf"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="本人月均食堂消费金额" prop="brstyxfje">-->
                            <!--<el-input type="number" v-model="Info.brstyxfje"></el-input>-->
                        <!--</el-form-item>-->
                    </div>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="直系家庭成员" name="5">
                <div style="text-align: center;">
                    父母和未结婚的兄弟姐妹
                    <i class="el-icon-circle-plus" type="primary" style="font-size: 20px;vertical-align: middle;"
                       @click="addFamily"></i>
                </div>
                <el-carousel
                        :interval="5000"
                        arrow="always"
                        :loop="loop"
                        indicator-position="outside"
                        height="550px"
                >
                    <el-carousel-item v-for="(item,index) in Info.family" :key="index">
                        <div class="chengyuan">
                            <span></span>
                            成员{{index + 1}}
                            <i class="el-icon-delete" @click="deleteFamily(index)"></i>
                        </div>
                        <el-form label-width="80px" size="mini">
                            <el-form-item label="姓名">
                                <el-input v-model="item.xm"></el-input>
                            </el-form-item>
                            <el-form-item label="关系">
                                <el-input v-model="item.gx"></el-input>
                            </el-form-item>
                            <el-form-item label="年龄">
                                <el-input type="number" v-model="item.nl"></el-input>
                            </el-form-item>
                            <el-form-item label="学历">
                                <el-input v-model="item.xl"></el-input>
                            </el-form-item>
                            <el-form-item label="工作单位">
                                <el-input v-model="item.dw"></el-input>
                            </el-form-item>
                            <el-form-item label="联系电话">
                                <el-input type="number" v-model="item.lxdh"></el-input>
                            </el-form-item>
                            <el-form-item label="职业">
                                <el-input v-model="item.zy"></el-input>
                            </el-form-item>
                            <el-form-item label="月收入">
                                <el-input v-model="item.ysr" type="number"></el-input>
                            </el-form-item>
                            <el-form-item label="健康状况">
                                <el-input v-model="item.jkzk"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-carousel-item>
                </el-carousel>
            </el-tab-pane>
            <el-tab-pane label="主要社会关系" name="6">
                <div style="text-align: center;">
                    其他
                    <i class="el-icon-circle-plus" type="primary" style="font-size: 20px;vertical-align: middle;"
                       @click="addRelatives"></i>
                </div>
                <el-carousel :interval="5000" arrow="always" :loop="loop" height="400px">
                    <el-carousel-item v-for="(item,index) in Info.relatives" :key="index">
                        <div class="chengyuan">
                            <span></span>
                            成员{{index + 1}}
                            <i class="el-icon-delete" @click="deleteRelatives(index)"></i>
                        </div>
                        <el-form label-width="80px" size="mini">
                            <el-form-item label="姓名">
                                <el-input v-model="item.xm"></el-input>
                            </el-form-item>
                            <el-form-item label="关系">
                                <el-input v-model="item.gx"></el-input>
                            </el-form-item>
                            <el-form-item label="年龄">
                                <el-input v-model="item.nl"></el-input>
                            </el-form-item>
                            <el-form-item label="政治面貌">
                                <el-input v-model="item.zzmm"></el-input>
                            </el-form-item>
                            <el-form-item label="工作单位">
                                <el-input v-model="item.dw"></el-input>
                            </el-form-item>
                            <el-form-item label="联系电话">
                                <el-input v-model="item.lxdh"></el-input>
                            </el-form-item>
                            <el-form-item label="职业">
                                <el-input v-model="item.zy"></el-input>
                            </el-form-item>
                            <el-form-item label="民族">
                                <el-input v-model="item.mz"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-carousel-item>
                </el-carousel>
            </el-tab-pane>
            <el-tab-pane label="团员信息" name="7">
                <el-form label-position="top" ref="form_tyxx" :model="Info" :rules="rule_tyxx" size="mini">
                    <el-form-item label="是否入团" prop="tyxxsfrt">
                        <el-radio-group v-model="Info.tyxxsfrt">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <div v-if="Info.tyxxsfrt == '是'">
                        <el-form-item label="入团时间" prop="tyxxrtsj">
                            <el-date-picker type="date" value-format="yyyy-MM-dd"
                                            v-model="Info.tyxxrtsj"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="是否开具团组织介绍信" prop="tyxxsfkjjsx">
                            <el-radio-group v-model="Info.tyxxsfkjjsx">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="入团介绍人" prop="tyxxrtjsr">
                            <el-input v-model="Info.tyxxrtjsr"></el-input>
                        </el-form-item>
                        <el-form-item label="入团联系人电话" prop="tyxxrtlxrdh">
                            <el-input type="number" v-model="Info.tyxxrtlxrdh"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="党员信息" name="8">
                <el-form label-position="top" size="mini" ref="form_dyxx" :rules="rule_dyxx" :model="Info">
                    <el-form-item label="是否入党" prop="dyxxsfrd">
                        <el-radio-group v-model="Info.dyxxsfrd">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <div v-if="Info.dyxxsfrd == '是'">
                        <el-form-item label="入党时间" prop="dyxxrdsj">
                            <el-date-picker type="date" value-format="yyyy-MM-dd"
                                            v-model="Info.dyxxrdsj"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="发展时间" prop="dyxxfzsj">
                            <el-date-picker type="date" value-format="yyyy-MM-dd"
                                            v-model="Info.dyxxfzsj"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="入党积极分子时间" prop="dyxxrdjjfzsj">
                            <el-date-picker type="date" value-format="yyyy-MM-dd"
                                            v-model="Info.dyxxrdjjfzsj"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="转正时间" prop="dyxxzjsj">
                            <el-date-picker type="date" value-format="yyyy-MM-dd"
                                            v-model="Info.dyxxzjsj"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="党校结业时间" prop="dyxxdxjysj">
                            <el-date-picker type="date" value-format="yyyy-MM-dd"
                                            v-model="Info.dyxxdxjysj"></el-date-picker>
                        </el-form-item>
                    </div>
                </el-form>
            </el-tab-pane>
            <!--<el-tab-pane v-if="Info.mz !== '汉族'" label="民族生信息" name="9">-->
            <!--<el-form label-position="top" size="mini" ref="form_mzsxx" :rules="rule_mzsxx" :model="Info">-->
            <!--<el-form-item label="是否有办出入证件" prop="mzxxsfybcrzj">-->
            <!--<el-radio-group v-model="Info.mzxxsfybcrzj">-->
            <!--<el-radio label="是"></el-radio>-->
            <!--<el-radio label="否"></el-radio>-->
            <!--</el-radio-group>-->
            <!--</el-form-item>-->
            <!--<div v-if="Info.mzxxsfybcrzj == '是'">-->
            <!--<el-form-item label="出入境证件类型" prop="mzxxcrjzjlx">-->
            <!--<el-input v-model="Info.mzxxcrjzjlx"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="出入境证件号" prop="mzxxcrjzjh">-->
            <!--<el-input v-model="Info.mzxxcrjzjh"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="出入境证件有效期" prop="mzxxcrjyxq">-->
            <!--<el-date-picker type="date" value-format="yyyy-MM-dd"-->
            <!--v-model="Info.mzxxcrjyxq"></el-date-picker>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="宗教信仰" prop="mzxxzjxy">-->
            <!--<el-input v-model="Info.mzxxzjxy"></el-input>-->
            <!--</el-form-item>-->
            <!--&lt;!&ndash;删除&ndash;&gt;-->
            <!--&lt;!&ndash;<el-form-item label="班长" prop="mzxxbz">&ndash;&gt;-->
            <!--&lt;!&ndash;<el-input v-model="Info.mzxxbz"></el-input>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
            <!--</div>-->
            <!--</el-form>-->
            <!--</el-tab-pane>-->
            <el-tab-pane label="紧急联系人" name="9">
                <el-form label-position="top" ref="form_jjlxr" :rules="rule_jjlxr" :model="Info" size="mini">
                    <el-form-item label="姓名" prop="jjxm">
                        <el-input v-model="Info.jjxm"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" prop="jjdh">
                        <el-input type="number" v-model="Info.jjdh"></el-input>
                    </el-form-item>
                    <el-form-item label="单位" prop="jjdw">
                        <el-input v-model="Info.jjdw"></el-input>
                    </el-form-item>
                    <!--<el-form-item label="QQ" prop="jjqq">-->
                        <!--<el-input type="number" v-model="Info.jjqq"></el-input>-->
                    <!--</el-form-item>-->
                    <el-form-item label="与联系人的关系" prop="jjgx">
                        <el-input v-model="Info.jjgx"></el-input>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
        <div class="btn-area loaction-bottom">
            <el-button v-if="activeName != '1'" type="primary" @click="prevStep">上一步</el-button>
            <el-button v-if="activeName != '9'" type="primary" @click="nextStep">下一步</el-button>
            <el-button v-if="activeName == '9'" type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script>
    import goBack from "@/components/goBack";
    import {Actionsheet, Slider, Picker, Popup} from "vant";

    export default {
        name: "person",
        data() {
            return {
                title: "个人信息",
                activeName: "1",
                loop: false, //轮播图是否回环播放
                Info: {
                    family: [
                        {
                            xm: "",
                            gx: "",
                            nl: "",
                            xl: "",
                            dw: "",
                            lxdh: "",
                            zy: "",
                            ysr: "",
                            jkzk: "",
                            gxlx: "0"
                        }
                    ],
                    relatives: []
                }, //详细信息
                campus: [], //校区
                household: [], //户口
                marriages: [], //婚姻情况
                province: [], //省份
                disabilities: [], //残疾类型
                incomeSources: [], //收入来源
                rules: {
                    lxdh: [{required: true, message: "此项为必填", trigger: "blur"}],
                    name: [
                        {required: true, message: "请输入活动名称", trigger: "blur"},
                        {min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur"}
                    ],
                    region: [
                        {required: true, message: "请选择活动区域", trigger: "change"}
                    ],
                    date1: [
                        {
                            type: "date",
                            required: true,
                            message: "请选择日期",
                            trigger: "change"
                        }
                    ],
                    date2: [
                        {
                            type: "date",
                            required: true,
                            message: "请选择时间",
                            trigger: "change"
                        }
                    ],
                    type: [
                        {
                            type: "array",
                            required: true,
                            message: "请至少选择一个活动性质",
                            trigger: "change"
                        }
                    ],
                    resource: [
                        {required: true, message: "请选择活动资源", trigger: "change"}
                    ],
                    desc: [{required: true, message: "请填写活动形式", trigger: "blur"}]
                },
                rule_std: {//学生信息
                    lxdh: [{required: true, message: "请正确填写联系电话", trigger: "blur"}],
                    syd: [{required: true, message: "必填", trigger: "change"}],
                    hkxz: [{required: true, message: "必填", trigger: "change"}],
                    hjqk: [{required: true, message: "必填", trigger: "change"}],
                    xq: [{required: true, message: "必填", trigger: "change"}],
                    hkszd: [{required: true, message: "必填", trigger: "change"}],
                    hkszdz: [{required: true, message: "必填", trigger: "change"}],
                    jtrks: [{required: true, message: "必填", trigger: "change"}],
                    nsr: [{required: true, message: "必填", trigger: "change"}],
                    jtzz: [{required: true, message: "必填", trigger: "change"}],
                    qqh: [{required: true, message: "必填", trigger: "change"}],
                    byxx: [{required: true, message: "必填", trigger: "change"}],
                    byxxyb: [{required: true, message: "必填", trigger: "change"}],
                    sfds: [{required: true, message: "必填", trigger: "change"}],
                    sfls: [{required: true, message: "必填", trigger: "change"}]
                },
                rule_knrd: {//家庭详细信息
                    sfpkjt: [{required: true, message: "必填", trigger: "change"}],
                    sfjdlkpkh: [{required: true, message: "必填", trigger: "change"}],
                    sfczdb: [{required: true, message: "必填", trigger: "change"}],
                    sfncdb: [{required: true, message: "必填", trigger: "change"}],
                    sfnctkgy: [{required: true, message: "必填", trigger: "change"}],
                    sfcjrzn: [{required: true, message: "必填", trigger: "change"}],
                    sfdq: [{required: true, message: "必填", trigger: "change"}],
                    sfjzydbhz: [{required: true, message: "必填", trigger: "change"}],
                    sfge: [{required: true, message: "必填", trigger: "change"}],
                    sfjlshyfzn: [{required: true, message: "必填", trigger: "change"}],
                    sffmssldnl: [{required: true, message: "必填", trigger: "change"}],
                    sfjtzfzrzh: [{required: true, message: "必填", trigger: "change"}],
                    // jtzrzhms: [{required: true, message: "必填", trigger: "change"}],
                    // sfjtzctfywsj: [{required: true, message: "必填", trigger: "change"}],
                    // tfywsjms: [{required: true, message: "必填", trigger: "change"}],
                    // sfcj: [{required: true, message: "必填", trigger: "change"}],
                    // cjlx: [{required: true, message: "必填", trigger: "change"}],
                    // sfdfrjt: [{required: true, message: "必填", trigger: "change"}],
                    // jtzysrly: [{required: true, message: "必填", trigger: "change"}],
                    // jtldlrks: [{required: true, message: "必填", trigger: "change"}],
                    // jtrjnsr: [{required: true, message: "必填", trigger: "change"}],
                    // jtcyssrs: [{required: true, message: "必填", trigger: "change"}],
                    // jtsljxzns: [{required: true, message: "必填", trigger: "change"}],
                    // syrks: [{required: true, message: "必填", trigger: "change"}],
                    // bryjshf: [{required: true, message: "必填", trigger: "change"}],
                    // brstyxfje: [{required: true, message: "必填", trigger: "change"}]
                },
                rule_tyxx: {//团员信息
                    tyxxsfrt: [{required: true, message: "必填", trigger: "change"}],
                    tyxxrtsj: [{required: true, message: "必填", trigger: "change"}],
                    tyxxsfkjjsx: [{required: true, message: "必填", trigger: "change"}],
                    tyxxrtjsr: [{required: true, message: "必填", trigger: "change"}]
                },
                rule_dyxx: {//党员信息
                    dyxxsfrd: [{required: true, message: "必填", trigger: "change"}],
                    dyxxrdsj: [{required: true, message: "必填", trigger: "change"}],
                    dyxxfzsj: [{required: true, message: "必填", trigger: "change"}],
                    dyxxrdjjfzsj: [{required: true, message: "必填", trigger: "change"}],
                    dyxxzjsj: [{required: true, message: "必填", trigger: "change"}],
                    dyxxdxjysj: [{required: true, message: "必填", trigger: "change"}]
                },
                rule_mzsxx: {//民族生信息
                    mzxxsfybcrzj: [{required: true, message: "必填", trigger: "change"}],
                    mzxxcrjzjlx: [{required: true, message: "必填", trigger: "change"}],
                    mzxxcrjzjh: [{required: true, message: "必填", trigger: "change"}],
                    mzxxcrjyxq: [{required: true, message: "必填", trigger: "change"}],
                    mzxxzjxy: [{required: true, message: "必填", trigger: "change"}]
                },
                rule_jjlxr: {//紧急联系人
                    jjxm: [{required: true, message: "必填", trigger: "change"}],
                    jjdh: [{required: true, message: "必填", trigger: "change"}],
                    jjdw: [{required: true, message: "必填", trigger: "change"}],
                    // jjqq: [{required: true, message: "必填", trigger: "change"}],
                    jjgx: [{required: true, message: "必填", trigger: "change"}]
                }
            };
        },
        components: {
            goBack,
            [Actionsheet.name]: Actionsheet,
            [Slider.name]: Slider,
            [Picker.name]: Picker,
            [Popup.name]: Popup
        },
        methods: {
            onSubmit() {
                console.log("submit!");
            },
            handleClick(tab) {
                //切换tab,则保存一次
                this.activeName = tab.name;
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
                this.save();
            },
            getDetail() {
                //获取学生详情
                this.$ajax.get("/student_api/student_detail").then(res => {
                    this.Info = res.data.data;
                    if (res.data.data.family.length == 0) {
                        this.addFamily();
                    }
                    if (res.data.data.relatives.length == 0) {
                        this.addRelatives();
                    }
                });
            },
            getOptions() {
                //获取选项
                this.$ajax.get("/student_api/options").then(res => {
                    this.campus = res.data.data.campus;
                    this.household = res.data.data.household;
                    this.marriages = res.data.data.marriages;
                    this.province = res.data.data.province;
                    this.disabilities = res.data.data.disabilities;
                    this.incomeSources = res.data.data.incomeSources;
                });
            },
            addFamily() {
                if (this.Info.family.length < 4) {
                    let familyItem = {
                        xm: "",
                        gx: "",
                        nl: "",
                        xl: "",
                        dw: "",
                        lxdh: "",
                        zy: "",
                        ysr: "",
                        jkzk: "",
                        gxlx: "0"
                    };
                    this.Info.family.push(familyItem);
                    this.$toast("添加成功！");
                } else {
                    this.$toast("最多填写四个成员");
                }
            },
            addRelatives() {
                if (this.Info.relatives.length < 4) {
                    let relativesItem = {
                        xm: "",
                        gx: "",
                        nl: "",
                        zzmm: "",
                        dw: "",
                        lxdh: "",
                        zy: "",
                        mz: "",
                        gxlx: "2"
                    };
                    this.Info.relatives.push(relativesItem);
                    this.$toast("添加成功！");
                } else {
                    this.$toast("最多填写四个成员");
                }
            },
            beforeLeave(e) {
                console.log(e);
            },
            prevStep() {
                let temp = Number(this.activeName);
                temp = temp - 1;
                this.activeName = String(temp);
                this.save();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            },
            nextStep() {
                let temp = Number(this.activeName);
                temp = temp + 1;
                this.activeName = String(temp);
                this.save();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            },
            save() {
                let data = JSON.stringify(this.Info);
                // console.log("格式化后的数据", data);
                this.$ajax
                    .post("/student_api/save", {jsonObjectStr: data, finishTag: false})
            },
            submit() {//总提交按钮
                //表单验证
                let xsxx = false;//学生信息
                let jtxx = false;//家庭信息
                let tyxx = false;//团员信息
                let dyxx = false;//党员信息
                // let mzsxx = false;//民族生信息
                let jjlxr = false;//紧急联系人
                this.$refs['form_xsxx'].validate((valid) => {
                    if (valid) {//继续提交
                        xsxx = true
                    } else {//终止提交，并提示
                        xsxx = false;
                    }
                });
                this.$refs['form_knrd'].validate((valid) => {//家庭信息
                    if ((this.Info.sfpkjt == '是' && valid) || this.Info.sfpkjt == '否') {
                        jtxx = true
                    } else {
                        jtxx = false;
                    }
                });
                this.$refs['form_tyxx'].validate((valid) => {//团员信息
                    if ((this.Info.tyxxsfrt == '是' && valid) || this.Info.tyxxsfrt == '否') {
                        tyxx = true
                    } else {
                        tyxx = false;
                    }
                });
                this.$refs['form_dyxx'].validate((valid) => {//党员员信息
                    if ((this.Info.dyxxsfrd == '是' && valid) || this.Info.dyxxsfrd == '否') {
                        dyxx = true
                    } else {
                        dyxx = false;
                    }
                });
                // if (this.Info.mz !== '汉族') {//非汉族
                //     this.$refs['form_mzsxx'].validate((valid) => {//民族生信息
                //         if ((this.Info.mzxxsfybcrzj == '是' && valid) || this.Info.mzxxsfybcrzj == '否') {
                //             mzsxx = true
                //         } else {
                //             mzsxx = false;
                //         }
                //     });
                // } else {
                //     mzsxx = true
                // }
                this.$refs['form_jjlxr'].validate((valid) => {//紧急联系人
                    if (valid) {
                        jjlxr = true
                    } else {
                        jjlxr = false;
                    }
                });
                console.log(xsxx)
                console.log(jtxx)
                console.log(tyxx)
                console.log(dyxx)
                console.log(jjlxr)
                console.log(this.Info)
                if (!xsxx) {
                    this.$toast('学生信息有必填项未填写！')
                    return
                } else if (!jtxx) {
                    this.$toast('家庭信息有必填项未填写！')
                    return
                } else if (!tyxx) {
                    this.$toast('团员信息有必填项未填写！')
                    return
                } else if (!dyxx) {
                    this.$toast('党员信息有必填项未填写！')
                    return
                }
                /*else if (!mzsxx) {
                    this.$toast('民族生信息有必填项未填写！')
                    return
                } */
                else if (!jjlxr) {
                    this.$toast('紧急联系人有必填项未填写！')
                    return
                }
                let data = JSON.stringify(this.Info);
                console.log("格式化后的数据", data);
                this.$ajax
                    .post("/student_api/save", {jsonObjectStr: data, finishTag: true}).then(res => {
                    if (res.data.errcode == '0') {//提交成功后跳转到环节列表
                        this.$toast({
                            type: 'success',
                            message: res.data.data
                        })
                        setTimeout(()=>{
                            this.$router.push('/desk')
                        },3000)
                    } else {
                        this.$toast({
                            type: 'fail',
                            message: res.data.errmsg
                        })
                    }
                })
            },
            deleteFamily(index) {
                //删除家庭成员
                this.Info.family.splice(index, 1);
                this.$toast("删除成功！");
            },
            deleteRelatives(index) {
                //删除社会关系成员
                this.Info.relatives.splice(index, 1);
                this.$toast("删除成功！");
            }
        },
        mounted() {
            this.getDetail();
            this.getOptions();
            window.vue = this;
        }
    };
</script>

<style scoped lang="scss">
    .flex-contain {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        /*width: 100%;*/
        overflow-x: scroll;

        .flex-block {
            width: 400px !important;
        }
    }

    .el-form-item {
        margin-bottom: 10px;
        clear: both !important;
        /*border: 1px solid #f0f0f0;*/
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        padding: 5px 10px;
    }

    .el-form-item__label {
        clear: both !important;
        float: initial !important;
    }

    .el-form-item__content {
        margin-left: 0 !important;
    }

    .el-tabs__content {
        background-color: #bfbfbf !important;
    }

    .chengyuan {
        text-align: center;
        padding: 15px 0;
        color: #000;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .loaction-bottom {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px 0;
        background-color: white;
        border: 1px solid #ebeef5;
        z-index: 999;
    }
</style>