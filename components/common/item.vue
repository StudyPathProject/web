<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true,
        defualt: ""
    }, 
    subTitle: {
        type:String,
        required: true,
        default: ""
    },
    imgSrc: {
        type: String,
        required: false,
        default: ""
    }
})
</script>

<template>
    <div class="flex flex-row w-fit h-28 items-center gap-4">
        <img :src="imgSrc">
        <div class="flex flex-col">
            <h1 class="font-semibold text-3xl">{{ title }}</h1>
            <p class="font-semibold mt-1">{{ subTitle }}</p>
        </div>
    </div>
</template>