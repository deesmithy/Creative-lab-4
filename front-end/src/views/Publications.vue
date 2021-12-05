

<template>
  <section>
    <div class="all-publications-container">
      <p>We are still working on this website. Please see the scholars Archive for the publications available from our group. </p>
      <a href="https://physics.byu.edu/library/publications/allred/0" target="_blank">Publications</a>
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
.all-publications-container {
    background: rgba(236, 236, 236, 0.849);
    padding: 10px;
    text-align: center;
    
}
p {
    padding: 20px;
}

a {
   color: white;
  padding: 20px;
  border-radius: 12px;
  background-color:  #032d60;
  text-decoration: none;
  text-align: center;
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