<template>
  <main class="container">
    <section class="row">
      <img class="about-img" src="https://placehold.co/600x400" alt="">
    </section>
    <section class="row mt-5">
      <h1 class="name">Hello!</h1>
    </section>
    <section class="row">
      <article class="col-6 text-light">
        <p>
          Hello, I am a Software Developer with extensive experience in both front and backend. I love working on complex projects that require methodical planning and execution. Solving difficult problems is what Software Development is all about, and that's what I'm here for. Outside of coding, I enjoy playing piano, videogames, and working out.
        </p>
      </article>
      <div class="col-6 text-light">
        
      </div>
      <div class="col-6">

      </div>
    </section>
  </main>
</template>

<script>
export default {
  setup() {
    return {

    }
  }
}
</script>

<style lang="scss">
  .about-img {
    height: 50rem;
    object-fit: contain;
  }

  .name {
    color: whitesmoke;
  }
</style>
