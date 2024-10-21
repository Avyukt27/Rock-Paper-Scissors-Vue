<script setup lang="ts">
import IconButton from './components/IconButton.vue';
import { ref } from 'vue';
import type { Ref } from 'vue';

const CHOICES: Array<string> = ['🪨', '📄', '✂️'];

const playerChoice: Ref<string> = ref('');
const aiChoice: Ref<string> = ref('');

function setRock(): void {
  playerChoice.value = '🪨';
  setAiChoice();
}

function setPaper(): void {
  playerChoice.value = '📄';
  setAiChoice();
}

function setScissors(): void {
  playerChoice.value = '✂️';
  setAiChoice();
}

function setAiChoice(): void {
  aiChoice.value = CHOICES[Math.floor(Math.random() * 3)];
  console.log(CHOICES, playerChoice.value, aiChoice.value);
}
</script>

<template>
  <div class="bg-black text-slate-50 min-h-screen min-w-full grid grid-cols-3 grid-rows-7 gap-3 p-3">
    <IconButton bgColor="bg-gray-500" message="🪨" @click="setRock" />
    <IconButton bgColor="bg-slate-50" message="📄" @click="setPaper" />
    <IconButton bgColor="bg-blue-500" message="✂️" @click="setScissors" />
  </div>
</template>
