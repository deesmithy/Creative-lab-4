

<template>
  <section>
    <div class="all-projects-container">
      <div class="project-container">
        <div class="project-header">
          <h1>Aluminum Mirror Storage</h1>
          <h3>Authors: Merlin, Donovan, Kendall</h3>
        </div>
        <div class="project-description">
          <p>
            We are looking at the effects of different storage conditions on the
            degredation of bare aluminum mirrors. We are currently studying
            storage in low oxygen and cryogenic environments such as LO2, LN2,
            Hexane, Dry Ice, and Argon. Our work includes Ellipsometry, AFM, and
            SEM. Look for us at upcoming astronomical society meetings.
          </p>
        </div>
      </div>
      <div class="project-container">
        <div class="project-header">
          <h1>Starshade</h1>
          <h3>Authors: Josh, Merlin, Kendall, Tanner</h3>
        </div>
        <div class="project-description">
          <p>
            HabEx missions are our goal. We are looking at triboelectric forces
            for dust mitigation for a starshade project.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
// import axios from "axios";

export default {
  name: "Projects",
  data() {
    return {
      projects: [],
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style scoped>
/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}
.header-title {
  padding: 10px;
  background: rgba(236, 236, 236, 0.849);
  text-align: center;
}
.all-projects-container {
    padding: 10px;
    gap: 10px;
}
.project-container {
  background: rgba(236, 236, 236, 0.849);
  width: 100%-30px;
  padding: 10px;
  display: grid;
  gap: 10px;
}

.person-grid-box {
  height: 350px;
  width: 100%;
  box-shadow: 0 0 5px darkgray;
  background: white;
}

.person-grid-box h2 {
  text-align: center;
}

img {
  width: 100%;
  height: 50%;
}
.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
  justify-content: center;
}
.image img {
  max-width: 100%;
  border-radius: 12px;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .personel-group {
    /* column-count: 4; */
    grid-template-columns: repeat(4, 1fr);
  }
}
/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .personel-group {
    grid-template-columns: repeat(3, 1fr);
    /* column-count: 3; */
  }
}
/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .personel-group {
    /* column-count: 2; */
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 540px) {
  .personel-group {
    /* column-count: 1; */
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>