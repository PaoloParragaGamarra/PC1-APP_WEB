import axios from "axios";

const http = axios.create({
   headers: {
      'X-RapidAPI-Key': '6643c6ee24mshd5171ccc171b4cdp1ebbffjsnb085d3f31986',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
   },
   baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/'
});

export class GamingApiService {
   getGames() {
      return http.get('games');
   }

   getGamesForSource(sourceId) {
      return http.get(`games?platform=${sourceId}`);
   }
}