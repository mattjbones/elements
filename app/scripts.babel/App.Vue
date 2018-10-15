<template>
  <div class="content">
    <h1>Elements</h1>
    <popup></popup>
  </div>
</template>

<script>
import Popup from "./popup/Popup.vue";
export default {
  name: "Elements",
  components: {
    Popup
  }
};
</script>

<style scoped>
h1 {
  font-size: 18px;
}
.content {
  width: 250px;
  max-height: 400px;
  min-height: 300px;
  padding: 10px;
}
</style>
