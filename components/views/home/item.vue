<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    defualt: "",
  },
  subTitle: {
    type: String,
    required: true,
    default: "",
  },
  imgSrc: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <div class="flex flex-row w-fit h-28 items-center gap-4 md:mt-0 my-6">
    <div class="h-20 w-20">
      <slot></slot>
    </div>

    <div class="flex flex-col">
      <h1 class="font-semibold text-2xl max-w-lg">{{ title }}</h1>
      <p class="font-regular mt-1 max-w-lg text-lg">{{ subTitle }}</p>
    </div>
  </div>
</template>
