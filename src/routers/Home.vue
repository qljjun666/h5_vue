<template>
  <div class="home">
    <header-bar />
    <div class="content">
      <ul>
        <li>申请人查询</li>
        <li>受益人查询</li>
      </ul>
    </div>
  </div>
</template>
<script>
import HeaderBar from '../components/header/index.vue';
import { test } from '../service/index';

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
    // this.getData();
    // console.log(111111);
  },
  methods: {
    getData() {
      test().then(({ status, data }) => {
        if (status === 200) {
          console.log(data);
        }
      }).catch((err) => {
        console.log(err);
      });
    }
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

</style>