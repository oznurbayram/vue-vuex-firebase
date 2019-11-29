<template>
  <div class="main-header-container">
    <div class="top-header">
      <div>
        <img />
        <label>+90 312 395 11 09</label>
      </div>
    </div>
    <div class="main-header-container__bottom-header">
      <ul>
        <a href="http://ulutasmakine.com/">
          <img style="width: 50px" src="../assets/images/icon.png" />
        </a>
        <li class="main-header-container__sub-menu">
          <router-link
            class="main-header-container__sub-menu__tab"
            :to="{ name: 'Anasayfa' }"
            >Anasayfa</router-link
          >
        </li>
        <li class="main-header-container__sub-menu">
          <router-link
            class="main-header-container__sub-menu__tab"
            :to="{ name: 'About' }"
            >Kurumsal</router-link
          >
        </li>
        <li class="main-header-container__sub-menu">
          <router-link
            class="main-header-container__sub-menu__tab"
            :to="{ name: 'Products' }"
            >Ürünlerimiz</router-link
          >
        </li>
        <li class="main-header-container__sub-menu">
          <router-link
            class="main-header-container__sub-menu__tab"
            :to="{ name: 'References' }"
            >Referanslar</router-link
          >
        </li>
        <li class="main-header-container__sub-menu">
          <router-link
            class="main-header-container__sub-menu__tab"
            :to="{ name: 'Contact' }"
          >
            Bize Ulaşın</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.main-header-container {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  &__top-header {
    width: 100%;
    height: 40px;
    background-color: #222;
    color: #f3f3f3;
  }
  &__bottom-header {
    background-color: #5f7d95;
    height: 85px;
    text-align: center;
    padding-top: 25px;

    &__sub-menu {
      cursor: pointer;
      &__tab {
        color: #f3f3f3;
      }
    }
  }
}
</style>
