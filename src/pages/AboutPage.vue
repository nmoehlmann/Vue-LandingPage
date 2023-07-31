<template>
  <main class="container">
    <!-- <section class="row">
      <img class="about-img" src="https://placehold.co/600x400" alt="">
    </section> -->
    <section class="row mt-5">
      <h1 class="hello-header">Hello!</h1>
    </section>
    <section class="row">
      <article class="col-12 text-light bio">
        <p>
          I am a Software Developer with extensive experience in both front and backend. I love working on complex projects that require methodical planning and execution. Solving difficult problems is what Software Development is all about, and that's what I'm here for. Outside of coding, I enjoy playing piano, videogames, and working out.
        </p>
      </article>
    </section>
    <section class="row">
      <div class="col-6 skills">
        <p class="header">Knowledge</p>
        <li>Vue <i class="mdi mdi-vuejs"></i></li>
        <li>Node <i class="mdi mdi-nodejs"></i></li>
        <li>SQL <i class="mdi mdi-database-search"></i></li>
        <li>C# <i class="mdi mdi-dot-net"></i></li>
        <li>HTML <i class="mdi mdi-language-html5"></i> / CSS <i class="mdi mdi-language-css3"></i></li>
      </div>
      <div class="col-6 text-light contact">
        <div>
          <p class="header">Contact</p>
          <p><span class="fw-bold">Age:</span> 20</p>
          <p><span class="fw-bold">Education:</span> Boise CodeWorks</p>
          <p><span class="fw-bold">Email:</span> nathan.moehlmann@gmail.com</p>
          <p><span class="fw-bold">phone:</span> 208-697-7595</p>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-6 education">
        <p class="header">Education</p>
        <p>Boise CodeWorks</p>
        <ul class="education-list">
          <li>Immersive Full Stack</li>
          <li>April 24, 2023 - July 28, 2023</li>
        </ul>
      </div>
      <div class="col-6 experience">
        <p class="header">Experience</p>
        <p>CodeWorks</p>
        <ul class="experience-list">
          <li>Over 450 hours of hands on coding</li>
          <li>Built a multitude of full stack applications</li>
          <li>Created an application that talks to multiple external APIs and its own.</li>
        </ul>
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

  .experience-list {
    font-size: 1.5rem;
  }

  .experience {
    color: whitesmoke;
    font-size: 2rem;
  }

  .education-list {
    color: whitesmoke;
    font-size: 1.5rem;
  }

  .education {
    color: whitesmoke;
    font-size: 2rem;
  }

  .hello-header {
    font-size: 5rem;
    color: whitesmoke;
    margin-bottom: 2rem;
  }
  .about-img {
    height: 50rem;
    object-fit: contain;
  }

  .header {
    color: whitesmoke;
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  .contact {
    display: flex;
    font-size: 1.5rem;

    border-bottom: solid var(--light-gray);
    margin-bottom: 1rem;
  }

  .bio {
    display: flex;
    justify-content: center;
    
    font-size: 1.4rem;
    line-height: 2.5rem;

    border-bottom: solid var(--light-gray);
    margin-bottom: 1rem;
  }

  .skills {
    color: whitesmoke;
    font-size: 1.5rem;

    border-bottom: solid var(--light-gray);
    margin-bottom: 1rem;
  }
</style>
