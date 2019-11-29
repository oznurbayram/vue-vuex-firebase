<template>
  <div class="home">
    <Header></Header>
    <SliderHeader></SliderHeader>
    <Content></Content>
    <section>
      <Loader v-if="loading" />

      <!-- <router-link :to="{ path: goToColorList, params: { test: 'test' } }"
          >colors go to with path</router-link
        >
        <router-link :to="{ name: 'colors', params: { test: 'test' } }"
          >colors go with name</router-link
        >
        <Color v-for="color in this.colors" :color="color" />
        <h1 v-for="category in this.colorsCategory">{{ category.color }}</h1>
        <Drink v-for="drink in this.drinks" :drink="drink" />-->
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Loader from "./Loader.vue";
import Color from "./Color";
import Drink from "./Drink";
import Header from "./Header";
import SliderHeader from "./SliderHeader";
import Footer from "./Footer";
import Content from "./Content";

export default {
  name: "Home",
  components: { Loader, Color, Drink, Header, SliderHeader, Footer, Content },
  data() {
    return {
      loading: true
    };
  },
  created() {
    this.$store.dispatch("fetchColors").then(() => {
      this.$store.dispatch("fetchDrinks").then(() => {
        this.loading = false;
      });
    });
  },
  computed: {
    colors() {
      return this.$store.getters.colors;
    },
    drinks() {
      return this.$store.getters.drinks;
    },
    colorsCategory() {
      return this.$store.getters.colorsCategory;
    },
    goToColorList() {
      return `/colors`;
    }
  }
};
</script>

<style>
.home {
  width: 100%;
}
</style>
