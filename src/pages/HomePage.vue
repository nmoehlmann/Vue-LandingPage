<template>
  <main class="container home-container flex-column">
    <section class="row">
      <div class="col-xxl-4 img-container">
        <img class="img-fluid my-img" src="src/assets/img/me.JPG" alt="">
      </div>
      <div class="col-xxl-8 d-flex flex-column text-body gap-4">
        <h1 class="greeting">Nathan <br> Moehlmann</h1>
        <p class="about-text">Software Developer with a passion for lifelong learning, problem solving, and self improvement.</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
  h1, p {
    margin: 0;
    padding: 0;
  }

  .home-container {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .greeting {
    font-size: 7rem;
    color: whitesmoke;
  }

  .about-text {
    color: whitesmoke;
    font-size: 1.5rem;
  }

  .my-img {
    border-radius: 20%;
  }

  @media(max-width: 1400px) {
    .my-img {
      height: 50rem;
    }

    .img-container {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }
  }
</style>
