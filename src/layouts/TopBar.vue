<template>
  <div>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      color="white"
      elevation="0"
      height="80"
    >
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <div class="hidden-sm-and-down">
        <v-btn text class="black--text text-capitalize topBar"> Home </v-btn>

        <v-btn color="primary" class="mx-5 text-capitalize manage"
          >Manage Jobs</v-btn
        >

        <v-btn text class="topBar text-capitalize">Business</v-btn>
      </div>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div class="d-flex">
        <img
          :src="require('../assets/logo.svg')"
          width="30"
          class="mt-2"
          lazy-load
        />
        <p class="primary--text subtitle mt-8 ml-2">Publish Jobs</p>
      </div>
      <v-toolbar class="hidden-sm-and-down elevation-0" color="transparent">
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <img src="../assets/night-mode 1.svg" width="20" alt="" />
          <img src="../assets/bell 1.svg" width="20" class="mx-4" alt="" />
          <v-avatar size="40" class="mt-2"
            ><img src="../assets/Ellipse 1.svg" alt=""
          /></v-avatar>
        </v-toolbar-items>
      </v-toolbar>
    </v-app-bar>

    <v-navigation-drawer  v-model="drawer" absolute temporary>
      
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      
     
    };
  },
 
};
</script>

<style scoped></style>
