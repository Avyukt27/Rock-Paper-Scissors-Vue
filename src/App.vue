<script setup>
import IconButton from "./components/IconButton.vue";
import { ref } from "vue";

const playerChoice = ref < string > ('');
</script>

<template>
  <div class="bg-black text-slate-50 min-h-screen min-w-full grid grid-cols-3 grid-rows-7 gap-3 p-3">
    <IconButton bgColor="bg-gray-500" message="🪨" />
    <IconButton bgColor="bg-slate-50" message="📄" />
    <IconButton bgColor="bg-blue-500" message="✂️" />
  </div>
</template>
