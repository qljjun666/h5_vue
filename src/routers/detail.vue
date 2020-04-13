<template>
  <div>
    <header-bar title="详情" />
    <div class="content">
      {{ msg }}
    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/header/index.vue';
export default {
  name: 'Detail',
  components: {
    HeaderBar
  },
  data() {
    return {
      msg: ''
    };
  },
  created() {
    this.msg = this.$route.query.id;
  }
};
</script>

<style>
.content {
  padding-top: 45px;
}
</style>