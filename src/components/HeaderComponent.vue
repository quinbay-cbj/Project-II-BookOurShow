<template>
  <nav class="nav-bar" id="nav-bar">
    <div class="brand">
      <router-link to="/">
        <p>Book<span class="highlighted-text">Our</span>Show</p>
      </router-link>
    </div>

    <div class="nav-menu">
      <router-link class="navigation-link home-nav-menu" to="/"
        >Home</router-link
      >
      <router-link class="navigation-link" to="/userbookings"
        >Bookings</router-link
      >
      <router-link class="navigation-link" to="/upcomingmovies"
        >Upcoming</router-link
      >
    </div>

    <div class="login-div">
      <!-- <div class="logged-in-user" v-if="isUserLoggedIn() || isLoggedIn">
        Logged in
      </div> -->
      <button @click="logIn()" class="login-btn" v-if="!isUserLoggedIn() && !isLoggedIn">
        Login
      </button>
      <button @click="logOut()" class="login-btn" v-else>Logout</button>
    </div>
  </nav>
</template>


<script src="./scripts/HeaderComponent.js"></script>

<style scoped>
.highlighted-text {
  color: #f84464 !important;
}
.nav-bar {
  overflow: hidden;
  background-color: #151928;
  position: sticky;
  top: 0;
  z-index: 9999;
  height: 10vh;
  padding: 0.4em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.nav-bar .brand {
  font-size: large;
  font-weight: bold;
}

.nav-menu {
  padding: 0.3em;
  border-radius: 0.3em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  width: 50vw;
  align-items: center;
  flex-wrap: nowrap;
}

.nav-menu .navigation-link {
  text-decoration: none;
  color: rgb(211, 211, 211) !important;
  margin: 0 0.5em;
  transition: all 0.5s;
}
.navigation-link:hover {
  text-decoration: underline;
  color: #f84464 !important;
}
.login-div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: small;
}
.logged-in-user {
  color: gray;
  transition: all 0.2s;
}
.logged-in-user:hover {
  color: #f9f9f9;
  cursor: pointer;
}
.login-btn {
  margin: 0.1em 0.8em;
  padding: 0.2em 0.7em;
  background-color: #f84464 !important;
  border: none;
  border-radius: 0.2em;
  color: white;
  transition: all 0.3s;
}

.login-btn:hover {
  cursor: pointer;
  background-color: #d52344 !important;
}
.login-div {
  display: flex;
}
.nav-bar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 1vh 1vw 0 1vw;
  text-decoration: none;
  font-size: 17px;
  transition: all 0.2s;
}
.nav-bar a:hover {
  color: #ffffff;
  cursor: pointer;
}
.nav-menu-button {
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-content: center;
  color: white;
  width: 2em;
}
.nav-menu-button ion-icon {
  margin-left: 33%;
  align-content: center;
}
/* Media Queries */
@media screen and (min-width: 950px) {
  .nav-menu-button {
    display: none;
  }
  .login-btn {
    margin: auto 0.8em;
    padding: 0.4em 1em;
    background-color: #f84464 !important;
    border: none;
    border-radius: 0.5em;
    color: white;
    transition: all 0.3s;
  }
}
@media screen and (max-width: 950px) {
  .nav-menu,
  .navigation-link {
    font-size: small !important;
  }
  .login-div {
    font-size: x-small;
  }
  .login-btn {
    margin: 0.1em 0.5em;
    padding: 0.2em 0.5em;
    background-color: #f84464 !important;
    border: none;
    border-radius: 0.2em;
    color: white;
    transition: all 0.3s;
  }
}

@media screen and (max-width: 500px) {
  .nav-menu {
    margin-right: 0.4em;
    padding: 0.1em;
    border-radius: 0.3em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    width: 40vw;
    align-items: center;
    font-size: xx-small !important;
    flex-wrap: nowrap;
  }
  .nav-menu .navigation-link {
    padding: 0.3em !important;
    font-size: x-small !important;
  }
}
@media screen and (max-width: 900px) {
  .nav-menu-button {
    display: block;
  }
}
@media screen and (max-width: 450px) {
  .home-nav-menu {
    display: none !important;
  }
  .nav-menu {
    font-size: xx-small !important;
  }
  .brand {
    font-size: x-small !important;
  }
  .nav-bar {
    overflow: hidden;
    background-color: #151928;
    position: sticky;
    top: 0;
    z-index: 9999;
    height: 10vh;
    padding: 0.4em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 300px) {
  .nav-bar .brand {
    font-size: x-small !important;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .logged-in-user{
    display: none;
  }
  .login-btn {
    margin: 0.1em 0.3em;
    padding: 0.1em 0.3em;
    background-color: #f84464 !important;
    border: none;
    border-radius: 0.2em;
    color: white;
    transition: all 0.3s;
    font-size: x-small;
  }
}
</style>