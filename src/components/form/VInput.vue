<template>
  <label class="input-element">
    <span class="input-element__text">{{ fieldName }}</span>
    <input
      class="input-element__input"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.currentTarget.value)"
    >
  </label>
</template>

<script>
export default {
  name: "VInput",
  props: {
    fieldName: String,
    type: String,
    modelValue: String,
  },
};
</script>

<style lang="scss" scoped>
.input-element {
  display: flex;
  flex-direction: column;
  position: relative;

  &__text {
    margin-bottom: 3px;
  }

  &__input {
    border: 1px solid $blackColor;
    padding: 10px 10px;
    outline: none;
    margin-top: auto;
    border-radius: 5px;
  }
}
</style>