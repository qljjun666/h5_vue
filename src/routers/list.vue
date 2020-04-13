<template>
  <div>
    <header-bar
      title="列表"
      @goToPre="goToPre"
    />
    <div class="content">
      <p @click="goToDetail(msg)">
        {{ msg }}
      </p>
    </div>
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
      msg: ''
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
    goToPre() {
      this.$store.commit('common/update_cachedroutenames', {
        action: 'delete',
        route: this.$options.name
      });
    }
  }
};
</script>

<style>
.content {
  padding-top: 45px;
}
</style>