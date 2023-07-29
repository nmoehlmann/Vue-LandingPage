<template>
  <main class="container-fluid">
    <section class="row vh-100 content-body">
      <div class="col-lg-3 col-md-12 nav">
        <Nav />
      </div>
      <div class="col-lg-9 col-md-12 main">
        <router-view />
      </div>
    </section>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

.nav {
  background-color: black;
  margin: 0;
  padding: 0;
  // position: fixed;
  // width: 30%;

  border-right: solid var(--light-gray);
}

.main {
  background-color: var(--dark-gray);
  // position: relative;
  // left: 30%;
  // width: 70%;
}

@media(max-width: 1000px) {
  
}
</style>
