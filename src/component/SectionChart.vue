<template>
    <div class="section-box">
        <div v-if="styleType==1" class="type-one border-angle">
            <slot name="chart-content"></slot>
            <div class="border-angle-bottom"></div>
        </div>
        <div v-if="styleType==2" class="type-two">
            <dv-decoration-3 style="width:250px;height:30px;float:right" />
            <slot name="chart-content"></slot>
        </div>
        <div v-if="styleType==3" class="type-three">
            <slot name="chart-content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            styleType:0,
        },
        data() {
            return {
                
            }
        },
        created() {

        },
        mounted() {
        },
        computed: {
        },
        methods: {
           
        },
        watch: {},
        destroyed() {
        },
        components: {}
    }
</script>
<style scoped lang="scss">
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

   /*公共小边框*/

.border-angle{
    position: relative;
    &:before{
        content: '';
        width: 25px;
        height: 25px;
        position: absolute;
        left: -3px;
        top:-3px;
        background: url("../img/border_angle_blue.png") no-repeat;
    }
    &:after{
        content: '';
        width: 25px;
        height: 25px;
        position: absolute;
        right: -3px;
        top:-3px;
        background: url("../img/border_angle_blue.png") no-repeat;
        transform: rotate(90deg);
    }
    .border-angle-bottom{
        pointer-events: none;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        &:before{
            content: '';
            width: 25px;
            height: 25px;
            position: absolute;
            left: -3px;
            bottom:-3px;
            background: url("../img/border_angle_blue.png") no-repeat;
            transform: rotate(270deg);
        }
        &:after{
            content: '';
            width: 25px;
            height: 25px;
            position: absolute;
            right: -3px;
            bottom:-3px;
            background: url("../img/border_angle_blue.png") no-repeat;
            transform: rotate(180deg);
        }
    }
}
.section-box{
    height: 100%;
    .type-one,.type-two,.type-three{
        height: 100%;
    }
    .type-one{
        border:1px solid $blue;
        background-color: $blue-opacity;
    }
    .type-two{
        border:1px solid $yellow;
        background-color: $blue-opacity;
    }
    .type-three{
        border:1px solid $olive;
        background-color: $blue-opacity;
    }
}
</style>
