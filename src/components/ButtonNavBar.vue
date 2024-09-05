<template>
  <router-link
    :to="link"
    class="text-white mr-4"
    active-class="font-bold underline"
  >
    {{ name }}
  </router-link>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  link: String,
});
</script>

<style scoped>
/* Estilos podem ser personalizados aqui se necessário */
</style>
