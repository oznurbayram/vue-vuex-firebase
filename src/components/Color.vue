<template>
  <div>
    {{ color.color }}
    <section>
      <ColorDetail :color="color"></ColorDetail>
    </section>
  </div>
</template>

<script>
import ColorDetail from "./ColorDetail";

export default {
  name: "Color",
  components: { ColorDetail },
  data() {
    return {};
  },
  methods() {},
  props: {
    color: {
      required: true
    }
  }
};
</script>

<style></style>
