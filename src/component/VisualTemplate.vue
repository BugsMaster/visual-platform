<template>
    <div id="visual" class="visual">
        <div class="layoutbox bgc" :style="{backgroundImage:`url(${bgcPath})`}">
            <div class="title-box">
                <h1 :style="{fontSize:title.size,color:title.color,paddingTop:title.top+'px'}">{{title.name}}</h1>
                <h3 v-if="title.timeShow">{{currentTime}}</h3>
            </div>
            <ul class="section-ul" v-if="isEditModel">
                <li class="section" :style="{width:item.width+'px',height:item.height+'px',zIndex:index+10,left:item.position.x+'px',top:item.position.y+'px'}"
                 v-for="(item,index) in sectionArr">
                    <h3 v-if="item.title.isShow" class="title" :style="{fontSize:item.title.size+'px',left:item.title.position.x+'px',top:item.title.position.y+'px',color:item.title.color}">{{item.title.name}}</h3>
                    <div class="wraper" @mousedown="dragMove($event,index)">
                        <section-chart :borderOptions="item.borderOptions">
                            <div class="chart-content" slot="chart-content">
                                <slot :name="index+1"></slot>
                            </div>
                        </section-chart>
                    </div>
                    <span class="edit platfont iconplat-edit" @click.stop="editRec(item,index)"></span>
                    <span class="scale platfont iconplat-scale" @mousedown="scaleMove($event,index)"></span>
                </li>
            </ul>
            <ul class="section-ul-view" v-else>
                <li class="section" :style="{width:item.width+'px',height:item.height+'px',zIndex:index+10,left:item.position.x+'px',top:item.position.y+'px'}"
                 v-for="(item,index) in sectionArr">
                    <h3 v-if="item.title.isShow" class="title" :style="{fontSize:item.title.size+'px',left:item.title.position.x+'px',top:item.title.position.y+'px',color:item.title.color}">{{item.title.name}}</h3>
                    <div class="wraper">
                        <section-chart :borderOptions="item.borderOptions">
                            <div class="chart-content" slot="chart-content">
                                <slot :name="index+1"></slot>
                            </div>
                        </section-chart>
                    </div>
                </li>
            </ul>
            <div class="operation-panel" v-if="isPanelShow">
                <ul class="operation-ul">
                    <li @click="initApp"><span class="platfont iconplat-init" title="位置初始化"></span></li>
                    <li @click="gridApp"><span class="platfont iconplat-grid" title="格式化位置"></span></li>
                    <li @click="isEditModel=!isEditModel"><span class="platfont  iconplat-fold-line" :class="{'green':isEditModel}"></span></li>
                    <li @click="editMain"><span class="platfont  iconplat-system"></span></li>
                    <li @click="clearConfig"><span class="platfont  iconplat-noconnect" title="清除"></span></li>
                    <li @click="saveConfig"><span class="platfont  iconplat-save" title="保存"></span></li>
                </ul>
            </div>
        </div>
        <el-drawer
        title="单元配置"
        :visible.sync="chartFormVisible"
        :before-close="cancleChartForm"
        direction="rtl"
        custom-class="drawer"
        :wrapperClosable="false"
        ref="drawer"
        >
            <div class="drawer_box">
                <div class="drawer_content">
                    <el-form label-position="right" label-width="150px" :model="chartForm" ref="chartForm">
                        <h3 style="margin-bottom:20px;font-weight:700">标题设置</h3>
                        <el-form-item label="名称：">
                            <el-input size="small" placeholder="请输入" v-model="chartForm.name" clearable>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="字体大小">
                            <el-input-number size="small" placeholder="请输入" v-model="chartForm.size" clearable></el-input-number>
                        </el-form-item>
                        <el-form-item label="颜色：">
                            <el-color-picker v-model="chartForm.color"></el-color-picker>
                        </el-form-item>
                        <el-form-item label="Left - Top(px)：">
                            <el-input-number style="width:120px" size="small" placeholder="请输入" v-model="chartForm.leftTitle" clearable>
                            </el-input-number>
                            ——
                            <el-input-number style="width:120px" size="small" placeholder="请输入" v-model="chartForm.topTitle" clearable>
                            </el-input-number>
                        </el-form-item>
                        <el-form-item label="是否展示：">
                            <el-switch v-model="chartForm.isShow"></el-switch>
                        </el-form-item>
                        <h3 style="margin-bottom:20px;font-weight:700">内容设置</h3>
                        <el-form-item label="宽 - 高 (px)：">
                            <el-input-number style="width:120px" size="small" placeholder="请输入" v-model="chartForm.width" clearable>
                            </el-input-number>
                            ——
                            <el-input-number style="width:120px" size="small" placeholder="请输入" v-model="chartForm.height" clearable>
                            </el-input-number>
                        </el-form-item>
                        <el-form-item label="X - Y (px)：">
                            <el-input-number style="width:120px" size="small" placeholder="请输入" v-model="chartForm.left" clearable>
                            </el-input-number>
                            ——
                            <el-input-number style="width:120px" size="small" placeholder="请输入" v-model="chartForm.top" clearable>
                            </el-input-number>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="drawer_footer">
                    <el-button @click="cancleChartForm">取 消</el-button>
                    <el-button type="primary" @click="confirmChartForm">确 定</el-button>
                </div>
            </div>
        </el-drawer>
        <el-drawer
        title="主配置"
        :visible.sync="mainFormVisible"
        :before-close="cancleForm"
        direction="rtl"
        custom-class="drawer"
        :wrapperClosable="false"
        ref="maindrawer"
        >
            <div class="drawer_box">
                <div class="drawer_content">
                    <el-form label-position="right" label-width="100px" ref="mainForm">
                        <el-form-item label="标题" prop="name">
                            <el-input size="small" placeholder="请输入" v-model="mainForm.name" clearable></el-input>
                        </el-form-item>
                        <el-form-item label="字体大小" prop="size">
                            <el-input-number size="small" placeholder="请输入" v-model="mainForm.size" :min="14" clearable></el-input-number>
                        </el-form-item>
                        <el-form-item label="Top" prop="top">
                            <el-input-number size="small" placeholder="请输入" v-model="mainForm.top" :min="0" clearable></el-input-number>
                        </el-form-item>
                        <el-form-item label="颜色：">
                            <el-color-picker v-model="mainForm.color"></el-color-picker>
                        </el-form-item>
                        <el-form-item label="时间展示：">
                            <el-switch v-model="mainForm.timeShow"></el-switch>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="drawer_footer">
                    <el-button @click="cancleForm">取 消</el-button>
                    <el-button type="primary" @click="confirmForm">确 定</el-button>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
import { Storage } from '../lib/utils';
import sectionChart from './SectionChart'
export default {
    components:{
        sectionChart
    },
    data() {
        return {
            bgcPath:'',
            title:{
                name:'',
                size:16,
                color:'',
                top:0,
                timeShow:true
            },
            // 主配置
            mainFormVisible:false,
            mainForm:{
                name:'',
                size:16,
                color:'',
                timeShow:true,
                top:0
            },
            // 单元配置
            chartFormVisible:false,
            chartForm:{
                // title
                name:'',
                size:16,
                leftTitle:null,
                topTitle:null,
                isShow:true,
                color:'',
                // content
                width:null,
                height:null,
                left:null, 
                top:null
            },
            currentTime: new Date().toLocaleString(),
            sectionIndex:null,
            sectionArr:[],
            saveConfigData:{},
            // 全局环境变量
            isEditModel:false,
            isPanelShow:false,
        }
    },
    props: {
        option:Object
    },
    computed: {},
    created() {
        setInterval(() => {
            this.currentTime = new Date().toLocaleString();
        }, 1000);
        let visualConfig = Storage.get("visualConfig");
        if(visualConfig){
            this.bgcPath = visualConfig.bgcPath;
            this.title = visualConfig.title;
            this.sectionArr = visualConfig.sectionArr;
        }else{
            this.bgcPath = this.option.bgcPath;
            this.title = this.option.title;
            this.sectionArr = this.option.sectionArr;
        }
    },
    mounted() {
        let that = this;
        document.onkeydown = function (event) {
            switch (event.keyCode) {
                case 69:
                    that.isEditModel=!that.isEditModel;
                    break;
                case 72:
                    that.isPanelShow = !that.isPanelShow;
                    break;
                default:
                    break;
            }
        };
    },
    methods: {
        initApp(){
            this.sectionArr.forEach(item=>{
                item.position={
                    x:0,
                    y:0
                }
            });   
        },
        gridApp(){
            this.sectionArr.forEach(item=>{
                item.position={
                    x:Math.round(item.position.x/20)*20,
                    y:Math.round(item.position.y/20)*20
                }
            });   
        },
        clearConfig(){
            Storage.clear();
            this.$message({ message: '清理当前配置成功', duration: 2000,type: 'success',
                onClose:function(){
                    window.location.reload();  
                }
            });
        },
        saveConfig(){
            this.saveConfigData={
                bgcPath:this.bgcPath,
                title:this.title,
                sectionArr:this.sectionArr
            }
            Storage.set('visualConfig', this.saveConfigData);
            this.$message.success('保存配置成功');
        },
        // 主配置
        editMain(){
            this.mainFormVisible = true;
            this.mainForm.name = this.title.name;
            this.mainForm.top = this.title.top;
            this.mainForm.size = this.title.size;
            this.mainForm.color = this.title.color;
            this.mainForm.timeShow = this.title.timeShow;
        },
        cancleForm(){
            this.mainFormVisible = false;
            this.mainForm = {
                name:'',
                size:16,
                top:0,
                color:'',
                timeShow:true
            };
        },
        confirmForm(){
            this.title = {
                name:this.mainForm.name,
                size:this.mainForm.size,
                top:this.mainForm.top,
                color:this.mainForm.color,
                timeShow:this.mainForm.timeShow,
            };
            this.mainFormVisible = false;
        },
        // 单元配置
        editRec(item,index){
            this.sectionIndex = index;
            this.chartFormVisible = true;
            this.chartForm={
                // title
                name:item.title.name,
                size:item.title.size,
                color:item.title.color,
                leftTitle:item.title.position.x,
                topTitle:item.title.position.y,
                isShow:item.title.isShow,
                // content
                width:item.width,
                height:item.height,
                left:item.position.x,
                top:item.position.y,
            }
        },
        cancleChartForm(){
            this.chartFormVisible = false;
            this.chartForm={
                // title
                name:'',
                size:16,
                leftTitle:null,
                topTitle:null,
                isShow:true,
                color:'',
                // content
                width:null,
                height:null,
                left:null, 
                top:null,
            }
        },
        confirmChartForm(){
            this.sectionArr[this.sectionIndex].title = {
                name:this.chartForm.name,
                size:this.chartForm.size,
                color:this.chartForm.color,
                position:{x:this.chartForm.leftTitle,y:this.chartForm.topTitle},
                isShow:this.chartForm.isShow
            }
            this.sectionArr[this.sectionIndex].width = this.chartForm.width;
            this.sectionArr[this.sectionIndex].height = this.chartForm.height;
            this.sectionArr[this.sectionIndex].position = {
                x:this.chartForm.left,
                y:this.chartForm.top
            }  
            this.cancleChartForm();
        },
        // 鼠标手势
        dragMove(e,index) {
            this.sectionIndex = index;
            let odiv = e.currentTarget.parentNode;
            //算出鼠标相对元素的位置
            let disX = e.clientX - odiv.offsetLeft;
            let disY = e.clientY - odiv.offsetTop;
            document.onmousemove = (e)=>{ //鼠标按下并移动的事件
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX;
                let top = e.clientY - disY;
                //移动当前元素
                this.sectionArr[this.sectionIndex].position.x = left;
                this.sectionArr[this.sectionIndex].position.y = top;
            };
            document.onmouseup = (e) => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        },
        scaleMove(e,index){
            this.sectionIndex = index;
            let odiv = e.currentTarget;
            //算出鼠标相对元素的位置
            let disX = e.clientX - odiv.offsetLeft;
            let disY = e.clientY - odiv.offsetTop;
            document.onmousemove = (e)=>{ //鼠标按下并移动的事件
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX;
                let top = e.clientY - disY;
                //移动当前元素
                this.sectionArr[this.sectionIndex].width = left+40;
                this.sectionArr[this.sectionIndex].height = top+40;
            };
            document.onmouseup = (e) => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }
    },
    watch: {
    },
};
</script>
<style scoped lang="scss">
@font-face {font-family: "platfont";
  src: url('//at.alicdn.com/t/font_1989593_spfz69513pg.eot?t=1600163083194'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1989593_spfz69513pg.eot?t=1600163083194#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1989593_spfz69513pg.woff?t=1600163083194') format('woff'),
  url('//at.alicdn.com/t/font_1989593_spfz69513pg.ttf?t=1600163083194') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1989593_spfz69513pg.svg?t=1600163083194#platfont') format('svg'); /* iOS 4.1- */
}

.platfont {
  font-family: "platfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconplat-scale:before {
  content: "\e72f";
}

.iconplat-edit:before {
  content: "\e61b";
}

.iconplat-system:before {
  content: "\e608";
}

.iconplat-save:before {
  content: "\e6d9";
}

.iconplat-fold-line:before {
  content: "\e61e";
}

.iconplat-init:before {
  content: "\e61f";
}

.iconplat-noconnect:before {
  content: "\e61d";
}

.iconplat-grid:before {
  content: "\e8e0";
}




//主题
$danger: #f56c6c;
$success: #49cd45;
/* 标准色 */
$red: #fd2671;
$orange: #fa9b25;
$yellow: #fbbd08;
$yellow-light: #fed904;
$olive: #8dc63f;
$green: #39b54a;
$cyan: #00bcd4;
$blue: #0081ff;
$blue-bgc:rgba(19,21,32,0.3);
$blue-light: #7399fe;
$blue-dark: #0a3f6f;
$blue-opacity:rgba(35,70,107,.3);
$steel:#474f5f;
$steel-opacity: rgba(70,80,95,.9);
$purple: #6739b6;
$mauve: #9c26b0;
$pink: #e03997;
$brown: #a5673f;
$grey: #8799a3;
$black: #333333;
$darkGray: #666666;
$gray: #aaaaaa;
$ghostWhite: #f2f2f2;
$white: #ffffff;
/* 浅色 */
$redLight: #fadbd9;
$orangeLight: #fde6d2;
$yellowLight: #fef2ce;
$oliveLight: #e8f4d9;
$greenLight: #d7f0db;
$cyanLight: #d2f1f0;
$blueLight: #cce6ff;
$purpleLight: #e1d7f0;
$mauveLight: #ebd4ef;
$pinkLight: #f9d7ea;
$brownLight: #ede1d9;
$greyLight: #e7ebed;

.visual{
    height: 100%;
}
.layoutbox {
    height: 100%;
    position: relative;
    overflow: hidden;
    &.bgc{
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .title-box {
        z-index: 20;
        h1 {
            color: #ddd;
            font-size: 28px;
            text-align: center;
            font-weight: 700;
            letter-spacing: 4px;
        }
        h3 {
            color: #ddd;
            line-height: 3;
            font-size: 18px;
            text-align: center;
        }
    }
    .section-ul{
        position: absolute;
        left: 0;
        top: 0;
        .section{
            border: 1px solid $mauve;
            position: absolute;
            .wraper{
                cursor: move;
                padding: 10px;
                width: 100%;
                height: 100%;
            }
            &:hover{
                border-color: $purpleLight;
                .edit{
                    display: block;
                }
                .scale{
                    display: block;
                }
            }
            .title{
                position: absolute;
                top:30px;
                left:30px;
                color: #ddd;
                z-index: 1000;
            }
            .edit{
                display: none;
                position: absolute;
                right: 0;
                top: 0;
                background-color: $steel;
                padding: 10px;
                color: #ddd;
                border-radius: 0% 0% 0% 50%;
                font-size: 20px;
                cursor: pointer;
                &:hover{
                    color: $olive;
                }
            }
            .scale{
                display: none;
                position: absolute;
                right: 0;
                bottom: 0px;
                background-color: $steel;
                padding: 10px;
                color: #ddd;
                border-radius: 50% 0% 0% 0%;
                font-size: 20px;
                cursor: se-resize;
                &:hover{
                    color: $olive;
                }
            }
            .chart-content{
                height: 100%;
            }
        }
    }
    .section-ul-view{
        position: absolute;
        left: 0;
        top: 0;
        .section{
            position: absolute;
            .wraper{
                cursor: move;
                padding: 10px;
                width: 100%;
                height: 100%;
            }
            .title{
                position: absolute;
                top:30px;
                left:30px;
                color: #ddd;
                z-index: 1000;
            }
            .chart-content{
                height: 100%;
            }
        }
    }
    .operation-panel{
        width: 60%;
        height: 80px;
        position: fixed;
        bottom: -50px;
        left:20%;
        transition: all 0.3s ease-in;
        z-index: 1000;
        &:hover{
            bottom: 0px;
        }
        .operation-ul{
            margin:0 auto;
            height: 100%;
            border-top:1px solid #000;
            background: linear-gradient(to bottom, rgba(0,0,0,.2),#000);
            border-radius: 50% 50% 0 0;
            padding: 40px 20px 0px;
            display: flex;
            li{
                flex:1;
                text-align: center;
                cursor: pointer;
                &:hover{
                    span{
                        color: #fff;
                    }
                }
                span{
                    font-size: 25px;
                    color: #666;
                }
                span.green{
                    color: $green;
                }
            }
        }
    }
}
</style>
