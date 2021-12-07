<template>
  <div >
    <br/>
    <br/>
    <h1>Attrapez votre Pokemon !</h1>
    <br/>
    <br/>
    <section>
      <div class="bloc">
        
        <p>
          Entrez l'identifiant du Pokemon que vous voulez attraper :
        </p>
        <input type="number" id="pokeId" placeholder="ID" min="1" max="898" width="100px"/>
        <button v-on:click="pokeCatched" class="button">Rechercher</button>
        <br/>
        <br/>
        <br/>
        
        <div v-if="this.infoPoke">
            <h2>Vous avez attrapé ...</h2>
            <div>
                <img id='src'>
            </div>
            <div>
              <p style="font-weight:bold; font-size: 30px">{{this.infoPoke.name}}</p>
            </div>
            <div>
              <p>Poids : {{this.infoPoke.weight}} lbs</p>
            </div>
            <div>
              <p>Taille : {{this.infoPoke.height}} pouce</p>
            </div>
            
        </div>
      </div>
    </section >
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Attrapez',
    data () {
      return {
          pokemons: null,
          infoPoke: null,
          pokeId: null,
      }
    },
    methods: {
        pokeCatched: function() {
            axios
              .get('https://pokeapi.co/api/v2/pokemon/' + document.getElementById("pokeId").value)
              .then(response => {
                  this.infoPoke = response.data
                  var imgPoke = document.getElementById('src')
                imgPoke.src = this.infoPoke.sprites.front_default})
              .catch(error => console.log(error))
              
        },
    }
}
</script>

<style>
.button{
    border-radius: 0.3em;
    border-color: #053a9c;
}
#pokeId{
    border-radius: 0.3em;
    border-color: #053a9c;
}
.tableCss
{
    border: solid 1px #e6e5e5;
    margin: 0 auto;
}
.tableCss th
{
    background-color: #0094ff;
    color:#fff;
    padding: 10px;
    text-align:center;
}
.tableCss td
{
    border: solid 1px #e6e5e5;
    padding: 10px;
}
</style>
