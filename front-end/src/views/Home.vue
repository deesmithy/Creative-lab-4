<template>
<section>
  <div class="home">
    <div class="home-header">
      <div class="home-header-image">
        <img src="../../public/images/group-image.png" alt="Group image." />
      </div>
    </div>
    <div class="lab-video-intro">
      <div class="lab-video-intro-video">
        <h1>Introduction to our Group</h1>
        <iframe src="https://www.youtube.com/embed/RTuHYkou8C8"></iframe>
      </div>
    </div>

    <div class="contact-group">
      <h1>Contact us</h1>
      <div class="contact-professor">
        <p>
          Contact Professor David Allred:
          <a href="https://www.gmail.com" target="_blank">Email here</a>.
        </p>
      </div>
      <a id="cv-button" href="https://physics.byu.edu/faculty/Allred/vitae" target="_blank">Curriculum Vitae</a>
    </div>
  </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>


<style scoped>
.home-header-image img {
  width: 100%;
}

.lab-video-intro {
  width: 100%;
  display: flex;
  justify-content: center;
  
}
.lab-video-intro-video {
  width: 100%;
  align-content: space-around;
  max-width: 700px;
  padding: 5%;  
}
.lab-video-intro-video h1 {
  text-align: center;
}
.lab-video-intro-video iframe {
  
  width: 100%;
  height: 350px;
}
.navbar {
  background-color: darkblue;
}
.home {
  background-color: rgba(236, 236, 236, 0.849)
}

.contact-group {
  padding: 50px;
  background: white;
  
}
.contact-group h1 {
  text-align: center;
}

.contact-professor {
  padding: 10px;
}

#cv-button {
  color: white;
  padding: 20px;
  border-radius: 12px;
  background-color:  #032d60;
  text-decoration: none;
  text-align: center;
}


</style>
