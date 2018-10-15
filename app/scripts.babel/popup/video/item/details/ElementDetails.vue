<template>
  <div class="details">
    <div>{{ video.id }}</div>
    <div>{{ video.paused }}</div>
    <div>{{ video.src }}</div>
  </div>
</template>

<script>
export default {
  name: "ElementDetails",
  props: {
    video: {
      required: true,
      default: () => {}
    }
  }
};
</script>

<style scoped>
.details {
  flex-direction: row;
  align-self: flex-start;
  font-size: 14px;
}
</style>
