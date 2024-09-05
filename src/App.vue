<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/NavBar.vue";
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-start;
}
</style>
