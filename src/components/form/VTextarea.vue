<template>
  <div class="textarea-element">
    <div class="textarea-element__count">Символов: {{ modelValue.length }}</div>
    <label class="textarea-element__label">
      <span class="textarea-element__text">{{ fieldName }}</span>
      
      <textarea
        class="textarea-element__textarea"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.currentTarget.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "VTextarea",
  props: {
    fieldName: String,
    modelValue: String,
  }
};
</script>

<style lang="scss" scoped>
.textarea-element {
  position: relative;
  
  &__count {
    position: absolute;
    top: 0;
    right: 0;
    color: $greyColor;
  }
  
  &__textarea {
    width: 100%;
    padding: 10px 10px;
    margin-top: 3px;
    border-radius: 5px;
    border: 1px solid $blackColor;
    resize: vertical;
    outline: none;
  }
}
</style>