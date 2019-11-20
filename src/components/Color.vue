<template>
  <div>
    {{ color.category }}
  </div>
</template>

<script>
export default {
  name: "Color",
  data() {
    return {};
  },
  methods() {},
  props: {
    color: {
      type: Object,
      required: true
    }
  }
};
</script>
