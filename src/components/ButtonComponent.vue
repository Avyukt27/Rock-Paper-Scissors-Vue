<script setup lang="ts">
defineProps({
    "bgColor": { type: String, required: true, default: 'none'},
    "message": { type: String, required: true, default: '' },
    "disabled": { type: Boolean, required: true, default: false }
});
</script>

<template>
    <button :class="['text-5xl rounded-md duration-300 no-underline min-h-[1fr] min-w-[1fr] justify-self-stretch', { 'hover:tracking-wider': !disabled }, bgColor]"
        type="button" :disabled="disabled">
        {{ message }}
    </button>
</template>
