<template>
<div id="app">
  <div class="header">
    <div class="title">
      <h1>BYU XUV</h1>
    </div>
    <router-link to="/" tag="li">
      <p>Home</p>
    </router-link>
    <router-link to="/people" tag="li">
      <p>People</p>
    </router-link>
    <router-link to="/projects" tag="li">
      <p>Projects</p>
    </router-link>
    <router-link to="/publications" tag="li">
      <p>Publications</p>
    </router-link>
    <router-link to="/faq" tag="li">
      <p>FAQ</p>
    </router-link>
    
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <router-link to="/admin">Admin</router-link>
    <p> Here is the <a href="https://github.com/BYUCS260/museum-deesmithy.git" target="_blank">github</a> code </p>
  </div>
</div>
</template>




<style>
html {
  box-sizing: border-box;
}
#app {
background: rgba(236, 236, 236, 0.849);
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #032d60;
  color: #fff;
}
.header li {
  color: #fff ;
  padding: 10px;
  list-style-type: none;
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
}

.content {
  /* padding: 20px 100px; */
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #032d60;
  font-size: 12px;
}
.footer p {
  color: #fff;
}

.footer a {
  color: #fff;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
