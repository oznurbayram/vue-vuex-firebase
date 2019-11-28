<template>
  <div>
    <Header></Header>
    {{ $route.params.test }}
  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: "Colors",
  components: { Header },
  data() {
    return {};
  }
};
</script>
