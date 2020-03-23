<template>
  <div
    class="header-bar"
    :class="{bd_line:showLine}"
    @touchstart.prevent
  >
    <div class="header-bar_left">
      <i @touchend="goBack" />
    </div>
    <div class="header-bar_title">
      {{ title }}
    </div>
    <div
      class="header-bar_right"
      @touchend="rightFn"
    >
      {{ rightTitle }}
    </div>
  </div>
</template>
<script>
export default {
    name: 'HeaderBar',
    props: {
        title: {
            type: String,
            default: '标题'
        },
        rightTitle: {
            type: String,
            default: ''
        },
        closeWindow: {
            type: Boolean,
            default: false
        },
        showLine: {
            type: Boolean,
            default: false
        },
        isEmit: {
            type: Boolean,
            default: false
        },
        turn: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },
    methods: {
        goBack() {
            if (!this.turn) {
                this.$router.go(-1);
            } else {
                this.$emit('goToPre');
            }
        },
        rightFn() {
            this.$emit('rightFn');
        }
    }
};
</script>
<style scoped>
.header-bar {
    position: relative;
    position: fixed;
    width: 100%;
    height: 45px;
    background-color: #fff;
    z-index: 99;
}
.bd_line {
    border-bottom: 1px solid rgba(232, 232, 232, 0.5);
}
.header-bar_left {
    height: 45px;
    width: 45px;
    position: absolute;
    top: 0;
    left: 0;
}
.header-bar_left i {
    display: block;
    height: 45px;
    width: 45px;
    background: url('../../assets/image/fanhui.png') no-repeat center;
    background-size: contain;
}
.header-bar_title {
    height: 45px;
    font-size: 18px;
    line-height: 45px;
    color: #333;
    text-align: center;
}
.header-bar_right {
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    height: 45px;
    text-align: right;
    line-height: 45px;
    font-size: 16px;
    color: #3386ed;
}
</style>