<template>
  <div class="home">
    <header-bar
      title="首页"
      :show-line="true"
    />
    <div class="content">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          @click="goToList(item)"
        >
          {{ item }}
        </li>
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
      list: [
        '查询1',
        '查询2'
      ]
    };
  },
  created() {
    // this.getData();
    // console.log(111111);
    this.$store.commit('common/update_cachedroutenames', {
      action: 'delete',
      route: 'List'
    });
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
    },
    goToList(val) {
      this.$router.push({
        path: 'list',
        query: {
          type: val
        }
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
li {
  height: 40px;
  font-size: 20px;
}

</style>