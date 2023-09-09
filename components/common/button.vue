<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: false,
    default: ""
  },
  variant: {
    type: String,
    required: false,
    default: "main"
  }
})
</script>

<template>
  <NuxtLink :to="to"
    class="flex justify-center items-center cursor-pointer w-fit px-5 h-10 rounded-md font-semibold shadow-lg transition-all"
    :class="variant == 'main' ? 'bg-main text-main hover:bg-main-darker' : 'bg-main-2 text-white hover:bg-main-2-darker'">
    <slot />
  </NuxtLink>
</template>