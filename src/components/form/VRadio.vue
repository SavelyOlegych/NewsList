<template>
  <div class="radio">
    <div class="radio__text">{{ fieldName }}</div>
    <label
      v-for="(text, value) in options"
      :key="value"
      class="radio__label"
    >
      <input
        class="radio__input"
        type="radio"
        :value="value"
        :checked="value === modelValue"
        @change="radioChange(value, $event)"
      >
      <span class="radio__input-text">{{ text }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "VRadio",
  props: {
    fieldName: String,
    options: Object,
    modelValue: String,
  },
  methods: {
    radioChange(value, event) {
      if (event.currentTarget.checked === true) {
        this.$emit("update:modelValue", value)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.radio {
  &__label {
    display: inline-flex;
    
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
  
  &__input {
    margin-right: 5px;
    cursor: pointer;
  }
}
</style>