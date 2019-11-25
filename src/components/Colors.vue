<template>
  <div>
  <Header></Header>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: "Colors",
  components: { Header },
  data() {
    return {};
  },
  props: {
    test: {
      required: false
    }
  }
};
</script>
