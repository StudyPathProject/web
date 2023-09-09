<script setup lang="ts">
const props = defineProps({
    color: {
        type: String,
        required: false,
        default: "#58BCA8"
    },
    textColor: {
        type: String,
        required: false,
        default: "#3D5B89"
    },
    hoverColor: {
        type: String,
        required: false,
        default: "#397B6E"
    }
})
</script>

<template>
    <button :class="`bg-[${color}] text-[${textColor}] hover:bg-[${hoverColor}] w-32 h-12 rounded-xl font-bold shadow-lg`"><slot></slot></button>
</template>