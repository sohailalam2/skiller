<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  // initialize the local store with all skills
  async beforeMount() {
    await this.doInitialize();
  },
  methods: {
    ...mapActions(['doInitialize']),
  },
};
</script>

<style lang="scss">
  @import "./assets/main";
</style>
