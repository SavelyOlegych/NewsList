<template>
  <h1 class="main__title">Добавить запись</h1>
  <CreateForm/>
</template>

<script>
import CreateForm from "@/components/CreateForm.vue";

export default {
  name: "CreatePage",
  components: { CreateForm },
};
</script>