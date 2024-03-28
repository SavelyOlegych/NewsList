<template>
  <div class="delete-popup" @click.self="closePopup">
    <div class="delete-popup__content">
      <div class="delete-popup__text">
        Вы уверены, что хотите удалить новость "{{ newsItem.title }}"?
      </div>
      <div class="delete-popup__buttons">
        <VButton
          class="delete-popup__button"
          @click="closePopup"
        >
          Нет
        </VButton>
        <VButton
          class="delete-popup__button"
          theme="red"
          @click="$emit('deleteNewsItem', newsItem.id)"
        >
          Да
        </VButton>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton.vue";

export default {
  name: "DeletePopup",
  components: { VButton },
  props: {
    newsItem: Object
  },
  methods: {
    closePopup() {
      this.$emit("closeDeletePopup");
    }
  },
};
</script>

<style lang="scss" scoped>
.delete-popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  @include flex(center, center);

  &__content {
    background-color: $lightGreyColor;
    padding: 20px;
    width: 400px;
    height: 200px;
    @include flex(space-between);
    flex-direction: column;
  }
  
  &__text {
    font-weight: 700;
  }
  
  &__buttons {
    display: flex;
    gap: 20px;
  }
  
  &__button {
    width: 100%;
  }
}
</style>