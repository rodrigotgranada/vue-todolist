<template>
  <nav class="bg-gray-800 p-4">
    <ButtonNavBar name="Home" link="/" />
    <ButtonNavBar name="Sobre" link="/about" />
    <ButtonNavBar name="Contador" link="/counter" />
  </nav>
</template>

<script setup lang="ts">
import ButtonNavBar from "./ButtonNavBar.vue";
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-start;
}
</style>
