<template>
  <div>
    <router-link :to="testDrinkDetail">
      {{ drink.name }}
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Drink",
  props: {
    drink: {
      type: Object
    }
  },
  computed: {
    testDrinkDetail() {
      return `/drink/${this.drink.name}`;
    }
  }
};
</script>
