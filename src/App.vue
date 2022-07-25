<template>
  <div id="app">
    <div id="nav">
      <div class="left">
        <router-link to="/">Images</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="right">
        <span class="simon-s">S</span>
        <span class="simon-l">SIMON</span>
        <span class="wiesner-s">W</span>
        <span class="wiesner-l">WIESNER</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
:root {
  --black: #131313;
  --grey: #616161;
  --whiteWiss: #ffffff;
}

html, body {
  margin: 0;
  padding: 0;
}

* {
/*  font-family: 'Helvetica Neue';*/
  font-family: Raleway;
  font-weight: lighter;
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#nav {
  /*height: 2rem;*/
  font-size: 2rem;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

#nav a.router-link-exact-active {
  color: var(--black);
}
#nav a {
  text-decoration: none !important;
  margin: 2rem;
  margin-left: 0;
  color: inherit;
  color: var(--grey);
}
.left, .right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.wiesner-s, .wiesner-l {
  font-weight: 500;
  margin-left: 1px;
}

.simon-s, .wiesner-s {
  display: none;
}

@media only screen and (max-width: 600px) {
  .simon-s, .wiesner-s {
    display: initial;
  }
  .simon-l, .wiesner-l {
    display: none;
  }
}
</style>
