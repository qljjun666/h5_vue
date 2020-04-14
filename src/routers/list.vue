<template>
  <div>
    <header-bar title="列表" />
    <div class="content">
      <p
        v-for="(item, index) in list"
        :key="index"
        class="item"
        @click="goToDetail(item)"
      >
        {{ msg }} -- 数据{{ item }}
      </p>
    </div>
    <button
      class="btn"
      @click="addData"
    >
      获取数据
    </button>
  </div>
</template>

<script>
import HeaderBar from '../components/header/index.vue';

export default {
  name: 'List',
  components: {
    HeaderBar
  },
  data() {
    return {
      msg: '',
      list: [1, 2, 3, 4, 5]
    };
  },
  created() {
    this.msg = this.$route.query.type || '';
    console.log('初始化');
  },
  methods: {
    goToDetail(val) {
      this.$router.push({
        path: 'detail',
        query: {
          id: val
        }
      });
    },
    addData() {
      this.list.push(this.list.length + 1);
    }
  }
};
</script>

<style>
.content {
  padding-top: 45px;
}
.item {
  height: 50px;
  font-size: 20px;
}
.btn {
  position: fixed;
  top: 50px;
  right: 0;
  border: none;
  outline: none;
  background-color: orange;
  width: 100px;
  height: 45px;
}
</style>