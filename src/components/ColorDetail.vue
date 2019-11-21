<template>
  <div>{{ color.code.hex }}</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    color: {
      required: true,
    }
  }
};
</script>
