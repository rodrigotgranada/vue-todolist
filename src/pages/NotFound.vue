<template>
    <div class="container mx-auto p-4 text-center">
      <h1 class="text-4xl font-bold mb-4">404 - Página Não Encontrada</h1>
      <p class="mb-4">A página que você está tentando acessar não existe.</p>
      <router-link to="/" class="text-blue-500">Voltar para Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  