<template>
  <div style="height: 100%;">
    <keep-alive :include="$store.state.common.cachedRouteNames">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App'
};

</script>