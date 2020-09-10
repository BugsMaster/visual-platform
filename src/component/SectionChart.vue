<template>
    <div class="section-box">
        <component v-if="borderOptions.type"
            :is="'dv-border-box-'+borderOptions.type"
            :color="borderOptions.colorArr" 
            :backgroundColor="borderOptions.bgColor"
			:dur="borderOptions.dur"
            :reverse="borderOptions.reverse"
            :title="borderOptions.title"
            :titleWidth="borderOptions.titleWidth"

        >
            <slot name="chart-content"></slot>
        </component>
        <slot v-else name="chart-content"></slot>
    </div>
</template>

<script>
    export default {
        props:{
            borderOptions:{},
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
// $red: #fd2671;
// $orange: #fa9b25;
// $yellow: #fbbd08;
// $yellow-light: #fed904;
// $olive: #8dc63f;
// $green: #39b54a;
// $cyan: #00bcd4;
// $blue: #0081ff;
// $blue-bgc:rgba(19,21,32,0.3);
// $blue-light: #7399fe;
// $blue-dark: #0a3f6f;
// $blue-opacity:rgba(35,70,107,.3);
// $steel:#474f5f;
// $steel-opacity: rgba(70,80,95,.9);
// $purple: #6739b6;
// $mauve: #9c26b0;
// $pink: #e03997;
// $brown: #a5673f;
// $grey: #8799a3;
// $black: #333333;
// $darkGray: #666666;
// $gray: #aaaaaa;
// $ghostWhite: #f2f2f2;
// $white: #ffffff;
.section-box{
    height: 100%;
    .content{
        height: 100%;
    }
}
</style>
