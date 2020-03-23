<template>
  <div class="home">
    <header-bar />
    <div class="content">
      这是首页
      <div class="box" />
    </div>
  </div>
</template>
<script>
import HeaderBar from '../components/header/index.vue';
export default {
    name: 'Home',
    components: {
        HeaderBar
    },
    data() {
        return {

        };
    },
    created() {
        console.log(4444);
    },
    methods: {

    }
};
</script>
<style scoped lang="less">
div{
    margin: 0;
    padding: 0;
}
.home {
    .content {
        padding-top: 45px;
    }
}
.box {
    margin: 20px;
    width: 100px;
    height: 100px;
    background-color: red;
    transform: rotate(45deg);
    border: 1Px solid green;
}

</style>