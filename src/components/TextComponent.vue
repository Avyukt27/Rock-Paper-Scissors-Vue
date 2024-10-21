<script setup lang="ts">
defineProps({
    "message": { type: String, required: true },
})
</script>

<template>
    <h1 class="font-custom-sans self-center justify-self-center text-5xl">{{ message }}</h1>
</template>