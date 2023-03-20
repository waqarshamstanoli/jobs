<template>
  <div>
    <div class="">
      <Top-bar class="mb-4"></Top-bar>

      <dashboard-content class="mt-16"></dashboard-content>
    </div>
  </div>
</template>

<script>
import DashboardContent from "../components/ContentView.vue";
import TopBar from "../layouts/TopBar.vue";

export default {
  components: {
    DashboardContent,
    TopBar,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(../assets/Montserrat/static/Montserrat-Regular.ttf) format("truetype");
}
.v-application {
  font-family: "Montserrat", sans-serif !important;
}
.v-application .subtitle-2 {
  font-family: "Montserrat", sans-serif !important;
  color: #787777 !important;
}
.v-card__title {
  font-family: "Montserrat", sans-serif !important;
  font-size: 24px !important;
  font-weight: 500 !important;
}
.v-card__subtitle {
  font-family: "Montserrat", sans-serif !important;
  color: #787777 !important;
  font-size: 16px !important;
  font-weight: 500 !important;
}
p {
  font-family: "Montserrat", sans-serif !important;
}
.box {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  padding: 5px 5px;
}
.topBar.v-btn.v-size--default {
  font-weight: 400 !important;
  font-size: 12px !important;
  color: #787777 !important;
  font-family: "Montserrat", sans-serif !important;
}
.manage.v-btn.v-size--default {
  font-weight: 400 !important;
  font-size: 12px !important;
  font-family: "Montserrat", sans-serif !important;
}
.v-btn.v-size--default {
  font-weight: 500 !important;
  font-size: 16px !important;
  font-family: "Montserrat", sans-serif !important;
}
.v-btn:not(.v-btn--round).v-size--large {
  border-radius: 10px !important;
  height: 50px !important;
  min-width: 168px !important;
}
.test.v-text-field--outlined > .v-input__control > .v-input__slot {
  width: 200px !important;
  margin-left: 50px;
}
.v-text-field--outlined > .v-input__control > .v-input__slot {
  width: 100% !important;
  padding-right: 0px !important;
}
.inner.v-text-field--enclosed .v-input__append-inner,
.v-text-field--enclosed .v-input__append-outer {
  margin-top: 0px !important;
  margin-left: 20px !important;
}
.v-text-field--filled.v-input--dense > .v-input__control > .v-input__slot,
.v-text-field--full-width.v-input--dense > .v-input__control > .v-input__slot,
.v-text-field--outlined.v-input--dense > .v-input__control > .v-input__slot {
  min-height: 50px !important;
  max-width: 100% !important;
  background-color: #8477fa !important;
  color: white !important;
}
.card-actions {
  position: absolute;
  bottom: 0;
  right: 0;
}
.v-input__append-inner {
  color: white !important;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #787777;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #8477fa;
}

input:focus + .slider {
  box-shadow: 0 0 1px #8477fa;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
