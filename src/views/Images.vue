<template>
  <div class="wrapper">
    <div class="column">
      <img src="../assets/weit.jpg">
      <img src="../assets/hoch.jpg">
      <img src="../assets/hoch.jpg">
    </div>
    <div class="column">
      <img src="../assets/hoch.jpg">
      <img src="../assets/weit.jpg">
      <img src="../assets/hoch.jpg">
    </div>
    <div class="column">
      <img src="../assets/weit.jpg">
      <img src="../assets/weit.jpg">
      <img src="../assets/hoch.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Images'
}
</script>
<style>
.wrapper {
  max-width: 1280px;
  width: 100%;
  display: flex;
  margin: auto;
}
.column {
  display: flex;
  flex-direction: column;
}
.column img {
  width: 100%;
  padding: 0.25rem;
}

@media only screen and (max-width: 1025px) {
.wrapper {
  flex-wrap: wrap;
}
}
</style>
