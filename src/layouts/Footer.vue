<template>
  <div>
    <v-section class="blue lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" lg="4" md="12" sm="12">
            <v-toolbar-title class="pl-0 ml-0">
              <v-img
                :src="require('../assets/logo.png')"
                width="150"
                class="mt-4"
                lazy-load
              ></v-img>
            </v-toolbar-title>
            <!-- <h4 class="body-2 mt-2">
              Ahdus Technology works to advance the machine elements of digital
              transformation of Enterprise software, machine learning and
              artificial intelligence systems. We develop Enterprise software
              which are used by millions of people around the globe.
            </h4> -->
            <v-text-field
              outlined
              dense
              label="Type Email"
              class="borderRadius mt-5"
            >
            </v-text-field>

            <v-btn tile class="white--text ml-auto accent text-capitalize"
              >Submit</v-btn
            >
          </v-col>
          <v-col cols="12" lg="4" md="6" sm="6">
            <h3 class="mt-16 font-weight-medium ml-14">Services Link</h3>
            <v-list dense color="transparent" class="ml-10">
              <v-list-item v-for="item in items" :key="item" :to="item.to" link>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col cols="12" lg="4" md="12" sm="12">
            <h3 class="mt-16 font-weight-medium ml-4">Information</h3>
            <v-list dense color="transparent">
              <v-list-item class="mb-0">
                <v-list-item-icon class="accent--text font-weight-bold mr-2"
                  >TEL:</v-list-item-icon
                >
                <v-list-item-title
                  >+92 334 3102522
                </v-list-item-title></v-list-item
              >
              <v-list-item class="">
                <v-list-item-icon class="accent--text font-weight-bold mr-2"
                  >INFO:</v-list-item-icon
                >

                <v-list-item-title class="">
                  tahir2522@gmail.com
                </v-list-item-title></v-list-item
              >
              <v-list-item class="">
                <v-list-item-icon class="accent--text font-weight-bold mr-2"
                  >Location:</v-list-item-icon
                >

                <v-list-item-title>
                  143 C PGECHS Phase 2, 54000, Lahore, Pakistan
                  Robert-Bosch-Straße 42, 74072, Heilbronn, Germany
                </v-list-item-title></v-list-item
              >
            </v-list>
            <v-icon color="accent" class="ml-3">mdi-facebook</v-icon>
            <v-icon color="accent" class="mx-1">mdi-twitter</v-icon>

            <v-icon color="accent" class="mx-1">mdi-google-plus</v-icon>

            <v-icon color="accent" class="mx-1">mdi-pinterest</v-icon>
            <v-icon color="accent" class="mx-1">mdi-instagram</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-section>
    <div>
      <span
        >Copyright &copy; {{ new Date().getFullYear() }} All Rights
        Reserved</span
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    changeRoute() {
      this.$router.push({ path: "/" });
    },
  }
};
</script>
<style lang=""></style>
