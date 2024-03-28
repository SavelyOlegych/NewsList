<template>
  <label class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.currentTarget.checked)"
    >
    <span class="checkbox__text">{{ fieldName }}</span>
  </label>
</template>

<script>
export default {
  name: "VCheckbox",
  props: {
    fieldName: String,
    modelValue: Boolean,
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;

  &__input {
    height: 17px;
    width: 17px;
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>