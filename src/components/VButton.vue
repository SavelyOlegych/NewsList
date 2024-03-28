<template>
  <button
    class="button"
    :class="'button--' + theme"
    :type="type"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    theme: {
      type: String,
      default: "blue",
    },
    type: {
      type: String,
      default: "button",
    },
  }
};
</script>

<style lang="scss" scoped>
.button {
  @include flex(center, center);
  height: 40px;
  border: 2px solid;
  border-radius: 5px;
  cursor: pointer;
  transition: all .2s;
  
  &--blue {
    border-color: royalblue;
    background-color: royalblue;
    color: $lightGreyColor;

    &:hover {
      background-color: $lightGreyColor;
      color: royalblue;
    }
  }
  
  &--red {
    border-color: $redColor;
    background-color: $redColor;
    color: $lightGreyColor;

    &:hover {
      background-color: $lightGreyColor;
      color: $redColor;
    }
  }
}
</style>