<template>
  <main class="container">
    <section class="row">
      <img class="about-img" src="https://placehold.co/600x400" alt="">
    </section>
    <section class="row mt-5">
      <h1 class="header">Hello!</h1>
    </section>
    <section class="row">
      <article class="col-6 text-light bio">
        <p>
          I am a Software Developer with extensive experience in both front and backend. I love working on complex projects that require methodical planning and execution. Solving difficult problems is what Software Development is all about, and that's what I'm here for. Outside of coding, I enjoy playing piano, videogames, and working out.
        </p>
      </article>
      <div class="col-6 text-light contact">
        <div>
          <p><span class="fw-bold">Age:</span> 20</p>
          <p><span class="fw-bold">Education:</span> Boise CodeWorks</p>
          <p><span class="fw-bold">Email:</span> nathan.moehlmann@gmail.com</p>
          <p><span class="fw-bold">phone:</span> 208-697-7595</p>
        </div>
      </div>
    </section>
    <section class="row">
      <p class="header">Coding Skills</p>
      <div class="skills">
        <li>Vue <i class="mdi mdi-vuejs"></i></li>
        <li>Node <i class="mdi mdi-nodejs"></i></li>
        <li>SQL <i class="mdi mdi-database-search"></i></li>
        <li>C# <i class="mdi mdi-dot-net"></i></li>
        <li>HTML <i class="mdi mdi-language-html5"></i> / CSS <i class="mdi mdi-language-css3"></i></li>
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

  .header {
    color: whitesmoke;
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  .contact {
    display: flex;
    justify-content: center;

    font-size: 1.5rem;
  }

  .bio {
    display: flex;
    justify-content: center;
    
    font-size: 1.4rem;
    line-height: 2.5rem;
  }

  .skills {
    color: whitesmoke;
    font-size: 1.5rem;
  }
</style>
