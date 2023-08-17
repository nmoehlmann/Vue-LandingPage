<template>
  <main class="container home-container flex-column slideInLeft">
    <section class="row">
      <div class="col-xxl-4 img-container">
        <!-- <img class="img-fluid my-img" src="src/assets/img/me.png" alt=""> -->
        <img class="img-fluid my-img" src="/meColored.jpg" alt="">
      </div>
      <div class="col-xxl-8 d-flex flex-column text-body gap-4">
        <h1 class="greeting"><span class="neon">N</span>athan <br> <span class="neon">M</span>oehlmann</h1>
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

  @media(max-width: 764px) {
    .my-img {
      margin-top: 8rem;
      height: 30rem;
    }
  }

    .img-container {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .home-container {
      height: 100%;
    }
  }

  @media(max-width: 715px) {
    .greeting {
      font-size: 5rem;
    }
  }

  @media(max-width: 465px) {
    .greeting {
      font-size: 3rem;
    }
  }
</style>
