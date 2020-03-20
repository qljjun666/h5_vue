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
import HeaderBar from "../components/header/index.vue";
export default {
    name: "Home",
    components: {
        HeaderBar
    },
    data() {
        return {

        };
    },
    created() {
        console.log(1111);
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
    width: 100px;
    height: 100px;
    color: red;
    transform: rotate(45deg);
}

</style>