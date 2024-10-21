<script setup lang="ts">
import ButtonComponent from './components/ButtonComponent.vue';
import TextComponent from './components/TextComponent.vue';
import { ref } from 'vue';
import type { Ref } from 'vue';

const CHOICES: Array<string> = ['🪨', '📄', '✂️'];

const playerChoice: Ref<string> = ref('');
const botChoice: Ref<string> = ref('');
const descision: Ref<string> = ref('');
const played: Ref<boolean> = ref(false);
const playerScore: Ref<number> = ref(0);
const botScore: Ref<number> = ref(0);

function setRock(): void {
  playerChoice.value = '🪨';
  setBotChoice();
}

function setPaper(): void {
  playerChoice.value = '📄';
  setBotChoice();
}

function setScissors(): void {
  playerChoice.value = '✂️';
  setBotChoice();
}

function setBotChoice(): void {
  botChoice.value = CHOICES[Math.floor(Math.random() * 3)];
  played.value = true;
  decide();
}

function decide(): void {
  if (playerChoice.value == '🪨' && botChoice.value == '🪨') { descision.value = 'Tie'; }
  if (playerChoice.value == '📄' && botChoice.value == '📄') { descision.value = 'Tie'; }
  if (playerChoice.value == '✂️' && botChoice.value == '✂️') { descision.value = 'Tie'; }
  if (playerChoice.value == '🪨' && botChoice.value == '✂️') { descision.value = 'Player Wins'; playerScore.value++; }
  if (playerChoice.value == '📄' && botChoice.value == '🪨') { descision.value = 'Player Wins'; playerScore.value++; }
  if (playerChoice.value == '✂️' && botChoice.value == '📄') { descision.value = 'Player Wins'; playerScore.value++; }
  if (playerChoice.value == '🪨' && botChoice.value == '📄') { descision.value = 'Bot Wins'; botScore.value++; }
  if (playerChoice.value == '📄' && botChoice.value == '✂️') { descision.value = 'Bot Wins'; botScore.value++; }
  if (playerChoice.value == '✂️' && botChoice.value == '🪨') { descision.value = 'Bot Wins'; botScore.value++; }
}

function replay(): void {
  playerChoice.value = '';
  botChoice.value = '';
  descision.value = '';
  played.value = false;
}
</script>

<template>
  <div class="bg-black text-slate-50 min-h-screen min-w-full grid grid-cols-3 grid-rows-7 gap-3">
    <ButtonComponent message="🪨" @click="setRock" :disabled="played"
      :class="{ 'hover:shadow-custom-gray': !played }" />
    <ButtonComponent message="📄" @click="setPaper" :disabled="played"
      :class="{ 'hover:shadow-custom-white': !played }" />
    <ButtonComponent message="✂️" @click="setScissors" :disabled="played"
      :class="{ 'hover:shadow-custom-blue': !played }" />
    <ButtonComponent bgColor="bg-gray-400" message="Replay" :disabled="!played"
      :class="['col-start-2 row-start-5 text-black font-custom-sans text-6xl', { 'hover:shadow-custom-replay': played }]"
      @click="replay" />

    <TextComponent message="Player:" />
    <TextComponent message="Bot:" class="col-start-1" />
    <TextComponent :message=playerChoice class="col-start-2 row-start-2" />
    <TextComponent :message=botChoice class="col-start-2" />
    <TextComponent :message=descision class="col-start-2" />
    <TextComponent message="Player Score" class="col-start-1 row-start-6" />
    <TextComponent message="Bot Score" class="col-start-3 row-start-6" />
    <TextComponent :message=playerScore.toString() class="col-start-1 row-start-7" />
    <TextComponent :message=botScore.toString() class="col-start-3 row-start-7" />
  </div>
</template>
