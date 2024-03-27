<template>
  <aside class="sidebar">
    <div class="sidebar__top">
      <img class="sidebar__avatar" src="@/assets/img/avatar.jpg" alt="avatar">
      <div class="sidebar__user-info">
        <div class="sidebar__user-name">
          Савелий
        </div>
        <div class="sidebar__user-email">
          test@mail.com
        </div>
      </div>
    </div>
    <ul class="sidebar__menu-items">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="sidebar__menu-item"
        :class="{'sidebar__menu-item--selected': $route.path === item.link}"
      >
        <RouterLink class="sidebar__menu-item-link" :to="item.link">
          <img class="sidebar__menu-item-icon" :src="item.icon" :alt="item.name">
          <div class="sidebar__menu-item-name">{{ item.name }}</div>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      menuItems: [
        {
          name: "Все новости",
          link: "/",
          icon: require("@/assets/svg/house.svg")
        },
        {
          name: "Добавить запись",
          link: "/create",
          icon: require("@/assets/svg/pencil.svg")
        },
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background-color: $blackColor;
  color: $lightGreyColor;
  box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);

  &__top {
    @include flex(normal, center);
    padding: 15px;
    border-bottom: 1px solid #4b545c;
  }
  
  &__avatar {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border-radius: 50%;
  }
  
  &__menu-items {
    padding: 10px;
  }
  
  &__menu-item {
    padding: 5px;
    margin-bottom: 10px;
    
    &-link {
      @include flex(normal, center);
      color: $lightGreyColor;
    }
    
    &--selected {
      background-color: rgba(208, 209, 211, 0.2);
    }
    
    &-icon {
      margin-right: 15px;
    }
  }
}
</style>