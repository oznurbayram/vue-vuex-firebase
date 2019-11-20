<template>
  <div>{{ drinkName }}</div>
</template>

<script>
export default {
  created() {},

  data() {
    return {
      drinkName: this.$route.params.name
    };
  }
};
</script>
