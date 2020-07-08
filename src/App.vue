<template>
  <div id="app">
    <b-container class="py-4">
      <div class="d-flex flex-column align-items-center">
        <div class="mb-2">
          <img width="240" height="102" alt="logo" src="./assets/star-wars-logo.png">
        </div>
        <h1 class="font-weight-bold">Favourite heroes project</h1>
        <b-nav>
          <b-nav-item><router-link :to="{ name: 'home'} ">Home</router-link></b-nav-item>
          <b-nav-item><router-link :to="{ name: 'favourite'} ">Favourite</router-link></b-nav-item>
        </b-nav>
      </div>
      <router-view/>
    </b-container>
  </div>
</template>

<style lang="scss">
html {
  font-size: 16px;
}
a {
  color: white;
  &:hover {
    color: white;
  }
}
body {
  background-size: cover;
  background: fixed #080808 url('./assets/star-wars-bg.jpg') 50% 50% no-repeat;
  font-family: 'New Gothic', Helvetica, Arial, sans-serif;
  color: white;
}
</style>
