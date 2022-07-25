<template>
  <div class="wrapper">
    <div class="info">
      <div>Personal Portfolio</div>
      <div>Simon Wiesner</div>
      <div>3D Artist / Architect Ba UAS Zürich</div>
    </div>
    <p></p>
    <div class="social">
      <div class="social-item">Mail</div>
      <div class="social-item">LI</div>
      <div class="social-item">AS</div>
      <div class="social-item">IG</div>
    </div>
  </div>
</template>

<style scoped>
#app {
}
.wrapper {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info {
  text-align: center;
  text-transform: uppercase;
}
.social-item {
  border-radius: 50%;
  background: var(--grey);
  color: var(--white);
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.social {
  display: flex;
  width: 16rem;
  justify-items: s;
  justify-content: space-between;
}
</style>
