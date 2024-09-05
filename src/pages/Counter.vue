<template>
  <div class="text-center">
    <p>{{ state.message }} {{ state.count }} vezes</p>
    <button
      @click="increment"
      :class="[
        'bg-blue-500 text-white p-2 rounded',
        { 'opacity-50 cursor-not-allowed': isButtonDisabled },
      ]"
      :disabled="isButtonDisabled"
    >
      {{ isButtonDisabled ? "Bloqueado" : "Clicar" }}
    </button>
    <p v-if="state.count > 5">O contador passou de 5!</p>
  </div>
  <div class="text-center">
    <input v-model="count" type="number" class="border p-1 rounded" />
    <p>Você digitou: {{ count }}</p>
  </div>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>

  <div>
    <p>Formatted Date: {{ formattedDate }}</p>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits,
  onMounted,
  onUpdated,
  reactive,
  ref,
  computed,
  watch,
} from "vue";

// Define props (propriedades passadas para o componente)
const props = defineProps({
  initialCount: {
    type: Number,
    default: 0,
  },
});

// Define emits (eventos que o componente pode emitir)
const emit = defineEmits(["incremented"]);

// Define o estado reativo
const count = ref(props.initialCount);

const state = reactive({
  count: 0,
  message: "Você clicou..",
});

// Define a propriedade para controlar se o botão deve estar desativado
const isButtonDisabled = computed(() => state.count > 5);

const increment = () => {
  state.count++;
  emit("incremented", state.count); // Emitindo o evento 'incremented'
};

// Reage a mudanças na variável 'state.count' usando watch
watch(
  () => state.count,
  (newValue, oldValue) => {
    console.log(`O valor de state.count mudou de ${oldValue} para ${newValue}`);
  }
);

onMounted(() => {
  console.log("Componente foi montado!");
});

onUpdated(() => {
  console.log(`O valor de state.count foi atualizado para: ${state.count}`);
});

const items = ref(["Item 1", "Item 2", "Item 3"]);

const rawDate = ref(new Date());

const formattedDate = computed(() => {
  return rawDate.value.toLocaleDateString("pt-BR");
});
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>
