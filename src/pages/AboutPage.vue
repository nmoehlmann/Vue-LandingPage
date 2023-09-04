<template>
  <main class="container">
    <!-- <section class="row">
      <img class="about-img" src="https://placehold.co/600x400" alt="">
    </section> -->
    <section class="row mt-5">
      <h1 class="hello-header slideInLeft font-raleway">Hello!</h1>
    </section>
    <section class="row">
      <article class="col-12 text-light bio fadeIn">
        <!-- <p class="font-raleway">
          I am a Software Developer with extensive experience in both front and backend. I love working on complex projects that require methodical planning and execution. Solving difficult problems is what Software Development is all about, and that's what I'm here for. Outside of coding, I enjoy playing piano, videogames, and working out.
        </p> -->
        <p class="font-raleway">
          I am an aspiring full-stack software developer driven by a passion for crafting web
          applications across diverse frameworks and programming languages. I am a quick
          learner with a proven ability to adapt to new technologies and a track record of
          developing innovative projects from conception to implementation.
        </p>
      </article>
    </section>
    <section class="row">
      <div class="col-md-6 skills slideInLeftSkills p-4">
        <p class="header font-raleway">Proficient With</p>
        <li>Vue <i class="mdi mdi-vuejs"></i></li>
        <li>Node / Express <i class="mdi mdi-nodejs"></i></li>
        <li>ASP.NET / C#</li>
        <li>HTML <i class="mdi mdi-language-html5"></i> / CSS <i class="mdi mdi-language-css3"></i></li>
        <li>SQL <i class="mdi mdi-database-search"></i></li>
        <li>MySQL <i class="mdi mdi-dolphin"></i></li>
        <li>MSSQL <i class="mdi mdi-microsoft"></i></li>
        <li>Bootstrap <i class="mdi mdi-bootstrap"></i> / Tailwind <i class="mdi mdi-tailwind"></i></li>
        <li>Docker <i class="mdi mdi-docker"></i></li>
      </div>
      <div class="col-md-6 text-light contact slideInLeftContact p-4">
        <div>
          <p class="header font-raleway">Contact</p>
          <p><span class="fw-bold">Education:</span> Boise CodeWorks</p>
          <p><span class="fw-bold">Email:</span> nathan.moehlmann@gmail.com</p>
          <p><span class="fw-bold">phone:</span> 208-697-7595</p>
        </div>
      </div>
    </section>
    <section class="row mb-5">
      <div class="col-md-6 education slideInLeftEducation">
        <p class="header font-raleway">Education</p>
        <p>Boise CodeWorks</p>
        <ul class="education-list">
          <li>Immersive Full Stack Software Development</li>
          <li>April 24, 2023 - July 28, 2023</li>
        </ul>
      </div>
      <div class="col-md-6 experience slideInLeftExperience">
        <p class="header font-raleway">Experience</p>
        <p>CodeWorks</p>
        <ul class="experience-list">
          <li>Designed and developed a variety of full-stack applications, showcasing versatility in designing functional and user-centric solutions.</li>
          <li>Collaborated with teams to design and develop applications, fostering efficient teamwork and achieving project goals.</li>
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

  .slideInLeftSkills {
    animation-name: fadeIn;
    animation-duration: 1.5s;
  }

  .slideInLeftContact {
    animation-name: fadeIn;
    animation-duration: 2s;
  }
  .slideInLeftEducation {
    animation-name: fadeIn;
    animation-duration: 2.5s;
  }
  .slideInLeftExperience {
    animation-name: fadeIn;
    animation-duration: 3s;
  }

  @media(max-width: 766px) {
    .education {
      border-bottom: solid var(--light-gray)
    }
  }

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
    color: #05D9FF;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  .about-img {
    height: 50rem;
    object-fit: contain;
  }

  .header {
    color: #05D9FF;
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  .contact {
    padding-bottom: 4rem;
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
