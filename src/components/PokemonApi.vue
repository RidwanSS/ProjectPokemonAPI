<template>
  <div class="list">
    <h1> Liste des 20 premiers Pokémon </h1>
    <div v-for="info in infos" :key="info.id">
        {{ info.name }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PokemonApi',
  components: {
  },
  data () {
    return {
      infos: null
    }
  },
  mounted () {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {this.infos = response.data.results})
  }
}
</script>

<style>
.list {
  color: rgb(58,93,169);
  margin-top: 60px;
}
</style>
