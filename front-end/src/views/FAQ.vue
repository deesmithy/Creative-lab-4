

<template>
  <section>
    <div class="home">
        <h1>Frequently Asked Questions</h1>
      <div class="all-QA-container">
        <div class="QA-container">
          <div class="question-container">
            <p>
              <strong>Q:</strong> Electrostatic adhesion is often the shortest range of the
              adhesion forces. Why should we be concerned about it in space?
            </p>
          </div>
          <div class="answer-container">
            <p>
              <strong>A:</strong> According to numerous papers, the electrostatic adhesion in
              space works very differently than electrostatic adhesion in air.
              For example, the Apollo missions had many difficulties with dust
              clinging to everything it came across (Gaier and Graps 2019). The
              surface gets bombarded by charged particles in a process called
              ‘space weathering’, , this adhesion force varies, in some cases
              increasing by a factor of 1000 (Berkebile, Street, and Gaier
              2011).
            </p>
          </div>
        </div>

        <div class="QA-container">
          <div class="question-container">
            <p><strong>Q:</strong> Why is vacuum important in electrostatic adhesion?</p>
          </div>
          <div class="answer-container">
            <p>
              <strong>A:</strong> Berkebile and Gaier stated that it may be due to the lack of a
              discharging mechanism in vacuum (2012). In air, the molecules will
              make contact with materials and discharge some of the
              triboelectric charging. In vacuum, you don’t get this effect.
            </p>
          </div>
        </div>

        <div class="QA-container">
          <div class="question-container">
            <p><strong>Q:</strong> What does this mean for spacecrafts?</p>
          </div>
          <div class="answer-container">
            <p>
              <strong>A:</strong> Optical scattering experiments for starshades and other
              equipment need to be observed in a space environment, or at least
              10^-6 Torr, according to Gaier and Berkebile (2012).
            </p>
          </div>
        </div>

        <div class="QA-container">
          <div class="question-container">
            <p><strong>Q:</strong> Is fluoride degradation reversible?</p>
          </div>
          <div class="answer-container">
            <p>
              <strong>A:</strong>  When placed back in vacuum or dry conditions, roughness and
              surface patterns seen on SEM don’t change
            </p>
          </div>
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

.home {
    background-color: rgba(236, 236, 236, 0.849);
}
strong {
    font-size: 1.5em;
}

.home h1 {
    text-align: center;
    padding: 10px;
}
.all-QA-container {
    padding: 10px;
}
.question-container p {
    padding: 10px;
    background-color: white;
    border-radius: 20px;
    width: 67%;
    text-align: left;
}

.answer-container {
    display: flex;
    justify-content: right;

}
.answer-container p {
    padding: 10px;
    background-color:  #032d60;;
    border-radius: 20px;
    width: 67%;
    text-align: right;
    color: rgba(236, 236, 236, 0.849);
    

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