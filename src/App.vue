<script setup>
import Header from "@/views/components/Header.vue";
import Footer from "@/views/components/Footer.vue";

import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <Header />
  <RouterView />
  <Footer v-if="route.name !== 'map'" />
</template>

<style lang="pcss">
@layer base;
@layer common;

@import url(./assets/css/base.pcss) layer(base);
@import url(./assets/css/common.pcss) layer(common);

#app{
  position: relative;
  overflow-y: auto;
  height: 100%;
  scrollbar-color: rgba(0,0,0,.15) transparent;
  scrollbar-width: thin;
}
</style>
