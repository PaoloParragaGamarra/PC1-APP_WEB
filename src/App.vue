<script>
import {GamingApiService} from "./gaming/services/gaming-api.service";
import { Game} from "./gaming/models/game.entity.js";
import GameList from "./gaming/components/game-list.component.vue";
import FooterComponent from "@/public/components/footer-component.component.vue";
import Toolbar from "./public/components/toolbar-component.component.vue";
import LanguageSwitcher from "@/public/components/language-switcher.component.vue";
export default {
  name:'App',
  components: {LanguageSwitcher, FooterComponent, GamingApiService, Game,Toolbar,GameList},
  data(){
    return {
      games: [],
      gamesApi: new GamingApiService(),
      errors: []
    }
  },
  created() {
    this.getGames();
  },
  methods:{
    buildGameListFromReponseData(games){
      return games.map(game => new Game(game.id,game.title,game.short_description,game.thumbnail,game.platform,game.publisher,game.developer,game.release_date,game.freetogame_profile_url));
    },
    getGamesForSource(sourceId){
      this.gamesApi.getGamesForSource(sourceId)
          .then(response => {
            let games_json = response.data.games;
            this.games = this.buildGameListFromReponseData(games_json);
            console.log(response.data.games);
            console.log(this.games);
          })
          .catch(e=>{
            this.errors.push(e);
          })
    },
    getGames(){
      this.gamesApi.getGames()
          .then(response => {
            let games_json = response.data;
            this.games = this.buildGameListFromReponseData(games_json);
            console.log(response.data);
            console.log(this.games);
          })
          .catch(e => {
            this.errors.push(e);
          })
    }
  }
}
</script>

<template>
  <div class="app-container">
    <toolbar class ="toolbar"></toolbar>
    <div class="game-list-container">
      <game-list :games="games"></game-list>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<style>
.app-container {
  background-color: red; /* Fondo rojo para el contenedor principal */
}

.toolbar {
  background-color: blueviolet; /* Barra de herramientas negra */
}

.game-list-container {
  margin-top: 20px; /* Ajusta el espacio entre la barra de herramientas y la lista de juegos */
  padding: 0 20px; /* Ajusta el espacio horizontal alrededor de la lista de juegos */
}
</style>




