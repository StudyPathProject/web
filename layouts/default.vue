<template>
  <div class="w-full justify-between">
    <TheNavbar />
    <slot class="text-white" />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { useAuthStore } from "~/stores/auth";

export default {
  mounted() {
    const authStore = useAuthStore()
    authStore.getFromLocal()
  }
}
</script>
