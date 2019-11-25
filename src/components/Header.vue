<template>
  <div class="main-header-container">
    <a href="http://ulutasmakine.com/" target="_blank"></a>
    <ul>
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
        <VuexDropdown
          :onSelect="handleChangedropdown($event)"
          :options="options"
          :classNames="['wrapper']"
        />
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
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      options: [
        {
          label: "makina1",
          value: "makina1"
        },
        {
          label: "makina2",
          value: "makina2"
        }
      ],
      selected: { label: "makina1", value: "makina1" }
    };
  },
  methods: {
    handleChangedropdown() {
      console.log("test");
    }
  }
};
</script>

<style lang="scss">
.main-header-container {
  background-color: #111;
  min-height: 80px;
  text-align: center;
  padding-top: 25px;

  &__sub-menu {
    cursor: pointer;
    &__tab {
      color: #f3f3f3;
    }
  }
}
</style>
