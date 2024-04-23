<script>
import GameCard from "../../gaming/components/game-card.component.vue";

export default{
  name: "game-list",
  components: {GameCard},
  props:{
    games: Array
  }
}
</script>

<template>
  <div class="game-list">
    <game-card v-for="game in games" :key="game.id" :game="game"></game-card>
  </div>
</template>

<style scoped>
.game-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 50px;
}
</style>
