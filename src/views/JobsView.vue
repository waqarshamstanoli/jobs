<template>
  <div>
    <v-row class="justify-space-between">
      <v-col cols="12" lg="3" md="4" sm="6" class="pl-0">
        <v-card-title
          >Manage Jobs<img src="../assets/line.svg" class="mx-4" alt="" /><img
            src="../assets/icons8-home-24 1.svg"
            alt=""
        /></v-card-title>
      </v-col>
      <v-col cols="12" lg="2" md="2" sm="6" class="hidden-sm-and-down">
        <v-card-actions>
          <v-btn large class="primary text-capitalize mt-2 ml-auto manage"
            >Add new Job <img src="../assets/loupe 3.svg" class="ml-2" alt=""
          /></v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="3" md="3" sm="12">
        <v-select
          :items="items"
          filled
          label="Filled style"
          dense
          class="select"
          append-icon="mdi-chevron-down"
        ></v-select>
      </v-col>
      <v-col cols="12" lg="4" md="4" sm="12">
        <v-text-field
          outlined
          label="Search jobs"
          prepend-inner-icon="mdi-magnify"
          class="inner pr-0"
        >
          <template #prepend-inner>
            <img src="../assets/search-interface-symbol 1.svg" alt="" />
          </template>
          <template #append>
            <v-btn color="primary" class="py-7 px-12 text-capitalize manage"
              >Search</v-btn
            >
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" lg="5" md="5" sm="12">
        <div class="d-flex hidden-md-and-down">
          <v-select
            :items="items"
            label="Date"
            outlined
            class="shrink test"
            append-icon="mdi-chevron-down"
          ></v-select>
          <v-select
            :items="items"
            label="Company"
            outlined
            class="shrink test"
            append-icon="mdi-chevron-down"
          ></v-select>
          <v-select
            :items="items"
            label="City"
            outlined
            class="shrink test"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
      </v-col>
    </v-row>

    <v-card
      width="60%"
      class="px-2 mt-8 pb-4 elevation-4"
      outlined
      v-for="(job, index) in getAddedJobs"
      :key="index"
    >
      <v-card-text>
        <v-row>
          <v-col cols="12" lg="6" md="12" sm="12">
            <div class="d-flex">
              <img src="../assets/companyLogo.svg" width="50" alt="" />
              <div>
                <v-card-title class="mt-2 pt-0 pb-0 black--text">{{
                  job.title
                }}</v-card-title>
                <v-card-subtitle class="pb-0 mt-1">
                  <img src="../assets/publishJob.svg" alt="" />
                  <span class="mx-2"> {{ job.business.name }}</span
                  ><img src="../assets/link.svg" alt=""
                /></v-card-subtitle>
                <div class="d-flex"></div>
              </div>
            </div>
            <p class="subtitle-2 ml-15 mt-1">
              <img src="../assets/location.svg" alt="" />
              {{ job.city_options[0].title }}
              {{ job.country_options[0].title }}
            </p>
            <div class="d-flex">
              <div class="primary box">
                <img src="../assets/users.svg" alt="" />
              </div>
              <p class="subtitle-2 mt-1 mb-0 ml-2 mr-2">
                200 Application Recieved
              </p>
              <img src="../assets/link.svg" alt="" />
            </div>
            <div class="d-flex mt-2">
              <img src="../assets/user.svg" class="mt-1" alt="" />
              <span class="caption mt-2 ml-2"
                >Posted by {{ job.jobusers[0].username.username }}</span
              >
              <span class="caption primary--text mt-2 ml-2">{{
                jobAdded(job.created_at)
              }}</span>
            </div>
          </v-col>
          <v-col cols="12" lg="6" md="12" sm="12">
            <p
              class="text-right text-capitalize red--text body-2"
              v-if="job.status.status === 'expired'"
            >
              {{ job.status.status }}
            </p>
            <p
              class="text-right text-capitalize darkGreen--text body-2"
              v-if="job.status.status === 'active'"
            >
              {{ job.status.status }}
            </p>
            <p
              class="text-right text-capitalize red--text body-2"
              v-if="job.status.status === 'pending'"
            >
              {{ job.status.status }}
            </p>
            <p
              class="text-right text-capitalize body-2"
              v-if="job.status.status === 'closed'"
            >
              {{ job.status.status }}
            </p>
            <p
              class="text-right text-capitalize orange--text body-2"
              v-if="job.status.status === 'in Draft'"
            >
              {{ job.status.status }}
            </p>

            <p
              class="text-right text-capitalize primary--text body-2"
              v-if="job.status.status === 'in Process'"
            >
              {{ job.status.status }}
            </p>

            <div class="text-right">
              <div class="d-flex justify-end">
                <span v-if="compaigned">Campaign Disabled</span>
                <img
                  src="../assets/Group 49.svg"
                  v-if="compaigned"
                  class="mx-2"
                  alt=""
                />
                <img src="../assets/Group 29.svg" alt="" />
              </div>
              <span v-if="!disable" class="mr-2 mt-2"> Disable Job </span>
              <span v-else class="mr-2 mt-2">Disabled</span>
              <label class="switch mt-4">
                <input type="checkbox" @click="disable = !disable" />
                <span class="slider round"></span>
              </label>
            </div>

            <v-card-actions class="mt-8 card-actions">
              <v-btn
                v-if="
                  job.status.status != 'in Draft' &&
                  job.status.status != 'in Process'
                "
                color=""
                class="ml-auto secondary primary--text text-capitalize mr-4"
                ><img src="../assets/analytics.svg" class="mr-2" alt="" />View
                Analytics</v-btn
              >
              <v-btn
                outlined
                class="ml-auto primary--text text-capitalize mr-4"
                v-if="compaigned"
                ><img src="../assets/LocGr.svg" class="mr-2" alt="" />Compaigned
              </v-btn>
              <v-btn
                class="ml-auto primary white--text text-capitalize mr-4"
                @click="changeButton"
                v-if="!compaigned && job.status.status === 'active'"
                ><img
                  src="../assets/Rectangle 170.svg"
                  class="mr-2"
                  alt=""
                />Compaign now
              </v-btn>
              <v-btn
                class="green gray--text px-6 text-capitalize"
                v-if="
                  job.status.status === 'expired' ||
                  job.status.status === 'closed'
                "
              >
                <img src="../assets/renew.svg" class="mr-2" alt="" /> Renew
                Job</v-btn
              >
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      disable: false,
      compaigned: false,
      DATE:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        "-" +
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
    };
  },
  methods: {
    ...mapActions(["get_jobs"]),
    getJobs() {
      this.get_jobs()
        .then((response) => {
          console.log(response);
        })
        .finally(() => {});
    },
    changeButton() {
      this.compaigned = true;
    },
    jobAdded(date) {
      return moment(date).fromNow();
    },
  },
  computed: {
    ...mapGetters(["getAddedJobs"]),
  },
  mounted() {
    this.getJobs();
  },
};
</script>
<style></style>
