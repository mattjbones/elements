<template>
  <li>
    <e-image />
    <element-details :video="video" />
  </li>
</template>

<style scoped>
li {
  width: 100%;
}
div {
  flex-shrink: 0;
  padding: 2px;
  align-self: center;
}
</style>

<script src='./VideoItem.js'></script>