<template>
  <div class="upcoming-movies-container">
    <div class="upcoming-movies-banner">
      <div class="upcoming-movies-banner-title">
        Upcoming Recommended Movies
      </div>
      <div class="search-div">
        <input
          type="text"
          class="search-bar"
          placeholder="search"
          v-model="searchKey"
          @keyup.enter="searchMovie()"
        />
        <button class="search-btn" :class="[(searchKey===undefined || searchKey === '')? 'disabled' : '']" @click="searchMovie()" :disabled="(searchKey===undefined || searchKey === '')">Search</button>
      </div>
    </div>
    <div class="upcoming-movies-list">
      <p class="movie-list-tag-1" v-if="filteredMovies.length !==0">Your Search Results</p>
      <div class="grid-container" v-if="filteredMovies.length !==0">
        <MovieCardComponent
          v-for="(movie, index) in filteredMovies"
          :key="index"
          :movie="movie"
        ></MovieCardComponent>
      </div>

      <p class="movie-list-tag-2">Upcoming Movies</p>
      <div class="grid-container" v-if="upcomingMovies && upcomingMovies.length">
        <MovieCardComponent
          v-for="(movie, index) in upcomingMovies"
          :key="index"
          :movie="movie"
        ></MovieCardComponent>
      </div>

      <div class="no-movie-card" v-else>
          <div class="message-no-movie">
            <h3>Something went wrong! :(</h3>
          </div>
        </div>
    </div>
  </div>
</template>

<script src="./scripts/UpcomingMoviesComponent.js"></script>

<style scoped>
.disabled{
  background-color: gray !important;
  color: black !important;
}
.no-movie-card{
  height: 40vh;
  width: 100%;
  background-color: whitesmoke;
  color: rgb(108, 108, 108);
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
}

.upcoming-movies-container {
  height: 150vh;
  width: 100vw;
  background-color: #222434;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}
.upcoming-movies-banner {
  background-color: #151928;
  color: white;
  border-radius: 0.5em;
  height: 50vh;
  margin: 1em;
  margin-top: 2em !important;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
}
.upcoming-movies-list {
  border-radius: 0.5em;
  background-color: white;
  margin: 0.5em;
  padding: 1em;
  height: 200vh;
  overflow: scroll;
}

.search-div {
  margin: 0.3em;
  width: 35vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.1em 0.1em;
  background-color: white;
  border-radius: 0.4em;
  flex-wrap: nowrap;
}

.search-bar {
  border: none;
  padding: 0.2em 0.3em;
  width: 80% !important;
  border-radius: 0.5em !important;
  -moz-columns: white;
  columns: white;
  color: rgb(95, 95, 95);
  width: 30vw !important;
  height: 3.5vh !important;
}
.search-bar:focus {
  outline: none !important;
  /* border: 1px solid rgb(171, 169, 169); */
}
.search-btn {
  margin: 0em 0em 0em 0.2em;
  padding: 0.5em 0.6em;
  background-color: #f84464;
  border: none;
  border-radius: 0.5em;
  color: white;
  transition: all 0.3s;
}
.search-btn:hover {
  cursor: pointer;
  background-color: #d52344 !important;
}
.movie-list-tag-1,
.movie-list-tag-2 {
  font-size: large;
  background-color: whitesmoke;
  border-radius: 1em;
  padding: 1em;
}

.grid-container {
  border-radius: 3%;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1em;
  padding: 5vh 5vh;
  scroll-behavior: smooth;
}

/* Media Queries */
@media screen and (max-width: 950px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 700px) {
  .grid-container {
    grid-template-columns: 2fr;
  }
  .search-div {
    margin: 0.3em;
    width: 44vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.1em 0.1em;
    background-color: white;
    border-radius: 0.4em;
    flex-wrap: nowrap;
  }
  .search-bar {
    width: 40vw !important;
  }
}

@media screen and (max-width: 450px) {
  .upcoming-movies-banner-title {
    font-size: large;
  }
  .search-div {
    width: 55vw;
    height: 3.5vh;
  }
  .search-bar {
    height: 3vh !important;
  }
  .search-btn {
    height: 3vh !important;
    padding: 0.3em 0.3em !important;
  }
}

@media screen and (max-width: 300px) {
  .search-div {
    width: 65vw;
    height: 3vh;
  }
  .search-bar {
    height: 2.5vh !important;
    width: 43vw !important;
  }
  .search-btn {
    height: 2.7vh !important;
    padding: 0em 0.3em !important;
  }
  .upcoming-movies-banner-title {
    font-size: small;
    text-align: center;
  }
}
</style>