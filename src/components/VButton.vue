<template>
  <button class="button" type="button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "VButton",
};
</script>

<style lang="scss" scoped>
.button {
  @include flex(center, center);
  height: 40px;
  cursor: pointer;
  transition: all .2s;
}
</style>