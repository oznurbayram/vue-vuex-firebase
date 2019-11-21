<template>
  <div>
    <section>
      <Loader v-if="loading" />
      <section class="container py-5">
        <router-link :to="{ path: goToColorList, params: { colors : 'test'  } }"
          >colors</router-link
        >
        <Color v-for="color in this.colors" :color="color" />
        <h1 v-for="category in this.colorsCategory">{{ category.color }}</h1>
        <Drink v-for="drink in this.drinks" :drink="drink" />
      </section>
    </section>
  </div>
</template>

<script>
import Loader from "./Loader.vue";
import Color from "./Color";
import Drink from "./Drink";

export default {
  name: "Home",
  components: { Loader, Color, Drink },
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
      debugger;
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
