<template>
  <Sidebar/>
  <main class="main">
    <RouterView/>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: { Sidebar },
}
</script>

<style lang="scss">
@import "@/assets/scss/base";
</style>
