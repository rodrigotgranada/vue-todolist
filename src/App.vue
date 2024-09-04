<template>
  <div>
    <nav class="bg-gray-800 p-4">
      <router-link to="/" class="text-white mr-4" active-class="font-bold underline">Home</router-link>
      <router-link to="/about" class="text-white" active-class="font-bold underline">About</router-link>
    </nav>
    <router-view />
  </div>
</template>


<script setup lang="ts">
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-start;
}
</style>
