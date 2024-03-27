<template>
  <ul v-if="news.length > 0" class="news-list">
    <li
      v-for="item in news"
      :key="item.id"
      class="news-list__item"
    >
      <div class="news-list__item-content">
        <h2 class="news-list__item-title" @click="toggleItemText">{{ item.id }}. {{ item.title }}</h2>
        <div class="news-list__item-author">id автора: {{ item.userId }}</div>
        <div class="news-list__item-text-wrapper">
          <div class="news-list__item-text">{{ item.body }}</div>
        </div>
      </div>
      <VButton class="news-list__item-delete-button" @click="openDeletePopup(item)">Удалить</VButton>
    </li>
  </ul>
  <div v-else class="preloader"></div>
  <Transition name="fade">
    <DeletePopup
      v-if="showDeletePopup"
      :newsItem="currentNewsItem"
      @closeDeletePopup="closeDeletePopup"
      @deleteNewsItem="deleteNewsItem"
    />
  </Transition>
</template>

<script>
import axios from "axios";
import VButton from "@/components/VButton.vue";
import DeletePopup from "@/components/DeletePopup.vue";

export default {
  name: "NewsList",
  components: { DeletePopup, VButton },
  data() {
    return {
      news: [],
      showDeletePopup: false,
      currentNewsItem: {},
    }
  },
  methods: {
    async getNews() {
      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.news = data;
      } catch (error) {
        console.log(error);
      }
    },
    toggleItemText(event) {
      event.currentTarget.closest(".news-list__item-content")
        .querySelector(".news-list__item-text-wrapper")
        .classList.toggle("news-list__item-text-wrapper--visible");
    },
    openDeletePopup(item) {
      this.currentNewsItem = item;
      document.body.style.overflow = "hidden";
      this.showDeletePopup = true;
    },
    closeDeletePopup() {
      this.showDeletePopup = false;
      document.body.style.removeProperty("overflow");
    },
    async deleteNewsItem(newsItemId) {
      this.closeDeletePopup();
      
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${newsItemId}`);

        this.news.splice(
          this.news.findIndex(item => item.id === newsItemId),
          1
        );
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.getNews();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/preloader";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.news-list {
  &__item {
    margin-bottom: 20px;
    @include flex(normal, flex-start);
    
    &-content {
      margin-right: auto;
    }
    
    &-title {
      cursor: pointer;
    }
    
    &-author {
      font-style: italic;
      color: $greyColor;
    }
    
    &-text-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
      transition: grid-template-rows .5s;

      &--visible {
        grid-template-rows: 1fr;
      }
    }
    
    &-text {      
      min-height: 0;
    }
    
    &-delete-button {
      margin-left: 15px;
      width: 100px;
      flex-shrink: 0;
      border: 2px solid $redColor;
      background-color: $redColor;
      color: $lightGreyColor;
      
      &:hover {
        background-color: $lightGreyColor;
        color: $redColor;
      }
    }
  }
}
</style>