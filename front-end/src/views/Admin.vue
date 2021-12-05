<template>
  <div class="admin">
    <h1>The Admin Page!</h1>
    <!-- Adding feature -->
    <div class="heading">
      <div class="circle">1</div>
      <h2>Add a group member</h2>
    </div>
    <div class="add">
      <div class="form">
        <h4>Name</h4>
        <input v-model="name" placeholder="Name" />
        <h4>Bio</h4>
        <textarea v-model="bio"> A Brief Bio</textarea>
        <h4>Upload a photo</h4>
        <input type="file" name="photo" @change="fileChanged" />
        <button @click="upload">Save group member</button>
      </div>
      <div class="upload" v-if="addPerson">
        <h2>{{ addPerson.name }}</h2>
        <p>{{ addPerson.bio }}</p>
        <img :src="addPerson.path" />
      </div>
    </div>
    <!-- Editing feature -->
    <div class="heading">
      <div class="circle">2</div>
      <h2>Edit/Delete a group member</h2>
    </div>
    <div class="edit">
      <div class="form">
        <h4>Enter a groupmember's name to edit</h4>
        <input v-model="findName" placeholder="Search" />
        <div class="suggestions" v-if="suggestions.length > 0">
          <div
            class="suggestion"
            v-for="s in suggestions"
            :key="s.id"
            @click="selectPerson(s)"
          >
            {{ s.name }}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findPerson">
        <img :src="findPerson.path"/>
        <h4>Updated Name</h4>
        <input v-model="findPerson.name" />
        <h4>Updated Bio</h4>
        <textarea v-model="findPerson.bio"> Bio</textarea>
        <p></p>
        
      </div>
      <div class="actions" v-if="findPerson">
        <button @click="deletePerson(findPerson)">Delete Group member</button>
        <button @click="editPerson(findPerson)">Save Edits</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Admin",
  data() {
    return {
      name: "",
      file: null,
      bio: "",
      addPerson: "",
      findPerson: "",
      findName: "",
      people: [],
    };
  },
  computed: {
    suggestions() {
      let people = this.people.filter((person) =>
        person.name.toLowerCase().startsWith(this.findName.toLowerCase())
      );
      return people.sort((a, b) => a.name > b.name);
    },
  },

  created() {
    this.getPeople();
  },

  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append("photo", this.file, this.file.name);
        let r1 = await axios.post("/api/photos", formData);
        let r2 = await axios.post("/api/people", {
          name: this.name,
          bio: this.bio,
          path: r1.data.path,
          
        });
        this.addPerson = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getPeople() {
      try {
        let response = await axios.get("/api/people");
        this.people = response.data;
        console.log(this.people);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectPerson(person) {
      this.findName = "";
      this.findPerson = person;
      console.log(person);
      
    },
    async deletePerson(person) {
      try {
        await axios.delete("/api/people/" + person._id);
        this.findPerson = null;
        this.getPeople();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editPerson(person) {
      try {
        await axios.put("/api/people/" + person._id, {
          title: this.findPerson.name,
          description: this.findPerson.bio,
        });
        this.findPerson = null;
        this.getPerson();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>





<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center;
}

/* Form */
input,
textarea,
select,
button {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
}


.form {
  margin-right: 50px;
  padding-left: 50px;
  padding-bottom: 20px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}
/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5bdeff;
  color: #fff;
}

textarea {
  width: 80%;
  min-height: 100px;
}
</style>
