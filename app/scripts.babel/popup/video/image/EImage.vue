<template>
  <div class="outer" >
    <div class="inner"/>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: () => "regular"
    }
  }
};
</script>


<style scoped>
div {
  display: block;
  background-color: red;
}
.outer {
  margin: 4px 4px 4px 0;
  width: 80px;
}
.inner {
  padding-bottom: 56.5%;
}
</style>
