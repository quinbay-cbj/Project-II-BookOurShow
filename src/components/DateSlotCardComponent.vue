<template>
  <div class="date-slot-card">
    <div class="date">
      <span class="highlighted">{{ currentDate(i) | filterUIDate }}</span>
    </div>
    <div class="slots">
      <div class="slot" v-for="(slot, index) in movie.slots" :key="index">
        <button
          class="slot-btn"
          :value="slot"
          @click="setSlotAndRedirect(slot, i)"
        >
          {{ slot }}
        </button>
      </div>
    </div>
  </div>
</template>
 
<script src="./scripts/DateSlotCardComponent.js"></script>

<style scoped>
.highlighted {
  color: #151928;
  margin-left: 0.5em;
  padding: 0.5em;
  border-radius: 0.3em;
  background-color: whitesmoke;
  font-size: small;
}
.date-slot-card {
  background-color: rgb(255, 255, 255);
  border-radius: 0.5em;
  height: 15vh;
  border: 0.02em solid rgba(0, 0, 0, 0.091);
  padding: 0.5em;
  transition: width 0.1s, height 0.2s, box-shadow 0.3s;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.date-slot-card:hover {
  background-color: rgb(255, 255, 255);
  box-shadow: 3px 3px 20px rgb(107, 106, 106);
  /* cursor: pointer; */
}

.date {
  width: 20%;
  height: auto;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.slots {
  width: 80%;
  height: auto;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.slots {
  border-left: 1px solid gray;
}
.date {
  color: rgb(48, 48, 48);
  margin-left: 1em;
}
.slot-btn {
  padding: 0.6em 2em;
  margin: 0.1em 1em;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 0.5em;
  background-color: #f9f9f9;
  color: green;
  font-size: small;
  transition: all 0.3s;
  width: 90%;
}
.slot-btn:hover {
  cursor: pointer;
  color: darkgreen;
  background-color: whitesmoke;
  box-shadow: 2px 2px 10px lightgray;
  text-decoration: underline;
}

@media screen and (max-width: 700px) {
  .highlighted {
    color: #151928;
    margin-left: 0.5em;
    padding: 0.5em;
    border-radius: 0.3em;
    background-color: whitesmoke;
    font-size: x-small !important;
  }
  .slot-btn {
    padding: 0.8em 1em;
    margin: 0.1em 1em;
    border: 1px solid rgb(200, 200, 200);
    border-radius: 0.5em;
    background-color: #f9f9f9;
    color: green;
    font-size: xx-small;
    transition: all 0.3s;
    width: 90%;
  }
}

@media screen and (max-width: 500px) {
  .date {
    width: 50%;
  }
  .highlighted{
    font-size: small !important;
  }
  .slots {
    width: 50%;
    height: fit-content;
    height: -moz-fit-content;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: xx-small;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
  }
  .slot-btn {
    font-size: xx-small;
  }
}
</style>