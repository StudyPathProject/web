<script setup lang="ts">
const props = defineProps({
  to:{
    type:String,
    required: false,
    default: ""
  }
})
</script>

<template>
  <NuxtLink :to="to" class="flex justify-center items-center cursor-pointer w-32 h-12 bg-[#58BCA8] text-[#3D5B89] hover:bg-[#397B6E] rounded-xl font-bold shadow-lg">
    <slot />
  </NuxtLink>
</template>