<template>
  <h1 class="main__title">Все новости</h1>
  <NewsList/>
</template>

<script>
import NewsList from "@/components/NewsList.vue";

export default {
  name: "MainPage",
  components: { NewsList },
};
</script>

<style scoped>

</style>