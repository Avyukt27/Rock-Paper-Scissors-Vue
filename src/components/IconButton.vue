<script setup lang="ts">
const props = defineProps({
    "bgColor": { type: String, required: true },
    "message": { type: String, required: true, default: '' }
});
</script>

<template>
    <button :class="['text-5xl rounded-md duration-300 no-underline hover:bg-opacity-80', bgColor]" type="button">
        {{ message }}
    </button>
</template>
