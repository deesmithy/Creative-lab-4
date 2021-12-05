<template>
<section>

  <div class="header-title">
  <h1>Our Team</h1>
  </div>
  <div class="personel-group" >
    
    <div class="person-grid-box" v-for="person in sortedPeople" :key="person.id">
      <!-- <div class="image"> -->
      <img :src="person.path" alt="person.name">
      <!-- </div> -->
      <div class="info">
        <h2>{{person.name}}</h2>
        <p>{{person.bio}}</p>
      </div>
    </div>
</div>
  </section>
</template>


<script>
import axios from "axios";

export default {
  name: "People",
  data() {
    return {
      people: [],
    };
  },
  created() {
    this.getPeople();
  },
  computed: {
    sortedPeople() {
      let peopleList = this.people
      let sortedList = peopleList.sort((a, b) => a.name > b.name);
      console.log(sortedList);
      return sortedList;
    },
  },
  methods: {
    async getPeople() {
      try {
        let response = await axios.get("/api/people");
        this.people = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
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
   padding:10px;
   background: rgba(236, 236, 236, 0.849);
   text-align: center;
 }
.personel-group {
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

.person-grid-box h2{
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