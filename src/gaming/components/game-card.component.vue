<script>
import {Game} from "../models/game.entity.js";
import {GamingApiService} from "../../gaming/services/gaming-api.service.js"


export default{
  name:"game-card",
  props:{
    game: Game
  },
  data(){
    return {
      newsApi: new GamingApiService()
    }
  },
  methods: {
    redirectToGame() {
      window.open(this.game.freetogame_profile_url, "_blank");
    }
  }
}
</script>
<template>
  <pv-card>
    <template #header>
      <p>{{ game.id }}</p>
    </template>
    <template #title>
      <p>{{ game.title }}</p>
    </template>
    <template #content>
      <div class="game-details">
        <p>{{ game.short_description }}</p>
        <div class="game-info">
          <div>
            <img :src="game.thumbnail" :alt="game.title">
          </div>
          <div class="info-text">
            <p><strong>Platform:</strong> {{ game.platform }}</p>
            <p><strong>Publisher:</strong> {{ game.publisher }}</p>
            <p><strong>Developer:</strong> {{ game.developer }}</p>
            <p><strong>Release Date:</strong> {{ game.release_date }}</p>
          </div>
        </div>
        <div>
          <pv-button @click="redirectToGame" target="_blank" label="Enter Game" />
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.game-details {
  display: flex;
  flex-direction: column;
}

.game-info {
  display: flex;
  align-items: center;
}

.game-info img {
  max-width: 100px;
  margin-right: 20px;
}

.info-text {
  display: flex;

  flex-direction: column;
}

.info-text p {
  margin: 5px 0;
}
</style>
