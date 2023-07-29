<template>
  <main class="container-fluid">
    <section class="row vh-100">
      <div class="col-lg-4 nav">
        <Nav />
      </div>
      <div class="col-lg-8 main">
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
  min-height: 100%;
  margin: 0;
  padding: 0;

  border-right: solid var(--light-gray);
}

.main {
  background-color: var(--dark-gray);
}
</style>
