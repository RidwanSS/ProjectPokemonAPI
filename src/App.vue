<template>
  <div id="app">
    <img src="./assets/Pokemon.png" width="500px" style="margin-top:60px;margin-bottom:60px">
    <div style="margin-bottom:40px">
      <router-link to="/" id="link">Accueil</router-link>
      <router-link to="/catch" id="link">Attrapez-les</router-link>
      <router-view/>
    </div>
    <footer style="background-color: rgb(31,46,91); height: 60px">
      <div style="">
        <p>COPYRIGHT 2021 -  Ridwan API Pokemon Project</p>
      </div>
    </footer>
  </div>
  
</template>

<script>

export default {
  name: 'App',
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(64,95,163);
  height: 100%;
  background-color: rgb(255,203,5);
  /* margin-top: 60px; */
}

#link{
  margin-right:20px; 
  text-decoration:none;
  font-weight: bold;
  font-size: 30px;
}
</style>
